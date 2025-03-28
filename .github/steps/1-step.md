## Step 1: Introduction to MCP and environment setup

Welcome to the **"Integrate Model Context Protocol with GitHub Copilot"** exercise! :robot:

In this exercise, you'll learn how Model Context Protocol (MCP) enhances the way you use GitHub Copilot.

> [!IMPORTANT]
>  This exercise may not explain the basics that were taught in the [Getting Started with Copilot](https://github.com/skills/getting-started-with-github-copilot) exercise. If you are new to Copilot we recommend starting with that one.


### What is Model Context Protocol (MCP)?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open standard that bridges AI models with external data sources and tools. It provides a universal interface for connecting AI assistants like GitHub Copilot to various system allowing them to access real-time data, perform actions in external systems, and leverage specialized tools beyond their built-in capabilities.
### :keyboard: Activity: Get to know your environment

Let's start up our development environment and familiarize with the environment.

We are using the same web application as in the [Getting Started with Copilot](https://github.com/skills/getting-started-with-github-copilot) exercise - the Mergington High School's extracurricular activities website.

1. Right-click the below button to open the **Create Codespace** page in a new tab. Use the default configuration.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. Validate the Copilot Chat extension is installed
1. In the left sidebar, select the `Run and Debug` tab and then press the **Start Debugging** icon.

   <img width="300" alt="image" src="https://github.com/user-attachments/assets/50b27f2a-5eab-4827-9343-ab5bce62357e" />

1. Throughout the exercise, you can access the website link from the `ports` tab on port `8000`.

### :keyboard: Activity: Set up a MCP server for your project

1. Inside your codespace, create a new file named `mcp.json` in the `.vscode` directory and paste the following contents:

  ```json
  // .vscode/mcp.json
  {
    "servers": {
      "github": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-github"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "${env:GITHUB_TOKEN}"
        }
      }
    }
  }
  ```

1. Save the file and you should see `Start` button show up like so:

    ![image](https://github.com/user-attachments/assets/c82a4202-1f4a-4123-ad14-5e33ecd6316c)


1. Start the server and validate it is running.
   1. The `.vscode/mcp.json` file should show if the server you started is running

      <details>
      <summary>:camera_flash: See screenshot</summary><br/>
   
      ![image](https://github.com/user-attachments/assets/80f3fcda-34a8-486e-95a3-c166e9152b9a)
   
      </details>

   1. You should see additional tools available in Copilot Agent Mode
   
      <details>
      <summary>:camera_flash: See screenshot</summary><br/>
   
      ![image](https://github.com/user-attachments/assets/95af044c-3f26-4f5c-b933-7630db72eb67)
      
      </details>

   1. You can use the VSCode command palette `Ctrl+Shift+P` or `Command+Shift+P` on Mac.
   Start typing `> MCP` to see different MCP commands, such as listing active servers.

      <details>
      <summary>:camera_flash: See screenshot</summary><br/>
   
      ![image](https://github.com/user-attachments/assets/6a127ac2-a6dc-495b-bc5f-d52425f709f8)
   
      </details>




1. Commit and push the `.vscode/mcp.json` file to the `main` branch


<details>
<summary>Having trouble?</summary><br/>

Make sure you:

- Properly copied the `json` contents above to `.vscode/mcp.json` file
- Pushed your changes to the `main` branch

</details>
