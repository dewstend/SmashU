var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

var Users = require('./routes/Users')
var Posts = require('./routes/Posts')
var Comments = require('./routes/Comments')

app.use('/users', Users)
app.use('/posts', Posts)
app.use('/comments', Comments)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})