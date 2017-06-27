// Dependencies
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');


// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Load the public directory files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));


// Express - Handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: app.get('views')
}));


app.get('/', function (req, res) {
	res.render('index');
});


// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running at localhost:3000');
