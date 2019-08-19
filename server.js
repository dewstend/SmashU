const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

// Connection
mongoose
  .connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/users', require('./routes/Users'));
app.use('/posts', require('./routes/Posts'));
app.use('/comments', require('./routes/Comments'));
app.use('/API', require('./routes/API'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})