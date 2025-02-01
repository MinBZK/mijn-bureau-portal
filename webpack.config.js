const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {},
  output: {
    filename: "template.js",
    path: path.resolve(__dirname, "src/vendor/roos/"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "node_modules/@nl-rvo/assets/fonts", to: "fonts" },
        { from: "node_modules/@nl-rvo/assets/icons", to: "icons" },
        {
          from: "node_modules/@nl-rvo/design-tokens/dist/index.css",
          to: "design-tokens/index.css",
        },
        {
          from: "node_modules/@nl-rvo/design-tokens/dist/index.js",
          to: "design-tokens/index.js",
        },
        {
          from: "node_modules/@nl-rvo/component-library-css/dist/index.css",
          to: "component-library-css/index.css",
        },
      ],
    }),
    new ReplaceInFileWebpackPlugin([
      {
        dir: "src/vendor/roos/icons/",
        files: ["index.css"],
        rules: [
          {
            search: /url\("(?!\/)/gi,
            replace: 'url("/vendor/roos/icons/',
          },
        ],
      },
    ]),
  ],
};
