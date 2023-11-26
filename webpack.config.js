const path = require('path');

module.exports = {
  entry: './server.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      url: require.resolve('url/'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      timers: require.resolve('timers-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
};
