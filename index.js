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

    fetch('https://api.instagram.com/oauth/authorize?client_id=715636090427857&redirect_uri=https://graph-instagram-api.vercel.app/auth&scope=user_profile&response_type=code&state=1', {
        method: 'GET',
        mode: 'no-cors'
    })
        .then(response => response.json())
        .then(data => {
            // Manipular a resposta do servidor, se necessário
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });

    res.send({
        message: "Authenticated!",
        code: code
    })

})