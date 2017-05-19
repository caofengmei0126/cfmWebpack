
const MESSAGE = 'MESSAGE';
let $ = require('jquery');
let api = 'http://localhost:3000/messages';
module.exports = {
    get(callback){
    $.get(api).done(messages=>callback(messages))
    },
    add(message, callback){
        $.post(api,message).done(messages=>callback(messages))
    },
    del(_id,callback){
       $.ajax({
           url:api,
           type:'delete',
           data:{_id}
       }).done(messages=>callback(messages))
    }
};