const HtmlWebpckPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./app.js",
  plugins: [new HtmlWebpckPlugin({
        template:'./index.html',
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    //   HRM webpack5已经自带了, webpack5以下 需要使用 webpack-hot-middleware 该插件相关配置
    // 模块热替换,webpack默认开启该功能
    hot: true,
    // 模块热加载
    liveReload:true,
  },
};
