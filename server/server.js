//Require Express 
const express = require('express')

const app = express()
const equatRouter = require('./routes/equat.router.js')
app.use(express.json()); // not having this causes req.body to return undefined. 
// Heroku assigns us a unique PORT 
// use 5001 for local host devolopment 
const port = process.env.PORT || 5001


app.use('/equations',equatRouter)

//show where files are stored
app.use(express.static('server/public'))




//tell where to listen for request
app.listen(port, () => { 
    console.log(`listening on port ${port}`)
})
