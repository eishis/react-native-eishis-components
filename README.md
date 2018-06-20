# Packages
## react-native-eishis-components
Main contents of npm package.

## react-native-eishis-components-example
Example usage of `react-native-eishis-components` .

## react-native-eishis-components-expo
Expo version of example.

# Development
## Linking packages
In default, you may need to run `yarn install` everytime edited components.
Using `yarn link` as below is recommended.

```
$ cd packages/react-native-eishis-components
$ yarn link
$ cd ../react-native-eishis-components-example(expo)
$ yarn link react-native-eishis-components
```