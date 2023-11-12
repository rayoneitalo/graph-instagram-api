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


    fetch(`https://api.instagram.com/oauth/access_token?client_id=644528484504310&client_secret=f04612803c60e8d219ebc4664df0bd85&code=${code}&grant_type=authorization_code&redirect_uri=https://graph-instagram-api.vercel.app/auth`, {
        method: 'POST',
        mode: 'no-cors'
    })
        .then((response) => console.log(response))
        .then(() => {
            res.send({
                message: "Authenticated!",
                code: code
            })
        }).catch(error => {
            console.log('Erro: ', error);
        })
})