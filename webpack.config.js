const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/embed.tsx'),
  output: {
    path: path.join(__dirname, 'build/static/js'),
    filename: `ngen-cal-bundle.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript", ["@babel/preset-react",{"runtime": "automatic"}]],
            },
          },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
