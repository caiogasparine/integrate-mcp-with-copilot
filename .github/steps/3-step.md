## Step 3: Solve issues with Agent Mode and GitHub MCP Server

Great workd doing that research and finding a potential collaboration opportunity.
Not only did we find some new ideas to help organize extracurricular activies, but we did all that quickly too.

Plenty of time to focus on the fun stuff, teaching our awesome students! 🌱

Btw, it seems the teachers have also been active.
Looks like they submitted some bugs and requests! Perfect! 🚀

Now, let's use our MCP server's tools and Copilot to do a bit of triage and get some work done.

### :keyboard: Activity: Easily implement an important issue

1. Ask Copilot to summarize the important issues.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Please search the issues find the top 2 most important.
   > If they have comments, please provide summaries.
   > ```

2. Review the suggested issues. If Copilot didn't give a specific recommendation, try providing some feedback to narrow the results.
3. With the list narrow, ask copilot to implement one.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > #codebase Let's do the first one. Add a comment that I am working on it and
   > assign it to me. Start a new branch, make the changes, then push them
   > and start a pull request. Make sure to link this issue and the new PR.
   > ```

   > ⚠️ **Warning:** Always verify the the actions Copilot is asking to perform, especially with the extrnal abilities provided by an MCP server.

4. Follow Copilot's recommendations to make the changes and create a pull request.

   > 💡 **Tip:** Copilot is conversational and iterative. You can always pause and provide additional guidance. Pausing is also useful if Copilot is acting slow. The servers might be busy! 🕝

5. Once the pull request is created, Mona will start checking your work. Give her a moment and keep watch of the comments. You will see her respond with progress info and the next step!

<details>
<summary>Having trouble?</summary><br/>

- If tools are not being requested, verify your MCP configuration is correct.
- If Copilot cannot retrieve results, verify you are using this Codespace's token or a Personal Access Token (PAT) with appropriate permissions. By default, the codespace token we are using only has access to this repository.

</details>
