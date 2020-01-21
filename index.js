var cors = require('cors');
var querystring = require('querystring');
var http = require('http');
var express = require('express');
var request = require('request');
var cacheControl = require('express-cache-controller');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();
var server = app.listen(5000, function () {
  console.log("We have started our server on port 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header('X-API-Key', '80IAYvQxAS3q4jP9WvSiSRlGcKFU16v1COqRonpa'),
    next();
});
app.use(cors());
app.use(cacheControl({
  noCache: true
}));

const KEY = "80IAYvQxAS3q4jP9WvSiSRlGcKFU16v1COqRonpa";
const ADDRESS = "";

/**
 * API calls
 */
app.get("/", function (req, res) {
  res.html("<h1>page</h1>");
  let resource = "Index page";
  res.json(resource);
});

app.get('/api/get-campaign', function (req, res) {
  axios.get('https://esobbc6302.execute-api.eu-west-1.amazonaws.com/default/campaigns/*', {
    headers: {
      crossDomain: true,
      'X-API-Key': '80IAYvQxAS3q4jP9WvSiSRlGcKFU16v1COqRonpa'
    }
  })
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      console.log(error.response)
    });

});


app.post('/api/add-campaign', function (req, res, next) {
  console.log(req.body.inputID);
  // let data = {
  //   id: req.body.inputID,
  //   startDate: req.body.startDate,
  //   endDate: req.body.endDate,
  //   targetImpressions: req.body.targetImpressions
  // }

  
  request.post({
    headers: {
      crossDomain: true,
      'Accept': 'application/json',
      'X-API-Key': '80IAYvQxAS3q4jP9WvSiSRlGcKFU16v1COqRonpa',
      'Content-Type': 'application/json'
    },
    url: 'https://esobbc6302.execute-api.eu-west-1.amazonaws.com/default/campaigns/',
    form: {
      id: req.body.inputID,
      startDate: parseInt(req.body.startDate),
      endDate: parseInt(req.body.endDate),
      targetImpressions: parseInt(req.body.targetImpressions)
    },
    function(error, response, body) {
      console.log(body);
    }
  });

})
