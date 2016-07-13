import * as http from 'http';
import * as message from './message';

const server = http.createServer((request, response) => {
  console.log('request received');
  response.statusCode = 200;
  response.end(message.myMessage);
});

server.listen(8080, () => {
  console.log('listening on 8080');
});
