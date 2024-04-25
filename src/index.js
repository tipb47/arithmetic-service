require('dotenv').config()
const express = require('express');
const cors = require('cors'); 
const { add } = require("./arithmetica");
const app = express();
app.use(cors()); 

if (!process.env.PORT) {
  throw new Error(`Please specify the 
  port number for the HTTP server with the environment variable PORT.`);
}

const port = process.env.PORT; 
app.get('/', (req, res) => {
  res.send('Arithmetic service - last updated 3/4/2022');
}); 
app.get('/add/:n/:m', (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);
    res.json(sum);
  }); 
 
app.listen(port);


app.get('/sub/:n/:m', (req, res) =>{
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let diff = subtract(n, m);
    res.json(diff);
})

app.get('/mul/:n/:m', (req, res) =>{
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let prod = multiply(n, m);
    res.json(prod);
})

app.get('/div/:n/:m', (req, res) =>{
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let quo = divide(n, m);
    res.json(quo);
})

app.get('/prime/:n', (req, res) => {
    
    res.json();
})

app.listen(port);
