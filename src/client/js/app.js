const mapping = {
    "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna",
    "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica",
    "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus",
    "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania",
    "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea",
    "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon",
    "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia",
    "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico",
    "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia",
    "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia",
    "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia",
    "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin",
    "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia",
    "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania",
    "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory",
    "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands",
    "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal",
    "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon",
    "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo",
    "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria",
    "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis",
    "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal",
    "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan",
    "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria",
    "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu",
    "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg",
    "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya",
    "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan",
    "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa",
    "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia",
    "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"
};
// Default image
const pixabayImage = document.getElementById('pixabay-image');
// Primary object to store data
const projectData = {};

const selectCountry = document.getElementById('destination-country');
for (code in mapping) {
    selectCountry.options[selectCountry.options.length] = new Option(mapping[code], code);
}
// Current date
// let date = new Date();
// let dateString = new Date().toString();
// let parsedDate = Date.parse(dateString);
// console.log(`Today's date in string format: ${dateString}`);
// console.log(`Today's date in ms since Jan 1970: ${parsedDate}`);
// day = ((date.getDate() < 10) ? "0" : "") + date.getDate();
// month = ((date.getMonth() < 10) ? "0" : "") + date.getMonth();
// let currentDate = `${date.getFullYear()}-${month}-${day}.`;
// projectData.currentDate = currentDate;
// console.log(`Today's date: ${currentDate}`);

// UI elements
const daysBeforeTrip = document.getElementById('days-before-trip');
const typicalWeather = document.getElementById('typical-weather');
const minTemperature = document.getElementById('min-temperature');
const maxTemperature = document.getElementById('max-temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');

// Current date in ms since Jan 1, 1970
let currentDate = Date.now();
console.log(`Today's date in ms (since Jan 1, 1970): ${currentDate}`);



handleSubmit = async () => {
    event.preventDefault()

    // let tripStartDate = document.getElementById('trip-start-date').value;
    // projectData.startDate = tripStartDate;
    // let parsedStartDate = Date.parse(tripStartDate);
    // console.log(`Trip start date: ${tripStartDate}, in ms: ${parsedStartDate}`);
    // daysAway = Math.round((parsedStartDate - parsedDate) / (60 * 60 * 24 * 1000));
    // console.log(`Trip is ${daysAway} days away`);

    let tripStartDate = document.getElementById('trip-start-date').value;
    console.log(`Trip start date: ${tripStartDate}`);
    let [year, month, day] = tripStartDate.split('-');
    startDate = new Date(year, month - 1, day);
    console.log(startDate);
    let daysAway = Math.round((startDate.getTime() - currentDate) / (1000 * 3600 * 24));
    console.log(`Trip is ${daysAway} days away.`);
    projectData.daysAway = daysAway;



    let destinationCountryCode = document.getElementById('destination-country').value;
    let destinationCountry = mapping[destinationCountryCode];
    let destinationCity = document.getElementById('destination-city').value;
    projectData.city = destinationCity;
    projectData.country = destinationCountry;

    console.log(`Destination: ${destinationCity}, ${destinationCountry}`);

    const apiQuery = await fetch('http://localhost:8081/api', {
        method: 'POST',
        body: JSON.stringify({ city: destinationCity, code: destinationCountryCode }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const query = await apiQuery.json();
    projectData.latitude = query.postalCodes[0].lat
    projectData.longitude = query.postalCodes[0].lng
    console.log(`Latitude: ${projectData.latitude}`);
    console.log(`Longitude: ${projectData.longitude}`);

    // Weatherbit API call
    const weatherbitQuery = await fetch('http://localhost:8081/weatherbit', {
        method: 'POST',
        body: JSON.stringify({ lat: projectData.latitude, lon: projectData.longitude }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const weather = await weatherbitQuery.json();
    weather.data.forEach(item => {
        console.log(item);
        projectData.maxTemp = item.max_temp;
        projectData.minTemp = item.min_temp;
        projectData.weatherDescription = item.weather.description;
        projectData.weatherIcon = item.weather.icon;

        // console.log(projectData.maxTemp, projectData.minTemp);
        // console.log(item.weather.icon);

        // parsedDate = Date.parse(item.datetime)
        // console.log(`date ${item.datetime}, temperature: ${item.app_max_temp}`)
        // console.log(parsedDate)
        // console.log(`date string: ${item.datetime.toString()}`)
    })

    // Pixabay API call
    const pixabayQuery = await fetch('http://localhost:8081/pixabay', {
        method: 'POST',
        body: JSON.stringify({ city: destinationCity, country: destinationCountry }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const pixabayImage = await pixabayQuery.json();
    console.log(`Image URL: ${pixabayImage.hits[0].webformatURL}`);
    projectData.imageURL = pixabayImage.hits[0].webformatURL;

    console.log(projectData);
    updateUI(projectData);
}

updateUI = (projectData) => {
    pixabayImage.src = projectData.imageURL;
    daysBeforeTrip.innerText = `Your trip to ${projectData.city}, ${projectData.country} is ${projectData.daysAway} days away.`
    typicalWeather.innerText = 'Typical weather for then is:';
    minTemperature.innerText = `Min temperature: ${projectData.minTemp}`;
    maxTemperature.innerText = `Max temperature: ${projectData.maxTemp}`;
    weatherDescription.innerText = `${projectData.weatherDescription}.`
    weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png`
    console.log(`https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png`)

}

const submitRequest = document.getElementById('plan-trip');
if (submitRequest) {
    submitRequest.addEventListener('click', event => {
        handleSubmit(event);
    })
}

