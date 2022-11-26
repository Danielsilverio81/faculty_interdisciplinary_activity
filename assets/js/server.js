const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.post('/bemvindo', (req, res) => {
    res.send(`<h1>Bem vindo</h1><br>${req.body.user}`)
})

app.listen(5500)