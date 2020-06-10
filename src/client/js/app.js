const mapping = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua And Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia And Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D\"Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island & Mcdonald Islands",
    "VA": "Holy See (Vatican City State)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic Of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle Of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KR": "Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People\"s Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libyan Arab Jamahiriya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States Of",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts And Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre And Miquelon",
    "VC": "Saint Vincent And Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome And Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia And Sandwich Isl.",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad And Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks And Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis And Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}

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

    // Geonames API call
    const geonamesQuery = await fetch('http://localhost:8081/geonames', {
        method: 'POST',
        body: JSON.stringify({ city: destinationCity, code: destinationCountryCode }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const query = await geonamesQuery.json();
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
    minTemperature.innerText = `Min temperature: ${projectData.minTemp} C`;
    maxTemperature.innerText = `Max temperature: ${projectData.maxTemp} C`;
    weatherDescription.innerText = `${projectData.weatherDescription}`
    if (projectData.weatherIcon) {
        weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png`
        weatherIcon.width = "50";
    }
    console.log(`https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png`)

}

const submitRequest = document.getElementById('plan-trip');
if (submitRequest) {
    submitRequest.addEventListener('click', event => {
        handleSubmit(event);
    })
}

