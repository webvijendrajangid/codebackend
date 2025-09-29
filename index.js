 // Check the bookmark backend folder for production devlopement url 
require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Vijendra welcome to twitter page sever')
})

app.get('/login', (req, res) => {
  res.send('<h1>You are login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

