const express = require('express')
const app = express()
const port = 1337

app.use(express.static('client/public'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: './client/views'})
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
