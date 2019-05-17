const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert(
    (serviceAccount = require('./config.json'))
  ),
  databaseURL: 'https://chore-monkey-app.firebaseio.com'
})

const express = require('express')

const server = express()

const axios = require('axios')

server.get('/', async (req, res) => {
  const result = await admin
    .auth()
    .createCustomToken('xpzKjIhxQycav7eVter7t8iaXCe2')
  console.log(result)
})

server.listen(8000, () => console.log('alive'))
