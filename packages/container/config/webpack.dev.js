const {merge} = require('webpack-merge'); // Pour fusionner plusieurs configurations webpack (common + dev/prod)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8083/'
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8082/remoteEntry.js',
        auth: 'auth@http://localhost:8084/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8085/remoteEntry.js',
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);