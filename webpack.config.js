const path = require("path");

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      buffer: require.resolve("buffer"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      timers: require.resolve("timers-browserify"),
      os: require.resolve("os-browserify/browser"),
      url: require.resolve("url/"),
      util: require.resolve("util/"),
    },
  },
};
