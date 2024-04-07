const http = require('http');

function current(){
    const currentDate = new Date();
    return currentDate;
}

module.exports = {current};

http.createServer(function(req, res){
    res.end(`Current Time: ${current()}`);
}).listen(3000);