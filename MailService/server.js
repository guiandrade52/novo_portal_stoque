const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {

        let trasporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: '587',
            auth: {
                user: 'portal@stoque.com.br',
                pass: 'P0rt@1$t0qu3'
            }
        })

        let mailoptions = {
            from: 'portal@stoque.com.br',
            to: 'fagner.gomes@stoque.com.br',
            replyTo: 'fagner.gomes@stoque.com.br',
            subject: 'New Message',
            text: req.body.message,
            html: req.body.mail
        }

        trasporter.sendMail(mailoptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            res.json({
                msg: 'success'
            })
            console.log('Message sent: %s', info.messageId)
            console.log('message URL: %s', nodemailer.getTestMessageUrl(info))
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