var express = require('express');
var router = express.Router();

var timesAccessed = 0;
var accessDateTime;
/* GET home page. */
router.get('/', function(_req, _res) {
  timesAccessed++;

  accessDateTime = new Date();
  var accessDateTimeString = accessDateTime.toJSON();
  
  console.log(
  	  "Connection ping @ "
  	+ accessDateTime
  	+ ". This server has been accessed "
  	+ timesAccessed
  	+ " times."
  	);

  _res.render('index', {
      title: 'Hello World!'
    , times_accessed: timesAccessed
    , access_date_time: accessDateTimeString
  });
});

module.exports = router;
