  
require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
//const utils = require('./utils')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.all('*', (req, _res, next) => {
  req._startTime = Date.now()
  console.log(`Started ${req.method} "${req.url}" for ${req.ip} at ${new Date().toUTCString()}`)
  next()
})

const artistcontroller = require('./controllers/artist')
const albumcontroller = require('./controllers/album')
const songcontroller = require('./controllers/song')
const newcontroller = require('./controllers/new')
const admincontroller = require('./controllers/admin')
const bannercontroller = require('./controllers/banner')
const editcontroller = require('./controllers/edit')
const indexcontroller = require('./controllers/index')
app.use('/api/artist', artistcontroller)
app.use('/api/album', albumcontroller)
app.use('/api/song', songcontroller)
app.use('/api/new', newcontroller)
app.use('/api/admin', admincontroller)
app.use('/api/banner', bannercontroller)
app.use('/api/edit', editcontroller)
app.use('/api/index', indexcontroller)

app.get('/', (_req, res) => {
  res.json({
    info: "Server status is green."
  })
})

app.use((req, res)=> {
  console.log(
    `Completed `
    + ` in ${Date.now() - req._startTime}ms.\n`
  )
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})