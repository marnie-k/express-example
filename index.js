const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.send('Hello')
})

app.all('*', (request, response) => {
  return response.status(404).send('Sorry Mario but the princess is in another castle')
})

app.listen(1337)
