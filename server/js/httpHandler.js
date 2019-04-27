const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// receives the http request and serves data to the client 
module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url); //url=client origin
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    // var directions = ['up', 'down', 'left', 'right'];
    // var num = Math.floor(Math.random() * 4);
    res.end(directions[num]);
  // } else if (req.method === 'POST') {

  // }
  
  }
  res.end();
};
// res will have response data/methods
// before you are done, res.end(data)
// to get data, google node receive post