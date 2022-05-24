const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "app/bundle.js",
    // publicPath: "/",
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@hook": path.resolve(__dirname, "src/hooks/"),
      "@component": path.resolve(__dirname, "src/components/"),
      "@container": path.resolve(__dirname, "src/containers/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@style": path.resolve(__dirname, "src/sass/"),
      "@icon": path.resolve(__dirname, "src/assets/icons/"),
      "@image": path.resolve(__dirname, "src/assets/images/"),
      "@logo": path.resolve(__dirname, "src/assets/logos/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].min.css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name]-[hash].[ext]",
          outputPath: "assets/images",
        },
      },
      {
        type: "asset/resource",
        test: /(_fora.svg)$/i,
        generator: {
          filename: "assets/icons/[name]-[hash][ext][query]",
        },
      },
    ],
  },
};
