// Make Socket Connection
var socket= io.connect('http://localhost:2340/')

var messsage=document.getElementById('message');
    output=document.getElementById('output');
    send= document.getElementById('send');
    handle=document.getElementById('handle');

    send.addEventListener('click',function(){
        socket.emit('chat', {
            messsage:messsage.value,
            handle:handle.value
        });
    });

    socket.on('chat',function(data){    
        output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.messsage+':</p>';
    });