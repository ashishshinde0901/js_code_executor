const express = require('express')
const buffer = require("buffer");

let app = express()

app.listen(4000,()=>{
    console.log("server started")
})

app.use('/code_executor',express.static(__dirname+ "/public"))

function decrypt(req,res,next) {


}
function decode(req,res,next) {
    let data = req.query.data
    data = new Buffer(data,'base64').toString('ascii')
    req.query.data = data
    next()
}

app.get('/output',decode,(req, res)=>{
    let x = eval(req.query.data)
    res.send("the output is" + x)
})

