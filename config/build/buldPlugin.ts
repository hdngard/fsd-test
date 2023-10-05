import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOptions} from "./types/config";
const HTMLWebpackPlugin = require('html-webpack-plugin');

export function buildPlugin({paths}: BuildOptions): WebpackPluginInstance[] {

    return [
        new ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        })
    ]
}