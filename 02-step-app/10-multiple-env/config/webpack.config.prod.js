const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
// 抽离css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩JS代码插件
const TerserPlugin = require("terser-webpack-plugin");

const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

// 把module.exports 改写为函数形式,可以拿到环境变量参数
module.exports = {

  // 设置出口
  output: {
    // contenthash 如果文件内容有变化,该内容的hash值也会变化
    filename: "scripts/[name].[contenthash].js",
    // 配置公共路径
    publicPath: "http://localhost:8080/",
  },
  // webpack编译模式为development/production
  mode: "production" ,
  // 优化方面的配置
  optimization: {
    minimizer: [
      // css 文件压缩时,配合mode 为production使用
      new CssMinimizerPlugin(),
      // 压缩js 文件
      new TerserPlugin(),
    ],
  },
  performance:{
    //   忽略(屏蔽)打包时的警告
      hints:false,
  }
};
