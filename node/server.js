const http = require('http');
const { readFile, writeFile } = require('fs');
const { error } = require('console');

const getPath = path => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

getPath('./files/first.txt').then(res => console.log(res));

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my landing page');
    return;
  }
  if (req.url === '/about') {
    res.end('Welcome to my about page');
    return;
  }
  if (req.url === '/contact') {
    res.end('Welcome to my contact page');
  }

  res.end();
});

server.listen(5000);

const startAsyncFunction = async () => {
  try {
    const response1 = await getPath('./files/name.txt');
    const response2 = await getPath('./files/second.txt');

    writeFile(
      './files/mixed-up.txt',
      `${response1} ${response2}`,
      (error, result) => {}
    );
  } catch (error) {
    console.error(error);
  }
};

startAsyncFunction();
