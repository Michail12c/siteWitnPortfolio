const express = require('express')
const path = require('path')
const app = express() 
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sendgrid({
  auth: {api_key: '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'}
}))

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html') )
})

app.post('/', async (req, res) => {
  await transporter.sendMail({
    to: 'mykhailotsoma@gmail.com',
    from: req.body.email ,
    subject: 'Лист було надіслано',
    html: `
      <h1>Лист з сайту</h1>
      <p>${req.body.textarea2}</p>
    `
  })
  res.redirect('/')

})
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'portfolio.html'))
})

app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})

