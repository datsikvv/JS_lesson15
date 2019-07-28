const fs = require('fs');
const dateTime = require('date-time');
const Event = require('events').EventEmitter;

let emt = new Event();

let eventLogin = 'login';
let eventLogout = 'logout';
let eventAction = "someAction";

emt.on('login', () => {
  logWrite(eventLogin);
 });

emt.on('logout', () => {
  logWrite(eventLogout);
 });

emt.on('someAction', () => {
  logWrite(eventAction);
 });

emt.emit(eventLogin);
emt.emit(eventAction);
emt.emit(eventLogout);

setTimeout(function () {
  emt.emit(eventLogin);
  setTimeout(function () {
    emt.emit(eventAction);
  }, 200);
  setTimeout(function () {
    emt.emit(eventLogout);
  }, 600);
}, 1000);

setTimeout(function () {
  emt.emit(eventLogin);
  setTimeout(function () {
    emt.emit(eventAction);
  }, 200);
  setTimeout(function () {
    emt.emit(eventLogout);
  }, 600);
}, 3000);

function logtime() {
  return dateTime() + ' ';
};

function logWrite(eventName) {
fs.appendFile('message.txt', logtime() + eventName + '\n', 'utf8', (err) => {
  if (err) throw err;
  console.log('The ' + eventName +  ' was appended to file!');
}); 
};