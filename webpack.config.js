const path = require("path");

module.exports = {
    mode: "development", // Set mode to 'development' or 'production' as needed
    entry: "./src/DynamicIntegration.js",
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
