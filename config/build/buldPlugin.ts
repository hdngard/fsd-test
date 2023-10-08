import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const HTMLWebpackPlugin = require('html-webpack-plugin');

export function buildPlugin({paths}: BuildOptions): WebpackPluginInstance[] {

    return [
        new ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}