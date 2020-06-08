// Protect API keys with env variables
const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your Pixabay API key is ${process.env.PIXABAY_API_KEY}`);
// console.log(`Your Weatherbit API key is ${process.env.WEATHERBIT_API_KEY}`);
// console.log(`Your Geonames username is ${process.env.GEONAMES_USERNAME}`);

const BASE_URL_WEATHERBIT = 'http://api.weatherbit.io/v2.0/forecast/daily'


const path = require('path');
const express = require('express');
const PORT = 8081;

const app = express()

const http = require('http');

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

app.post('/api', function (req, res) {
    const placename = req.body.city;
    const country = req.body.code;
    console.log(placename);
    const GEONAMES_API_ENDPOINT = `http://api.geonames.org/postalCodeSearchJSON?placename=${placename}&country=${country}&maxRows=1&username=${process.env.GEONAMES_USERNAME}`;
    console.log(GEONAMES_API_ENDPOINT)

    http.get(GEONAMES_API_ENDPOINT, (response) => {
        let data = '';
        // A chunk of data has been recieved.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
            res.send(JSON.parse(data))
            console.log(data)
        });
    })
})

app.post('/weatherbit', function (req, res) {
    const lat = req.body.lat;
    const lon = req.body.lon;
    const WEATHERBIT_API_ENDPOINT = `${BASE_URL_WEATHERBIT}?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`;
    console.log(WEATHERBIT_API_ENDPOINT);

    http.get(WEATHERBIT_API_ENDPOINT, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
            console.log(data)
        });

        response.on('end', () => {
            console.log(data)
            res.send(JSON.parse(data))

        })
    })
})



app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'))
})