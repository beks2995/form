import { Configuration } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: Configuration = {
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        test: /\.[tj]sx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
}

export default config
