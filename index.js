import ReclamosForm from './src/Components/Sections/ReclamosForm';
import { Info } from 'material-ui-icons';
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))


app.post('/api/form', (req, res) =>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
        <h3>Detalles</h3>
        <ul>
            <li>Nombre: ${req.body.razonSocial}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.mensaje}</p>`

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'donny25@ethereal.email',
                pass: 'HGeehMxkAYG1wje4hd'
            }
        });

        let mailOptions = {
            from: 'test@testaccount', // sender address
            to: "alexis@binarianet.com, prietoalexis99@gmail.com", // list of receivers
            subject: "Prueba", // Subject line
            text: req.body.email, // plain text body
            html: htmlEmail // html body
          };

          transporter.sendMail(mailOptions, (err, info) =>{
            if(err){
                return console.log(err)
            }

            console.log(info.mensaje)
            console.log(nodemailer.getTestMessageUrl(info))

          })

    })
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server escuchando en puerto: ${PORT}`)
})