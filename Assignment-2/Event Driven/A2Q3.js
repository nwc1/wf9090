const fs = require('fs');
const events = require('events');
const eventEmitter = new events();
const txt = "Hello This is Txt";

fs.readFile('a.txt', function(err, data){
    if(err){
        eventEmitter.emit('read', 'Error:'+err)
    }else{
        eventEmitter.emit('read', 'File Read, Success:'+data)
    }
});

fs.writeFile('a.txt', txt, function(err){
    if(err){
        eventEmitter.emit('write', 'Error:'+err)
    }else{
        eventEmitter.emit('write', 'File Write, Success:')
    }
});

eventEmitter.on('read', (msg) => {
    console.log(msg);
});

eventEmitter.on('write', (msg) => {
    console.log(msg);
});