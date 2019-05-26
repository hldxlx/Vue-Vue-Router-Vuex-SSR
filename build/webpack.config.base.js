const path = require('path')                            //path是Nodejs中的基本包,用来处理路径
const createVueLoaderOptions = require('./vue-loader.config')


const isDev = process.env.NODE_ENV === "development"    //判断是否为测试环境,在启动脚本时设置的环境变量都是存在于process.env这个对象里面的
const config ={
    target: "web",
    entry:path.join(__dirname,'../client/index.js'),
    output:{                                            //声明出口文件
        filename: 'bundle.js',                          //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码
        path: path.join(__dirname,'../dist'),               //bundle.js保存的位置
        publicPath: 'public'
    },
    module:{                                            //因为webpack只能处理js文件,且只识别ES5的语法
        rules:[                                         //所以针对不同类型的文件,我们定义不同的识别规则,最终目的都是打包成js文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',                    //处理.vue文件
                options:createVueLoaderOptions(isDev)

            },
            {
                test: /\.jsx/,
                loader: 'babel-loader'                    //处理.vue文件
            },
            {
                test: /\.js$/,
                    loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }

        ]
    }
}


module.exports = config