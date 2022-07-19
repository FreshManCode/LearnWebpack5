// 把module.exports 改写为函数形式,可以拿到环境变量参数
module.exports = {
  // 设置出口
  output: {
    //  Multiple chunks emit assets to the same filename bundle.js 如果用同一个filename,例如名称为bundle.js
    // contenthash 如果文件内容有变化,该内容的hash值也会变化
    filename: "scripts/[name].js",
  },
  // webpack编译模式为development/production
  mode:"development",
  // 使用source-map, 方便排错,在出现错误时,浏览器控制台上能看到未被hash处理的js文件
  devtool: "inline-source-map",

  // 使用webpack-dev-server 动态加载
  devServer: {
    static: "./dist",
  }
};
