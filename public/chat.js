var socket=io.connect('http://localhost:5000/');

//query DOM

        var handle=document.getElementById('handle');
        var message=document.getElementById('message');
        var send=document.getElementById('send');
        var output=document.getElementById('output');
        var feedback=document.getElementById('feedback');

    //emit event
        send.addEventListener('click',()=>{
            socket.emit('chat',{
                message:message.value,
                handle:handle.value
            });
        })

        message.addEventListener('keypress',()=>{
            socket.emit('typing',handle.value)
        })

        //listen for event
        socket.on('chat',(data)=>{
            output.innerHTML+=`<p><strong>${data.handle}: </strong> ${data.message}</p>`;
            feedback.innerHTML=``;
        });

        socket.on('typing',(data)=>{
            feedback.innerHTML=`<p><em>${data} is typing the message..</em></p>`
        })