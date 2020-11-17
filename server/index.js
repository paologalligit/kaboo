const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongo = require('./db/mongo')
const tokenService = require('./service/token')

const app = express()

const PORT = process.env.PORT

app.use(morgan())
app.use(cors('*'))
app.use(bodyParser.json())


app.post('/api/auth/login', async (req, res, next) => {
    const { userName, password } = req.body
    const db = await mongo.getDb()
    const result = await db.user.findOne({ userName, password })
    if (result) {
        res.json({ user: 'ok', accessToken: tokenService.createAccessToken({ userName, password }) })
    } else {
        res.status(404).json({ error: 'user does not exist' })
    }
})

app.post('/api/auth/verifyToken', (req, res, next) => {
    const { token } = req.body
    const result = tokenService.verifyAccessToken(token)
    res.json(result)
})

app.post('/sign', (req, res, next) => {

})

var server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', () => { console.log('connected!') });
server.listen(process.env.PORT);