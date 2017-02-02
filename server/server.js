var request = require("request");
var express = require('express');
var parseString = require('xml2js').parseString;
var replace = require('./replace.js');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  next();
});

app.get('/api/posts', function (req, res) {
  request({
    uri: req.query.link,
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {
    parseString(body, function (err, result) {
        var reqbody = result.rss.channel[0];
        var posts = [];
        reqbody.item.map( post => {
          posts.push({
            author: reqbody.title,
            author: reqbody.title,
            title: post.title,
            link: post.link,
            date: new Date(post.pubDate).getTime(),
            description: replace(post.description.toString()),
          })
        });
        res.send(posts).status(200);
    });
  });
})

app.listen(3000);
