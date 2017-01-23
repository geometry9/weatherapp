var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config()

var key = process.env.OPEN_WEATHER_API;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5 Day Weather Forecast' });
});

router.get('/forecast', function(req, res, next) {
  var endPoint = "http://api.openweathermap.org/data/2.5/forecast?q=NewYork,us&appid=" + key;
  console.log(endPoint);
  axios.get(endPoint)
  .then((data) => {
    console.log('hey');
    res.json({ data: data.data });
  }).catch((error)=> {
    console.log('heyo');
    res.json({ errors: error });
  });

});

router.post('/forecast/:lat/:lon', function(req, res, next) {
  var endPoint = "http://api.openweathermap.org/data/2.5/forecast?lat=" + req.params.lat + "&lon=" + req.params.lon + "&appid=" + key;
  console.log(endPoint);
  axios.get(endPoint)
  .then((data) => {
    res.json({ data: data.data });
  }).catch((error)=> {
    res.json({ errors: error });
  });

});

module.exports = router;
