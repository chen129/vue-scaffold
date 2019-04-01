const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'

    return {
        entry: {
            app: './app/main.js'
        },
        devServer: {
            contentBase: './dist',
            compress: true, // 开启gzip
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        devMode
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                // 开启 CSS Modules
                                modules: true,
                                // 自定义生成的类名
                                localIdentName: '[local]_[hash:base64:8]'
                            }
                        },
                        {
                            loader: 'px2rem-loader',
                            options: {
                                remUni: 24,
                                remPrecision: 8
                            }
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    use: [
                        'vue-loader'
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css'
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        output: {
            filename: '[name].[hash].min.js',
            path: __dirname + '/dist'
        }
    }
}
