## Step 2: Agent Mode and an MCP Server for GitHub

Great work! You just connected your first MCP server to GitHub Copilot! 🎉

🚨 It seems the teachers keep submitting bugs and requests! So many good ideas! We should probably look in to them and start researching for other upgrades.

Fortunately, with an MCP server for GitHub, triaging these and even doing some research to get ahead should be pretty quick! 🕵️

### How do we use an MCP server's tools?

Good news! The same way you would normally interact with Copilot, natural language. Just keep in mind the available capabilities and any permission restrictions from your token.

So, with the MCP Server available, we can now ask Copilot things beyond just our code. Here are some ideas to imagine the possibilities:

For example:

- Searching issues considering description, comments, and likes.
- To open, update, or close issues on another repository.
- Comparing repositories.
- Learning about other authors you are working with.
- Retrieve an issue, make changes on a branch, and start a pull request.

Isn't that cool?! Now let's do it! 👩‍🚀

### :keyboard: Activity: Quickly find and save ideas

1. Close any open files. This will help reduce unnecessary context.

2. Ensure the **Copilot Chat** panel is open and **Agent** mode is selected. Verify the MCP server tools are also still available.

3. Ask copilot to search github for projects similar to this one.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Are their any other repositories for organizing extra curricular actitivities?
   > ```

4. When an MCP tool is required, Copilot will ask permission. Click **Continue**.

   <img width="250" alt="request permission dialog" src="https://github.com/user-attachments/assets/d14ea944-5443-4b8a-a4d2-ae677fdb274c" />

5. Ask Copilot to describe one of the projects.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Please look at the code for the 3rd option and give me a detailed description of the features.
   > ```

6. (optional) You might pick a project that is still young. If that happens, Copilot might say there isn't much to describe. Instead just ask to review a different one. Example:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Ok. How about the first one then?
   > ```

7. Use Copilot to compare and generate ideas for enhancements.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Which of these features would be new for our project?
   > ```

8. Nice! Let's have Copilot create issues to save these ideas.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > I like it. Let's create issues for these.
   > ```

9. Copilot will ask for permssion to create issues on your repository. Click **Continue** for each new issue.

   <img width="250" alt="request permission dialog" src="https://github.com/user-attachments/assets/52635294-950a-4168-b71e-498eb769f3af" />

10. With the new issues created, Mona should already be busy checking your work. Give her a moment and keep watch in the comments. You will see her respond with progress info and the next lesson.

11. (Optional) Let's see if the author has other projects we might be interested in.

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > What was the name of the owner of the repo we just reviewed?
    > Search GitHub and give me a summary of other projects they have recently worked on.
    > ```

    > 🪧 **Note:** We explicitly asked about the owner to help guide Copilot with the relative reference.

### 💡 Important Notes

The Model Context Protocal (MCP) is quickly evolving. Many servers, including the [Official GitHub MCP server](https://github.com/github/github-mcp-server) are in development and do not have full parity with their stable APIs.

Prompt examples that aren't possible (yet):

```prompt
Please list the top contributors in the discussions area
for the "Skills" GitHub organization.
```

```prompt
Generate a summary of recent work for each follower in the
'Skills' GitHub organization. Use those reviews to identify
developers that might produce educational and training conent.
Give them each a ranking score and save in a CSV file.
```
