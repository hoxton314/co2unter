import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import pkg from 'webpack'

const { ProvidePlugin, ProgressPlugin } = pkg

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
  },
  plugins: [
    new ProgressPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'CO2UNTER',
      template: './src/index.html',
      inject: true,
    }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
})
