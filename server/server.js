//Require Express 
const express = require('express')

const app = express()
app.use(express.json()); // not having this causes req.body to return undefined. 
// Heroku assigns us a unique PORT 
// use 5001 for local host devolopment 
const port = process.env.PORT || 5001

//show where files are stored
app.use(express.static('server/public'))

let equations = [{equation:'test',
answer:'test'}, ]

app.get('/equations', (req, res)=>{
    res.send(equations)
  })


  app.post('/equations',(req, res)=>{
    let equationToAdd = req.body
    console.log(equationToAdd, 'to add here')
    equations.push(equationToAdd)
    res.sendStatus(201)
    console.log(equations)
  })











//tell where to listen for request
app.listen(port, () => { 
    console.log(`listening on port ${port}`)
})
