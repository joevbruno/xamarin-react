import webpack from 'webpack'; // eslint-disable-line no-unused-vars
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import autoprefixer from 'autoprefixer';
import { exec } from 'child_process';

exec('npm run webpack', () => {

});

const DEBUG = process.env.NODE_ENV === 'development' ? true : false;
console.log(process.env.NODE_ENV, DEBUG);
const env = DEBUG ? new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
    BABEL_ENV: JSON.stringify('development'),
  }
}) :
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    BABEL_ENV: JSON.stringify('production'),
  }
});

const prodPlugins = DEBUG ? [] : [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true
    },
    mangle: {
      except: ['$super', '$', 'exports', 'require']
    },
    output: {
      comments: false
    }
  })
];

export default {
  devtool: 'source-map',
  cache: true,
  contentBase: path.resolve(__dirname),
  entry: {
    main: [path.resolve(__dirname, './src/app.jsx')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: DEBUG ? '[name].bundle.js' : '[name].bundle.min.js',
    publicPath: '/dist',
    pathinfo: true
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
        loaders: ['babel-loader?cacheDirectory'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/, loaders: ['json']
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css?modules&sourceMap&localIdentName=[local]___[hash:base64:4]!'
          + 'postcss!'
          + 'sass?outputStyle=expanded&sourceMap'
        )
      },
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new ExtractTextPlugin(DEBUG ? '[name].css' : '[name].min.css', { allChunks: true }),
    new WebpackNotifierPlugin(),
    ...env,
    ...prodPlugins
  ]
};
