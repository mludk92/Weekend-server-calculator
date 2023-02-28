//Require Express 
const express = require('express')

const app = express()

// Heroku assigns us a unique PORT 
// use 5001 for local host devolopment 
const port = process.env.PORT || 5001

//show where files are stored
app.use(express.static('server/public'))

//tell where to listen for request
app.listen(port, () => { 
    console.log(`listening on port ${port}`)
})