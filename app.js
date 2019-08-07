const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const fs = require('fs');

// app.set('views', './views')
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);





// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// });


//error handling
app.use((err, req, res, next) => {
	res.json(err);
});



module.exports = app;