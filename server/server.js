//Require Express 
const express = require('express')

const app = express()
app.use(express.json()); // not having this causes req.body to return undefined. 
// Heroku assigns us a unique PORT 
// use 5001 for local host devolopment 
const port = process.env.PORT || 5001

//show where files are stored
app.use(express.static('server/public'))

let equations = [ ]

app.get('/equations', (req, res)=>{
    res.send(equations)
  })


  app.post('/equations',(req, res)=>{
    let equationToAdd = req.body
    console.log(eval(equationToAdd.equation),'answer')
    console.log(equationToAdd.equation,'question')
    let question = equationToAdd.equation
    let evaluate = eval(equationToAdd.equation)
    //equations.push(equationToAdd)
    equations.push({equation:question,answer:evaluate})
    res.sendStatus(201)
    console.log(equations)
  })

app.delete('/equations', (req, res)=> {
    equations = []
    res.sendStatus(201)
})


//tell where to listen for request
app.listen(port, () => { 
    console.log(`listening on port ${port}`)
})
