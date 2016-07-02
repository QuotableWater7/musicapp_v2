module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "../app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};
