const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(require('./config.json')),
  databaseURL: 'https://chore-monkey-app.databaseio.com'
})

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: true }))

const checkJWT = async (req, res, next) => {
  const { token } = req.query
  console.log(token)
  next()
}

exports.authCheck = functions.https.onRequest(checkJWT, (req, res) => {
  res.send({ status: 'OK!' })
})
