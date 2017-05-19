let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/messages');
exports.Message = mongoose.model('Message',new mongoose.Schema({
    name:String,
    content:String,
    createAt:{
        type:Date,default:Date.now
    }
}));
