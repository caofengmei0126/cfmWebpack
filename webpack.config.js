let path = require('path');
//这是一个根据html模板，自动插入打包后的文件并保存到指定目录，指定文件名的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
//导出的配置对象
module.exports = {
    //打包的入口文件
    entry: './src/index.js',
    output: {//配置输出的文件夹和文件名
        path: path.resolve('build'),//保存的文件夹
        filename: 'bundle.js'//保存的文件名
    },
   /* devServer: {
        port: 1989,
        contentBase: './build'
    },*/
    module: {
        loaders: [
            {
                test: /\.jsx?/,//如果加载的模块是以js 或者jsx结尾的
                loader: 'babel-loader',//使用此babel加载
                query: {//指定配置预设
                    presets: ['es2015', 'react']
                },
                //不再扫描node_modules代码, 省约时间
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                //对于资源文件或二进制文件只会做为资源来加载
                test: /\.(svg|eot|woff|woff2|ttf|jpg|gif|png|bmp)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
