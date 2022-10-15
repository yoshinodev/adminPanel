const path=require('path');
const webpack=require('webpack');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { appendFile } = require('fs');
module.exports={
    devServer:{
        contentBase:path.resolve(__dirname,'demo'),
        compresss:true,
        publicPath: "demo",
        writeToDisk:true //to correctly upload the saas files
    },
    entry: './src/js/app.js',
    output:{
        filename: app.js,
        path: path.resolve(__dirname,'demo/js'),
        publicPath: "demo"
    },
    module:{
        rules:[//instructions for webpack to run when it encounters a file
            {
                test: /\.(scss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                    options:{
                        plugins: function(){
                            return[
                                require('autoprefixer')
                            ];
                        }
                    }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, //font files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts/',
                            publicPath: '../fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '../css/app.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
        ]
}
