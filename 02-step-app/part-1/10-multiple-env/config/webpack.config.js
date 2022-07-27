const {merge} = require("webpack-merge")

const commonConfig = require('./webpack.config.common')
const productionConfig  = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

// 通过启动脚本中的 --env 参数来设置相关参数
module.exports = (env)=>{
    console.log('env is:',env);
    switch (true) {
        case env.development:
            return merge(commonConfig,developmentConfig)
        case env.production:
            return merge(commonConfig,productionConfig)
        default:
            return new Error('no matching configuration was found')

    }
}