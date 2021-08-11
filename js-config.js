const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

let jsExports = {};

// common configurations
const config = {
    mode: "production", // development OR production
    output: {
        path: path.resolve(__dirname, "dist/js/"), 
        filename: "[name].min.js"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".css", ".scss"],
        alias: {
            js: path.resolve(__dirname, "entry/js/")
        }
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: ["/node_modules"],
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                browsers: ["> 5% in KR"],
                                node: "current"
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ 
                extractComments: false,
                terserOptions: {
                    ecma: 6,
                    compress: { drop_console: true },
                    output: { comments: false, beautify: false }
                }
            })
        ]
    }   
}

// config list
jsExports.index = Object.assign({}, config, {
    entry: {
        index: "./entry/js/index.js"
    }
});

module.exports = jsExports;