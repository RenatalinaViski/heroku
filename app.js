const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
    
let appendBody=(node)=>document.body.appendChild(document.createElement(node))
let appendToParent=(parent,node)=>parent.appendChild(document.createElement(node))

let div=appendBody('div')
let input=appendToParent(div,'input')
let button=appendToParent(div,'button')

button.onclick=()=>{
    let valueInput=input.value
    console.log(valueInput)
    fetch('/users',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:valueInput})
    })
    fetch('/users')
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(data=>{
        console.log(data)
    })
}