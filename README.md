# FEND Capstone Project: Travel Planner
## Overview
**Travel Planner** is the capstone project of Udacity [Front End Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program. It requeres to build JavaScript-based SPA than puts together information about your trip.

The goal of the project is to practice with:
* Setting up [Webpack](https://webpack.js.org/)
* Webpack loaders and plugins
* Responsive layouts
* Using APIs and creating requests to external URLs
* Dynamic [DOM](https://www.w3schools.com/js/js_htmldom.asp) manipulation
* Service workers
* [Jest](https://jestjs.io/) tests
## Features
To plan a trip, a user has to specify destination city, destination country, and start date for their trip.

![image](https://user-images.githubusercontent.com/53233637/103789063-6d578980-4ff4-11eb-9e3f-06d546e69a27.png)

Based on user input, **Travel Planner** provides the following information:
* Number of days before the trip.
* Typical weather for the start date if trip is less than 16 days away and today's weather otherwise.
* Min and max temperature.
* The picture of destination city (the most popular picture of the specified destination in [Pixabay](https://pixabay.com/images/search/library/) library).

![image](https://user-images.githubusercontent.com/53233637/103789869-582f2a80-4ff5-11eb-8df0-be8059b3d81b.png)

## APIs Used
**Travel Planner** app uses the following APIs:
* [Geonames](http://www.geonames.org/export/web-services.html)
* [Weatherbit](https://www.weatherbit.io/api/weather-forecast-16-day)
* [Pixabay](https://pixabay.com/api/docs/)
## Getting Started
### Prerequisites
1. Download Node.js from [here](https://nodejs.org/en/).
2. Clone this repo.
3. ```cd``` into project directory.
4. Install project dependencies.
```
npm install
```
5. Get [Geonames](http://www.geonames.org/export/web-services.html) username.
6. Get [Weatherbit](https://www.weatherbit.iohttps://pixabay.com/api/docs//account/create) API key.
7. Get [Pixabay](https://pixabay.com/api/docs/) API key.
8. In the root of the project, create the ```.env``` file.
9. In your ```env``` file, specify the credentials you got at steps 5–7.
```
PIXABAY_API_KEY = <your-pixabay-api-key>
WEATHERBIT_API_KEY = <your-weatherbit-api-key>
GEONAMES_USERNAME = <your-geonames-username>
```
### Running
#### Test mode
To run the app in test mode, use the following command.
```
nmp run test
```
#### Development mode
To run the app in development mode, use the following command.
```
npm run build-dev
```
#### Production mode
To run the app in production mode, follow the steps below.
1. Build the ```dist``` folder.
```
npm run build-prod
```
2. Start the server.
```
npm run start
```
3. Open ```localhost:8081``` in your browser.
### Authors
Alexandra Baturina

