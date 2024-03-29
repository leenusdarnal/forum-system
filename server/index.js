import express, { urlencoded, json } from 'express'
import cors from 'cors'

import Register from './routes/register.js'
import Login from './routes/login.js'
import createThread from './routes/thread.js'
import Like from './routes/like.js'
import { Replies, addReply } from './routes/replies.js'
const app = express()
const PORT = 4000

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World',
  })
})

const users = []
const threadList = []
// TODO: Add a GET route on the server that returns all the posts.
app.get('/api/all/threads', (req, res) => {
  res.json({
    threads: threadList,
  })
})
app.post('/api/register', (req, res) => {
  Register(req, res, users)
})
app.post('/api/login', (req, res) => {
  Login(req, res, users)
})
app.post('/api/create/thread', (req, res) => {
  createThread(req, res, threadList)
})

app.post('/api/thread/like', (req, res) => {
  Like(req, res, threadList, users)
})
app.post('/api/thread/replies', (req, res) => {
  Replies(req, res, threadList)
})

app.post('/api/create/reply', (req, res) =>
  addReply((req, res, users, threadList))
)

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
