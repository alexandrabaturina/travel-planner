// Protect API keys with env variables
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your Pixabay API key is ${process.env.PIXABAY_API_KEY}`);
console.log(`Your Weatherbit API key is ${process.env.WEATHERBIT_API_KEY}`);
console.log(`Your Geonames username is ${process.env.GEONAMES_USERNAME}`);

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
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

