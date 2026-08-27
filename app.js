const express = require("express")

const app = express()

app.get("/about" , (req, res) => {
    res.send("hello world")
})

app.get("/home" , function(req,res) {
    res.send("this is home page")
})

app.listen(3000)