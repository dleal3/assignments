// Was missing the webpack.config.js folder for this project
// Referred to Justin's code on github to see what the correct layout was
module.exports = {
  entry: "./js/main.js",
  output: {
      path: "./dist",
      filename: "bundle.js"
  }
}
