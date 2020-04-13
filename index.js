const express = require('express')
const path = require('path')
const app = express() 


app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html') )
})

app.post('/', (req, res) => {
  console.log(req.body)

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

