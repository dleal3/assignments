// Was missing the webpack.config.js folder for this project
// Referred to Justin's code on github to see what the correct layout was
module.exports = {
  entry: "./js/main.js", // this entry tells us what file to look into
  output: { // output tells us where to place our bundled 
      path: "./dist",
      filename: "bundle.js"
  }
}
