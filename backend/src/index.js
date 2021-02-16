const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors');

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://premor:alice@cluster0.nqgek.mongodb.net/omnistack05?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//middleware
app.use((req, res, next)=>{
  req.io = io

  return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333, ()=>{
  console.log("Server stardet on port 3333");
})