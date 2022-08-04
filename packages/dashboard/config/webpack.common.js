const  { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { // pour le traitement des fonts
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {loader: 'file-loader'}
        ]
      },
      { // pour le traitement des fichiers .vue
        test: /\.vue$/i,
        use: [
          {loader: 'vue-loader'}
        ]
      },
      { // pour le traitement des fichiers css et scss
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Gestion des scripts es6, es7 ... vers es5
            plugins: ['@babel/plugin-transform-runtime'] // Gestion des features tels que async/await
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};