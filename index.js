const express = require('express');

const app = express();

const PORT = 4200

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
})

app.get('/auth', (req, res) => {
    res.send('You are authenticated!')
})