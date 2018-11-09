var express= require('express');
var socket=require('socket.io');

var app=express();

var server = app.listen(2340,function(){
   
    console.log('Magic at port 2340');
})

app.use(express.static('views'));

var io=socket(server);
io.on('connection',function(socket){
    console.log('socket connection is successfull with id: ', socket.id)
    socket.on('chat', function(data){
        io.sockets.emit('chat',data);

    });
});

