# liferay-js-toolkit-showcase

This repository holds a project that may be deployed to Liferay DXP or Liferay
Portal to showcase different Liferay JS Toolkit loaders in action.

The git history is organized so that each commit is an incremental step in the
development of a full application. That way, you can follow `git log` to see
how it has been constructed and also reproduce the steps during development so
that you can see how each change affects the final solution.

To make things easier, some commits are prefixed with `[CP]`, a shorthand for
`Check Point`. These commits are intermediate states where it makes sense to
deploy the projects to the server. You can also deploy other commits, but you
won't notice any change until you arrive to a `[CP]` one.

To deploy the whole project to a Liferay instance you need to:

1. Create a symbolic link in `/opt/liferay` pointing to your local Liferay DXP
   or Liferay Portal installation (or, alternatively, install it there). If you
   are on Windows, you must place the Liferay installation and this repository's
   clone in the same drive.

2. Run `npm run deploy` in the root folder of this project: that will build and
   deploy all subprojects.

Now visit the
[git log](https://github.com/izaera/liferay-js-toolkit-showcase/commits/loaders)
of this repository to browse tutorial steps or clone it to your local drive and
use `git checkout <commit id>` commands to move between commits.

Remember that you can start checking out the oldest `[CP]` commit, running
`npm run deploy` to deploy things to Liferay and reading the description of the
commit to see the key points of interest in that commit.

Enjoy your ride!
