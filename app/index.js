const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8000;

// Routes/endpoints go here
// require('./routes')(app, {});

app.listen(port, () => {  
    console.log('Hello world from ' + port);
});