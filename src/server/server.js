const path = require('path');
const express = require('express');
const PORT = 8081;

const app = express()

// Configure express
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure cors
const cors = require('cors');
app.use(cors());

// Start up an instance of app
app.use(express.static('dist'))

// Listen for connections
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
})