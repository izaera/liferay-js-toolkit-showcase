# liferay-js-toolkit-showcase

This repository contains tutorials showing how to use the [Liferay JS Toolkit](https://github.com/liferay/liferay-js-toolkit).

Each tutorial is contained in a branch and contains a project or projects that may be deployed to Liferay DXP or Liferay Portal.

The git history is organized so that each commit is an incremental step in the development of a full application. That way, you can follow git log to see how it has been constructed and also reproduce the steps during development so that you can see how each change affects the final solution.

To make things easier, some commits are prefixed with [CP], a shorthand for Check Point. These commits are intermediate states where it makes sense to deploy the projects to the server. You can also deploy other commits, but you won't notice any change until you arrive to a [CP] one.

See the README file in each branch to get help on the details of each tutorial.

Now you can use GitHub's UI branch selector on the top or click on any of the links below to navigate to a tutorial:

- [Browse React's tutorial branch](https://github.com/izaera/liferay-js-toolkit-showcase/tree/react)

## And a warning

One more note before you leave: because of the structure of this repo, we may need to use [git push --force](https://git-scm.com/docs/git-push#Documentation/git-push.txt---force) in the future so take care if you clone it because your local copy can become stale.

Should that be the case, just remove your local copy of the repository and clone it again.
