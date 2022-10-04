var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Welcome. This is Harsh Panchal</h1>")
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.json(req.body)
  })
  
  app.get('/admin', (req, res) => {
    res.send('Admin Homepage')
  })
  
  app.get("/user/:id", (req, res)=> {
        res.send(`URL PARAMETER: ${req.params.id}`);
      })

app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server started at http://${SERVER_HOST}:${SERVER_PORT}/`);
})