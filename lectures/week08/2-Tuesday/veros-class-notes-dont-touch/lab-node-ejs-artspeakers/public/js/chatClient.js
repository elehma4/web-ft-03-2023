
//grab username , message out of dom 

let chatUsername = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
// let chatForm = document.querySelector('#chatForm')


//connect socket.io  

const socket = io()
console.log('cp1');
/// emitting a message 


socket.on('connection', ()=>{

    socket.on('chatMessage', (msg)=>{
        console.log(msg);
      })

    let chatForm = document.querySelector('form');
   

   if(chatForm){

    chatForm.addEventListener('submit', e=>{

        console.log('cp2');
        e.preventDefault(); 

    console.log(
        'hello'
    );
        //sending amessag out to our node server 

        socket.emit('postMessage', {
            username: chatUsername.value, 
            message: chatMessage.value
        })


        chatMessage.value = "" 

        chatMessage.focus();

        //receiving a broadcast 

        socket.on('updateMessages', data=>{

            console.log(data);  //{useraname:,message}

            showMessage(data)
        })

    })
   }
})
    

const showMessage = (data) => {
    
    let chatDisplay = document.querySelector('.chat-display')
    let newMessage = document.createElement('p')


    if(chatUsername.value == data.username){

        newMessage.className = "bg-success chat-text"
    }
    else{
        newMessage.className = 'bg-info text-warning chat-text'
    }

    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)
}


//listening to broadcasts from our server 


