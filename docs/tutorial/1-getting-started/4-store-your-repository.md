---
id: store-your-repository
title: 5. Storing your repository online
tutorial:
  prev: tutorial/getting-started/{preferredUI}/generate-crud-pages
  next: tutorial/getting-started/deploy-project
---

In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.

:::info

If you are already proficient in git, and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ["Deploy your app to the Web"](/docs/tutorial/getting-started/deploy-project).

:::

## Create a repository on GitHub

To create a repository on GitHub, follow these steps:

1. Go to [GitHub.com](https://github.com/) and log in with your account.

2. Click the plus icon in the top right corner of the page and select "New repository".

3. Enter a name for your repository and a brief description (optional).

4. Choose whether you want your repository to be public or private.

5. Click "Create repository".

Refer to the [GitHub documentation](https://docs.github.com/en/get-started/quickstart/create-a-repo) if you want to learn more and see more detailed instructions and options.

## Commit your local code to GitHub

After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub.

To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the [git documentation](https://git-scm.com/docs) or follow these steps:

1. Navigate to your project directory in the terminal.

2. Initialize git by running the command `git init -b main`

3. Connect your local repository to the remote repository on GitHub by running the command `git remote add origin <url>`, where `<url>` is the URL of your GitHub repository.

4. Add your changes to the staging area by running the command `git add .`.

5. Commit your changes by running the command `git commit -m "Initial commit"`.

6. Push your changes to GitHub by running the command `git push -u origin master`.

For more detailed instructions and options, you can refer to the [GitHub documentation](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## See your project on GitHub

To confirm that your project has been successfully stored on GitHub, go to [GitHub.com](https://github.com/) and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files.

<Checklist>

<ChecklistItem id="store-your-repo">
I have created a repository on GitHub.
</ChecklistItem>
<ChecklistItem id="store-your-repo-2">
I have uploaded my project to GitHub.
</ChecklistItem>

</Checklist>
