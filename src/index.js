const express = require('express');
const cors = require('cors');
const {add} = require("./arithmetica")
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.json({ sum });
});

app.listen(port, () => {
    console.log(`Arithmetic service running on http://localhost:${port}`);
});
