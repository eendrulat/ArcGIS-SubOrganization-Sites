var express = require('express');
var app = express();

const agencies = require('./data/sample');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('ArcGIS Online Sub-Organization API Sample');
});

// /API -- all
// /API?agencyName=all -- all
// /API?agencyName=ODF -- specific agency
app.get('/API', function (req, res) {
  if(req.query.agencyName) {
    if(req.query.agencyName == 'all') res.json({agencies});
    var agency = agencies.filter(a => a.abbr.toUpperCase() == req.query.agencyName.toUpperCase());
    res.json(agency[0] || {message: 'no agency by that name was found'});
  } else {
    res.json({agencies});
  }
});

app.listen(process.env.port || 4370);
