var express = require('express');
var mailer = require('./modules/mailer');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.bodyParser());

app.get('/', function(request, response) {
    response.send(fs.readFileSync("index.html").toString());
});

app.post('/', function(request, response) {
    address = request.body.address;
    mailer.save(address, function(error) {
        if (error) {
            console.log('error');
            response.send(e, 400);
        } else {
            console.log('redirecting...');
            response.redirect('back');
        }
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
