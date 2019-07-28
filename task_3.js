//  Для запуска (обновление каждые 5 секунд) использовать команду nodemon --delay 5 task_3.js
//  1. Проверить результат
//  2. Раскомментировать строку 38
//  3. Проверить результат в консоли через 5 секунд


//Для отключения от терминала необходимо выполнить команду при запуcке
// на Windows -  start node task_3.js
// на Linux - node task_3.js &
var nodemon = require('nodemon');

const http = require('http');
const fs = require('fs');
const request = require('request');

const hostname = 'localhost';
const port = 3000;

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2rmlXfaWPAjW3KUypbBG63SMCIDpCJd8kZMp-gPlmmV8_aJ3MRXnvAkVY').pipe(fs.createWriteStream('file.json'))

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2rmlXfaWPAjW3KUypbBG63SMCIDpCJd8kZMp-gPlmmV8_aJ3MRXnvAkVY', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
  var fileJson = JSON.parse(body);
});

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(fs.readFileSync('./file.json'));
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// console.log('Nodemon is working');