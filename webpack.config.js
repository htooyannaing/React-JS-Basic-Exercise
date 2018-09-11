const path = require('path');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}

module.exports = config;

// const path = require('path');

// const DIST_DIR = path.resolve(__dirname, "dist");
// const SRC_DIR = path.resolve(__dirname, "src");
// var config = {
//     entry: SRC_DIR + "/app/index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js?/,
//                 include: SRC_DIR
//                 loader: "babel-loader",
//                 query: {
//                     presets: ["react", "es2015", "stage-2"]
//                 }
//             }
//         ]
//     }
// }

// module.exports = config;