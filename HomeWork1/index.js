const express = require('express');
const {readFile} = require('fs');
const app = express()

app.get('/api/info',(request, response)=>{
    if(request.query.status){
        response.send({ "name": "Temirlan", "task": "Динамические маршруты Express", "status": request.query.status})
        return;
    }
    response.send({ "name": "Temirlan", "task": "Динамические маршруты Express", "status": "В процессе" })
})

app.get('/student',(request,response) => {
    readFile('./student.html','utf8',(err,html)=>{
        if(err){
            response.status(500).send('error: <br>' + JSON.stringify(err));
            return;
        }
        response.send(html);
    })
})

app.get('/',(request,response) => {
    readFile('./index.html','utf8', (err, html)=>{
        if(err){
            response.status(500).send('error: <br>' + JSON.stringify(err));
            return;
        }
        response.send(html);
    })
})

app.get(/^\/.*/,(request, response)=>{
    readFile('./404.html','utf8', (err, html)=>{
        if(err){
            response.status(500).send('error: <br>' + JSON.stringify(err));
            return;
        }
        response.send(html);
    })
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Running on localhost:${PORT}`)
});