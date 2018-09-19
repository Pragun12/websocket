const express=require('express');
const socket=require('socket.io');

const app=express();




const server=app.listen(5000,()=>{
    console.log('Now running on port 5000...');
})


app.use(express.static('public'));
//socket setup

const io=socket(server);

io.on('connection',(socket)=>{
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);

    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
   // console.log('made socket connection at '+socket.id);
});


