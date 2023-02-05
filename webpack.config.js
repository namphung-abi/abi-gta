const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        static: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "assets", to: "assets", noErrorOnMissing: true }],
        }),
    ],
};
