// const path=require('path')

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// const os=require('os')
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.hostname())



// const url=require('url')
// const a="http://localhost:3000/default.html?year=2025&month=july";
// const parsed=url.parse(a,true);
// console.log(parsed.host);
// console.log(parsed.port)
// console.log(parsed.pathname);
// console.log(parsed.query);
// console.log(parsed.query.year);
// console.log(parsed.search);

// 62
// const a=require('./localmodules')
// const msg=a("Rishi")
// console.log(msg)


// const math=require('./localmodules2')
// math.
// console.log("addition",math.add(10,33));
// console.log("sub",math.sub(40,33));
// console.log("multiply",math.mul(10,33));
// console.log("div",math.div(770,33));

// const events=require('events');

// const ev=new events.EventEmitter();

// ev.on('greet',()=>{
//     console.log("event emitter is activate");
// });
// ev.emit('greet');



// ev.on('start',(user)=>{
//     console.log(`${user} started nodejs`)
// })
// ev.emit('start','rishi')
// ev.emit('start','nexila')
// ev.emit('start','monika')

// ev.once('click',()=>{
//     console.log("This was run only once");
// })

// ev.emit('click');
// const greet=()=>console.log('hi monika!');
// ev.on('sayhi',greet);
// ev.emit('sayhi');
// ev.emit('sayhi');
// ev.off('sayhi',greet);
// ev.emit('sayhi');
