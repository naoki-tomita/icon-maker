import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  entry: "./src/scripts/apps/index.tsx",
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ]
  }
};

export default config;