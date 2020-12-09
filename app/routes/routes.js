const path = require('path');

module.exports = function(app, db) {
      app.get('/', (req, res) => {
        // res.send('Hello world :P');
        res.sendFile('views/index.html', {root: path.join(__dirname, '..') })
    });
};