const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.use(express.static('public'));

app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.send({ sum });
});

app.listen(port, () => {
    console.log(`Arithmetic service running on http://localhost:${port}`);
});