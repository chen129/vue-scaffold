const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

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
                    test: /\.m?js$/,
                    exclude: file => (
                        /node_modules/.test(file) &&
                        !/\.vue\.js/.test(file)
                    ),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        devMode
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[local]_[hash:base64:8]'
                            }
                        },
                        {
                            loader: 'px2rem-loader',
                            options: {
                                remUni: 75,
                                remPrecision: 8
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'less-loader'
                        }
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
            }),
            autoprefixer
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
