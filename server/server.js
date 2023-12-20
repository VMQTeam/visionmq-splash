const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json());

//statically serving my images 
const images = path.join(__dirname, '../client/assets');
app.use('/assets', express.static(images));

//serving webpack bundle
app.use('/build', express.static(path.join(__dirname, '../build')));

const indexhtml = path.join(__dirname, '../build/index.html');
app.use('/team', (req, res) => {
  res.status(200).sendFile(indexhtml);
})

app.use('/demo', (req, res) => {
  res.status(200).sendFile(indexhtml);
})

//servering my home page 
const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index) )


//global error handler function 
const errorHandler = (err, req, res, next) => {
  const defaultError = {
    log: 'Unexpected server error',
    status: 500,
    message: { err: 'Unexpected server error.'}
  }
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
}

app.use('*', (req, res) =>
  res.sendStatus(404)
);
app.use(errorHandler)


app.listen(PORT);
module.exports = app;