module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      }],
      ["module-resolver", {
        "alias": {
          "@actions": "./app/redux/actions",
          "@assets": "./app/assets",
          "@components": "./app/components",
          "@reducers": "./app/redux/reducers",
          "@requests": "./app/requests",
          "@routes": "./app/routes",
          "@screens": "./app/screens",
          "@utils": "./app/utils",

        },
      }]
    ]
  };
};
