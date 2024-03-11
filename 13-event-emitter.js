const EventEmitter = require('events');

const customEmitter = new EventEmitter

customEmitter.on('response',(name,id)=>{
    console.log(`Response Recieved User: ${name} with id:${id}`);
})
customEmitter.on('response',()=>{
    console.log(`Something something` );
})
customEmitter.emit('response','john',34 );

// Output: Response Recieved
