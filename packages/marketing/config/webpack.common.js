module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // Gestion du jsx et des scripts es6, es7 ... vers es5
            plugins: ['@babel/plugin-transform-runtime'] // Gestion des features tels que async/await
          }
        }
      }
    ]
  }
};