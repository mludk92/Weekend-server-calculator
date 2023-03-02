const express = require('express')
const router = express.Router()

var stringMath = require('string-math')
let equations = [ ]

router.get('/', (req, res)=>{
    res.send(equations)
  })


  router.post('/',(req, res)=>{
    let equationToAdd = req.body
    console.log(stringMath(equationToAdd.equation),'answer')
    console.log(equationToAdd.equation,'question')
    let question = equationToAdd.equation
    let evaluate = stringMath(equationToAdd.equation)
    //equations.push(equationToAdd)
    equations.push({equation:question,answer:evaluate})
    res.sendStatus(201)
    console.log(equations)
  })

router.delete('/', (req, res)=> {
    equations = []
    res.sendStatus(201)
})


module.exports = router