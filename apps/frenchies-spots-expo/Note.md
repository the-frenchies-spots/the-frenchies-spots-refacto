# Native

A [react-native](https://reactnative.dev/) app built using [expo](https://docs.expo.dev/)

https://github.com/expo/expo/issues/7036

```
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['deprecated-react-native-listview'],
      },
    },
    argv,
  );
  return config;
};
```

packages :

"main": "./src/index.tsx",
"types": "./src/index.tsx",
"sources": "./src/index.tsx",

# Commit rules:

- if the task isn't finish add wip to the description
- for the PATH it's "nameProject-api" or "nameProject-front" we've to indicate if it's front or api, this will be usefull to go to a monorepo
- to change the rule of the commit you've to go in the commitlint.config.js file (cf the example where we disable the length of the message which was 100 max)

- feat : is used when you add or continue to work on a fonctionnality
- fix : is used when you fixed, correct a bug
- docs : is used when you add or update the documentation of the project
- build : initialization of the project
- chore : work on ----- other than the build
- pref : improve the performance
- refactor : refatorisation of code
- style : changement of
- test : add or update code test

- Example of a "good" commit
  feat(path): "description what you did"
  fix(path): "description what you fixed"
