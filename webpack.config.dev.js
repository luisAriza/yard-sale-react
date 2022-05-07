const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "app/bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@component": path.resolve(__dirname, "src/components/"),
      "@container": path.resolve(__dirname, "src/containers/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@style": path.resolve(__dirname, "src/sass/"),
      "@icon": path.resolve(__dirname, "src/assets/icons/"),
      "@image": path.resolve(__dirname, "src/assets/images/"),
      "@logo": path.resolve(__dirname, "src/assets/logos/"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    historyApiFallback: true,
    compress: true,
    port: 8050,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "public/index.html",
      filename: "index.html",
    }),
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "asset/images/[name]-[hash].[ext]",
        },
      },
    ],
  },
};
