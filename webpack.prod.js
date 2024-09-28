import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import pkg from 'webpack'

const { ProvidePlugin, ProgressPlugin } = pkg

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
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
    new CleanWebpackPlugin(), // Cleans the /dist folder before each build
    new GenerateSW({
      swDest: 'service-worker.js', // Output name for the service worker file
      clientsClaim: true, // Allows the service worker to take control of all clients once it's activated
      skipWaiting: true, // Skip waiting period for new SW to activate
    }),
  ],
})
