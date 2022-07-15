
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 设置入口
    entry : './src/index.js',
    // 设置出口
    output:{
        filename:'bundle.js',
        // path设置的时候一定是绝对路径,否则会报错, ** path is nor an absolute path!
        // path.resolve(__dirname,'./dist') 在webpack.config.js 当前文件目录下,拼接一个dist文件夹
        path:path.resolve(__dirname,'./dist'),
        clean:true,
        // 配置资源打包文件路径以及文件名方法1 配置资源打包在dist中的路径,以及资源文件名  contenthash webpack会自动生成hash名 ext 扩展名为webpack自动填充的
        assetModuleFilename:'images/[contenthash][ext]',
    },
    // webpack编译模式为development
    mode:'development',
    // 使用source-map, 方便排错,在出现错误时,浏览器控制台上能看到未被hash处理的js文件
    devtool:'inline-source-map',

    // 使用webpack-dev-server 动态加载
    devServer:{
        static:'./dist'
    },
    // 配置插件
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html',
            filename:'app.html',
            // 以index.html 为模板基础,生成的文件名是app.html,同时把打包生成的js引入路径,
            // 不放入head中,放到body中,可以观察dist中,app.html和index.html的区别
            inject:'body'
        })
    ],
    // asset-modules 资源文件管理模块
    module:{
        rules:[
            {
                test:/\.png$/,
                type:'asset/resource',
                //配置资源打包文件路径以及文件名方法2 
                //generator 的优先级高于ouput中的assetModuleFilename 的优先级
                generator:{
                    filename:'images/[contenthash][ext]'
                }
            },
            {
                test:/\.svg$/,
                type:'asset/inline',
            },
            {
                test:/\.txt$/,
                type:'asset/source',
            },
            {
                test:/\.(jpg|jpeg)$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
            // 当图片资源文件大于 4M的时候,使用asset/resource 类型,本地数据类型,否则就是内部资源编码成base64加载
                        maxSize:4*1024*1024,
                    }
                }
            }
        ]

    },
}