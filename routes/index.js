var express = require('express');
var router = express.Router();

var timesAccessed = 0;
/* GET home page. */
router.get('/', function(_req, _res) {
  timesAccessed++;

  _res.render('index', {
      title: 'Hello World!'
    , times_accessed: timesAccessed
  });
});

module.exports = router;
