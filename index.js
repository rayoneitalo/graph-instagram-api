const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

const PORT = 4200

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.render('index', { code: 'generated token' })
})

app.get('/auth', (req, res) => {
    const code = req.query.code;

    res.render('index', { code: code })

})