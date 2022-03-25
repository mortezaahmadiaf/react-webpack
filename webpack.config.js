const webpack = require("webpack");
const path = require("path");
var moment = require("moment");
moment().format();
require("dotenv").config();
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const loaderUtils = require("loader-utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const localIdentName = (context, localIdentName, localName, options) => {
  // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
  const fileNameOrFolder = context.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? "[folder]"
    : "[name]";
  // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
  const hash = loaderUtils.getHashDigest(
    path.posix.relative(context.rootContext, context.resourcePath) + localName,
    "md5",
    "base64",
    5
  );
  // Use loaderUtils to find the file or folder name
  const className = loaderUtils.interpolateName(
    context,
    fileNameOrFolder + "_" + localName + "-" + hash,
    options
  );
  // remove the .module that appears in every classname when based on the file.
  return className.replace(".module_", "-");
};

// For our css modules these will be locally scoped
const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      getLocalIdent: localIdentName,
    },
    importLoaders: 2,
    // camelCase: true,
    sourceMap: false, // turned off as causes delay
  },
};

// For our normal CSS files we would like them globally scoped
const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: "global",
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};

// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: "development",
    entry: ["babel-polyfill", "./src/index.js"],
    plugins: [new CleanWebpackPlugin()],
    output: {
      // add public path to nested route
      publicPath: "/",
      path: path.join(__dirname, "public"),
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        // style loader
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, CSSLoader, "sass-loader", "postcss-loader"],
        },
        // css|scss module loader
        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, CSSModuleLoader, "sass-loader", "postcss-loader"],
        },
        // less loader
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        // image file loader
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ["file-loader?name=/dist/assets/images/[name].[ext]"],
          /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
          exclude: path.resolve(__dirname, "./src/assets/fonts"),
        },
        // file loader
        {
          test: /\.(ttf|eot|woff|woff2|svg)$/,
          use: ["file-loader?name=/dist/assets/fonts/[name].[ext]"],
          exclude: path.resolve(__dirname, "./src/assets/images"),
        },
        // add jquery globaly
        {
          test: require.resolve("jquery"),
          loader: "expose-loader",
          options: {
            exposes: { globalName: "$", override: true },
          },
        },
        // add lodash globaly
        {
          test: require.resolve("lodash"),
          loader: "expose-loader",
          options: {
            exposes: { globalName: "_", override: true },
          },
        },
        //  Underscore.js is a utility-belt library for JavaScript that provides
        //  support for the usual functional suspects (each, map, reduce, filter...)
        //  without extending any core JavaScript objects
        {
          test: require.resolve("underscore"),
          loader: "expose-loader",
          options: {
            exposes: [
              "_.map|map",
              {
                globalName: "_.reduce",
                moduleLocalName: "reduce",
              },
              {
                globalName: ["_", "filter"],
                moduleLocalName: "filter",
              },
            ],
          },
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: {
        moment: "moment/moment.js",
      },
    },
    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      host: "localhost",
      port: 3000,
      historyApiFallback: true,
      open: true,
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "./src/styles/index.css",
        chunkFilename: "./src/styles/index.css",
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new MomentLocalesPlugin(),
      new webpack.DefinePlugin({
        API_ENDPOINT: JSON.stringify(process.env.API_ENDPOINT),
      }),
    ],
  };
};
