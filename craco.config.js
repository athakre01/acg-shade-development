module.exports = {
  plugins: [
    {
      options: {
        baseUrl: "./src",
        jsConfigPath: "./jsconfig.json",
        source: "jsconfig",
      },
      plugin: require("craco-alias"),
    },
  ],
};
