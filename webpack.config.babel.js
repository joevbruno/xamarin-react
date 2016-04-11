import webpack from 'webpack'; // eslint-disable-line no-unused-vars
import path from 'path';

const config = {
  devtool: 'source-map',
  cache: true,
  contentBase: path.resolve(__dirname ),
  entry: { main: ['webpack-hot-middleware/client?reload=true', path.resolve(__dirname, '/src/app.jsx' ]) }
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: `[name].${outputFileName}`,
    publicPath: '/Dist'
    pathinfo: true,
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js'
  },
  resolve: {
    unsafeCache: true,
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'],
        exclude: [nodeModules]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/, loaders: ['json']
      }
    ]
  },
  plugins: {

  }
};
