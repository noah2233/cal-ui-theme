const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(common, {
  mode: "development",
});
