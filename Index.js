// import packages
var express = require('express');
var app = express();

// what i want it to do
// take in a url, width, height, and take a screenshot and return a jpg


app.use(express.bodyParser());

app.get('/musician/:name', function(req, res) {
	//res.send('Hello Seattle\n');
	console.log(req.params.name);
	res.send('{"id": 1, "name": "Matt", "band": "BBQ Brawlers"}');
});

app.listen(3030);
console.log('Listening on port 3030...');