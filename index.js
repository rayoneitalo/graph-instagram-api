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
    // fetch('https://api.instagram.com/oauth/authorize?client_id=644528484504310&redirect_uri=https://graph-instagram-api.vercel.app/auth&scope=user_profile,user_media&response_type=code', {
    //     method: 'GET',

    // })
    //     .then(response => console.log(response))
    //     .then(data => {
    //         // Manipular a resposta do servidor, se necessário
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('Erro:', error);
    //     });
})