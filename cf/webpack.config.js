const path = require("path");
const webpack = require("webpack");


module.exports = {
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/browser/index.js"
    ],
    output: {
        path: path.resolve(__dirname, "build", "assets"),
        filename: "app.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                        },
                    },
                }],
                exclude: /node_modules/,
                include: __dirname,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            component: path.resolve(__dirname, "src", "component"),
            actions: path.resolve(__dirname, "src", "actions"),
            reducers: path.resolve(__dirname, "src", "reducers"),
            store: path.resolve(__dirname, "src", "store")
        }
    },
    devServer: {
        host: "localhost",
        port: 8080,
        hot: true,
        proxy: {
            "**": "http://localhost:3000"
        }
    }
}