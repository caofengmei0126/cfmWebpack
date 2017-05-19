let express = require('express');
let Message = require('./model').Message;
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
    next();
});
app.get('/messages', function (req, res) {
    Message.find({}, function (err, messages) {
        res.send(messages);
    })
});
app.post('/messages', function (req, res) {
    let message = req.body;
    Message.create(message, function (err, messages) {
        Message.find({}, function (err, messages) {
            res.send(messages);
        })
    })
});
app.delete('/messages', function (req, res) {
    let query = req.body;
    Message.remove(query,function (err,messages) {
        Message.find({}, function (err, messages) {
            res.send(messages);
        })
    })
});
app.listen(3000);
