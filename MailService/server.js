const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const fs = require('fs')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/mail', (req, res) => {
    nodemailer.createTestAccount((err, account) => {

        const trasporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: '587',
            secure: false,
            auth: {
                user: 'portal@stoque.com.br',
                pass: 'P0rt@1$t0qu3'
            },
            tls: {
                ciphers: 'SSLv3'
            }
        })

        let mailoptions = {
            from: 'portal@stoque.com.br',
            to: 'fagner.gomes@stoque.com.br',
            replyTo: 'fagner.gomes@stoque.com.br',
            subject: req.body.subject,
            text: req.body.message,
            html: req.body.html
        }

        trasporter.sendMail(mailoptions, (err, info) => {
            if (err) {
                fs.appendFileSync("log.txt", logFormat(err))
                res.status(500);
                res.json({
                    Message: `Encontramos um erro ao tentar enviar sua mensagem, caso não compreende-la entre em contato com suporte. "${err}"`
                })
            }

            res.json({
                msg: 'success'
            })
        })
    })
})

app.get('/', function (req, res) {
    res.send('Serviço de e-mail compilado e rodando corretamente!');
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

function logFormat(err) {
    return `####### EROR - ${Date(Date.now())} ####### \nMessage: ${err}\n\n`
}