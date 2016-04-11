import express from 'express';
import path from 'path';
import webpack from 'webpack';
import compression from 'compression';
// import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../../webpack.config.login.babel';
import util from 'util';
import { debug as DEBUG } from '../../config';

const server = express();

server.set('env', DEBUG ? 'development' : 'production');
server.set('port', process.env.PORT || 3000);
server.set('view engine', 'jade');
server.disable('x-powered-by');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(compression());

const compiler = webpack(config);
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
server.use(morgan('dev'));
server.use(webpackMiddleware(compiler, {
  historyApiFallback: true,
  publicPath: '',
  noInfo: true,
  stats: { colors: true }
}));
server.use(webpackHotMiddleware(compiler));
server.use(express.static(path.resolve(__dirname, '../../../../../G2.Public/Dist')));

server.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'index.html'));
});
server.get('/cancel-get', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'cancel-get.html'));
});
server.get('/cancel', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'cancel.html'));
});
server.get('/error', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'error.html'));
});
server.get('/forbidden', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'forbidden.html'));
});
server.get('/nextprn', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'nextprn.html'));
});
server.get('/redirect-get', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'redirect-get.html'));
});
server.get('/redirect', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'redirect.html'));
});
server.get('/sslredir', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'sslredir.html'));
});
server.get('/sslredir-post', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'sslredir-post.html'));
});
server.get('/useridandpasscode', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../Public', 'useridandpasscode.html'));
});

server.listen(server.get('port'), () => {
  util.log(`Offline server running in ${server.get('env')} on port ${server.get('port')}`);
});
