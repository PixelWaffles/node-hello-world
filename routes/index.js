var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(_req, _res) {
  _res.render('index', {
    title: 'Hello World!'
  });
});

module.exports = router;
