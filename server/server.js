var request = require("request");
var express = require('express');
var parseString = require('xml2js').parseString;
var date = require('./date.js');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  next();
});
console.log(date.getTimeDiff("Fri, 27 Jan 2017 19:50:25 +0000"));
app.get('/api/posts', function (req, res) {
  console.log("req.query", req.query.link)
  request({
    uri: req.query.link,
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {
    parseString(body, function (err, result) {
        var reqbody = result.rss.channel[0]
        var posts = [];
        reqbody.item.map( post => {
          posts.push({
            author: reqbody.title,
            title: post.title,
            link: post.link,
            date: date.getTimeDiff(post.pubDate),
            description: post.description,
          })
        });
        res.send(posts)
    });
  });
})

app.listen(3000);
