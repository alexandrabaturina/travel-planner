# Travel Planner
## Overview
**Travel Planner** is Java Script based one-page web app than puts together information about your trip.

The app is built as the capstone project of Udacity [Front End Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011).
The goal of the project is to practice with:
* Setting up [Webpack](https://webpack.js.org/)
* Webpack loaders and plugins
* Responsive layouts
* API requests
* Service workers
* [Jest](https://jestjs.io/) tests
## Features
Based on the city and country of destination and trip start date, **Travel Planner** provides the following information.
* Number of days before the trip.
* Typical weather for the start date if trip is less than 16 days away and today's weather otherwise.
* Min and max temperature
* The picture of destination city (the most popular picture of the specified destination in Pixabay library)

**Travel Planner** app uses the following APIs.
* [Geonames](http://www.geonames.org/export/web-services.html)
* [Weatherbit](https://www.weatherbit.io/api/weather-forecast-16-day)
* [Pixabay](https://pixabay.com/api/docs/)
