const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
var cors = require('cors')

const port = 3000
app.use(cors())


app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.get('/menu', (request, response) => {
    const data = (fs.readFileSync(path.join(__dirname, 'menu.json'), 'utf8'));
    // console.log(JSON.parse(data))
    response.send(data);
  })

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})