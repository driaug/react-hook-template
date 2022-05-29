# React Hook Template
Template repository you can use to easily deploy and publish a React hook to NPM.

## Important
### NPM Token
This setup automatically pushes your latest version to NPM. For this to work, you will need to add your NPM Token as a secret. You can do this in the settings under `Secrets > Actions > New Repository Secret`.

### Action Permissions
This setup makes use of a GitHub Action to automatically bump the version number of the `package.json`. If this actions fails, it is very well possible the action only has read access to the repository. Change it in the settings, under `Actions > General > Action Permissions`.