// Make Socket Connection
var socket= io.connect('http://localhost:2340/')

var messsage=document.getElementById('message');
    output=document.getElementById('output');
    send= document.getElementById('send');
    handle=document.getElementById('handle');
    feedback=document.getElementById('feedback');


    send.addEventListener('click',function(){
        socket.emit('chat', {
            messsage:messsage.value,
            handle:handle.value
        });
    });

    messsage.addEventListener('keypress',function(){
        socket.emit('typing', handle.value);
    });

    socket.on('chat',function(data){
        feedback.innerHTML="";
        output.innerHTML+='<p><strong>'+data.handle+'</strong>'+ data.messsage+' </p>';
    });

    socket.on('typing',function(val){
        feedback.innerHTML='<p><em>'+ val +' is typing ... </em></p>';
    });