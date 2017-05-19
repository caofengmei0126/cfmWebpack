const MESSAGE = 'MESSAGE';
module.exports = {
    get(callback){
        let messageStr = localStorage.getItem(MESSAGE);
        let messages = messageStr ?JSON.parse(messageStr) : [];
        callback(messages)
    },
    add(message, callback){
        this.get((messages)=> {
            message.id = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
            message.createAt = new Date();
            messages.push(message);
            localStorage.setItem(MESSAGE, JSON.stringify(messages));
            callback(messages)
        })
    },
    del(id,callback){
        this.get((messages)=>{
             messages = messages.filter((message)=>message.id != id);
            localStorage.setItem(MESSAGE, JSON.stringify(messages));
            callback(messages);
        })
    }
};
