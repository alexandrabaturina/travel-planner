// Protect API keys with env variables
const dotenv = require('dotenv');
dotenv.config();

// API keys
const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME,
    WEATHERBIT_KEY = process.env.WEATHERBIT_API_KEY,
    PIXABAY_KEY = process.env.PIXABAY_API_KEY;

// Base URLs
const BASE_URL_GEONAMES = 'http://api.geonames.org/postalCodeSearchJSON',
    BASE_URL_WEATHERBIT = 'http://api.weatherbit.io/v2.0/forecast/daily',
    BASE_URL_PIXABAY = `https://pixabay.com/api/?key=${PIXABAY_KEY}`;


const path = require('path');
const express = require('express');
const app = express();
const PORT = 8081;

// Consts for HTTP/HTTPS requests
const http = require('http');
const https = require('https');

// Configure express
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure cors
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// Listen for connections
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const receiveData = () => {
    let data = '';
    // Data chunk received
    response.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response received
    response.on('end', () => {
        res.send(JSON.parse(data))
    });
}

// Geonames API call
app.post('/geonames', function (req, res) {
    const placename = req.body.city;
    const country = req.body.code;
    console.log(placename);
    const geonamesQuery = `?placename=${placename}&country=${country}&maxRows=1&username=${GEONAMES_USERNAME}`;
    const geonamesAPI = `${BASE_URL_GEONAMES}${geonamesQuery}`;
    console.log(geonamesAPI)

    http.get(geonamesAPI, (response) => {
        receiveData(response);
    })
})

// Weatherbit API call
app.post('/weatherbit', function (req, res) {
    const lat = req.body.lat;
    const lon = req.body.lon;
    const weatherbitQuery = `?lat=${lat}&lon=${lon}&key=${WEATHERBIT_KEY}`;
    const weatherbitAPI = `${BASE_URL_WEATHERBIT}${weatherbitQuery}`;
    console.log(weatherbitAPI);

    http.get(weatherbitAPI, (response) => {
        receiveData(response);
    })
})

// Pixabay API call
app.post('/pixabay', function (req, res) {
    const city = req.body.city;
    const country = req.body.country;
    const pixabayQuery = `&q=${city}+${country}&image_type=photo&per_page=3&orientation=horizontal`;
    const pixabayAPI = `${BASE_URL_PIXABAY}${pixabayQuery}`;
    console.log(pixabayAPI);

    https.get(pixabayAPI, (response) => {
        receiveData(response);
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'))
})