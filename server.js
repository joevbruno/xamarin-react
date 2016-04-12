import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import util from 'util';

const server = express();

server.set('env', 'development');
server.set('port', process.env.PORT || 3000);
server.set('view engine', 'jade');
server.disable('x-powered-by');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.resolve(__dirname, './dist')));

server.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

server.listen(server.get('port'), () => {
  util.log(`Server running in ${server.get('env')} on port ${server.get('port')}`);
});
