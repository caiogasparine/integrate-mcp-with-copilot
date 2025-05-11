import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import pkg from "pg";
const { Client } = pkg;

// PostgreSQL connection config (replace with your actual credentials or use env vars)
const pgClient = new Client({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "password",
  database: process.env.PGDATABASE || "mydb"
});
await pgClient.connect();

const server = new Server({
  name: "example-server",
  version: "1.0.0"
}, {
  capabilities: {
    resources: {}
  }
});

// Helper: get all table schemas
async function getTableSchemas() {
  const tables = await pgClient.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`);
  const schemas = [];
  for (const row of tables.rows) {
    const columns = await pgClient.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1`, [row.table_name]);
    schemas.push({
      uri: `postgresql://table/${row.table_name}`,
      name: row.table_name,
      columns: columns.rows
    });
  }
  return schemas;
}

// MCP: List resources (tables)
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const schemas = await getTableSchemas();
  return { resources: schemas };
});

// MCP: Tool for read-only SQL queries
server.setTool({
  name: "run_readonly_sql_query",
  description: "Run a read-only SQL query (SELECT only) on the PostgreSQL database.",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string", description: "SQL SELECT query to run" }
    },
    required: ["query"]
  },
  outputSchema: {
    type: "object",
    properties: {
      rows: { type: "array", items: { type: "object" } }
    }
  },
  handler: async ({ query }) => {
    if (!/^\s*select/i.test(query)) throw new Error("Only SELECT queries are allowed.");
    const result = await pgClient.query(query);
    return { rows: result.rows };
  }
});

// MCP: Prompts for common data analysis tasks
server.setPrompt({
  name: "summarize_table",
  description: "Summarize a table: row count, column types, and sample rows.",
  inputSchema: {
    type: "object",
    properties: {
      table: { type: "string", description: "Table name" }
    },
    required: ["table"]
  },
  outputSchema: {
    type: "object",
    properties: {
      rowCount: { type: "number" },
      columns: { type: "array", items: { type: "object" } },
      sample: { type: "array", items: { type: "object" } }
    }
  },
  handler: async ({ table }) => {
    const [{ count }] = (await pgClient.query(`SELECT COUNT(*)::int FROM "${table}"`)).rows;
    const columns = (await pgClient.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1`, [table])).rows;
    const sample = (await pgClient.query(`SELECT * FROM "${table}" LIMIT 5`)).rows;
    return { rowCount: count, columns, sample };
  }
});

// Connect transport
const transport = new StdioServerTransport();
await server.connect(transport);
