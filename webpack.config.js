const path = require("path");

module.exports = {
    entry: "./src/DynamicIntegration.js", // Make sure this path matches where your component is
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "DynamicIntegration",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
