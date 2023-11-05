const express = require('express');
const path = require('path');

const app = express();

const PORT = 4200

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/auth', (req, res) => {
    const code = req.query.code;

    res.send({
        message: "Authenticated!",
        code: code
    })

})