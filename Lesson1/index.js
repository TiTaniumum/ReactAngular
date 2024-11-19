const express = require('express');
const {readFile} = require('fs')
const app = express()

const users = [
    {
        name: "Arman",
        age: "25",
        sex: "female"
    },
    {
        name: "Zhanibek",
        age: "24",
        sex: "female"
    },
]

app.get('/users',(request,response) => {
    response.send(users);
})

app.get('/',(request,response) => {
    readFile('./index.html','utf8', (err, html)=>{
        if(err){
            response.status(500).send('error: \n <br>' + JSON.stringify(err));
        }

        response.send(html);
    })
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Running on localhost:" + PORT)
});