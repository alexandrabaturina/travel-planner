// Default image
import defaultImageSRC from '../img/pass.svg';

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


// Primary object to store data
const projectData = {};

const selectCountry = document.getElementById('destination-country');
for (let code in mapping) {
    selectCountry.options[selectCountry.options.length] = new Option(mapping[code], code);
}

// UI elements
const daysBeforeTrip = document.getElementById('days-before-trip');
const typicalWeather = document.getElementById('typical-weather');
const minTemperature = document.getElementById('min-temperature');
const maxTemperature = document.getElementById('max-temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');
const imageNotFound = document.getElementById('image-not-found');
const defaultImage = document.getElementById('default-image');
const emptyCitiInput = document.getElementById('empty-city-input');
const emptyDate = document.getElementById('empty-date');
const noResponseFromAPI = document.getElementById('no-response-from-api');
const tripInfoHeader = document.getElementById('trip-info-header');
const tripData = document.getElementById('trip-data')

defaultImage.src = defaultImageSRC;

// Disable past dates in date picker
let today = new Date();
let todayDay = ((today.getDate() < 10) ? "0" : "") + today.getDate();
let todayMonth = ((today.getMonth() < 10) ? "0" : "") + (today.getMonth() + 1);
let pickerStartDate = `${today.getFullYear()}-${todayMonth}-${todayDay}`
let datePicker = document.getElementById('trip-start-date');
datePicker.setAttribute('min', pickerStartDate);

// Current date in ms since Jan 1, 1970
let currentDate = Date.now();

const handleSubmit = async () => {
    event.preventDefault();

    emptyDate.innerText = '';
    emptyCitiInput.innerText = '';
    imageNotFound.innerText = '';
    noResponseFromAPI.innerText = '';
    tripInfoHeader.innerText = '';

    let destinationCity = document.getElementById('destination-city').value;

    if (!(Client.checkCityName(destinationCity))) {
        emptyCitiInput.innerText = 'The specified city name contais invalid characters';
        return
    }

    // Handle empty city input 
    if (destinationCity === '') {
        console.error("The city of destination is not specified.")
        emptyCitiInput.innerText = "The city of destination is required";
        return
    }

    let destinationCountryCode = document.getElementById('destination-country').value;
    let destinationCountry = mapping[destinationCountryCode];


    projectData.city = destinationCity;
    projectData.country = destinationCountry;

    console.log(`Destination: ${destinationCity}, ${destinationCountry}`);

    let tripStartDate = document.getElementById('trip-start-date').value;

    // Handle empty date picker
    if (tripStartDate === '') {
        console.error("The date should be specified.")
        emptyDate.innerText = "Date is required";
        return
    }

    let [year, month, day] = tripStartDate.split('-');
    let startDate = new Date(year, month - 1, day);
    let daysAway = Math.round((startDate.getTime() - currentDate) / (1000 * 3600 * 24));
    projectData.daysAway = daysAway;

    // Geonames API call
    const geonamesQuery = await fetch('http://localhost:8081/geonames', {
        method: 'POST',
        body: JSON.stringify({ city: destinationCity, code: destinationCountryCode }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    try {
        const query = await geonamesQuery.json();
        projectData.latitude = query.postalCodes[0].lat
        projectData.longitude = query.postalCodes[0].lng
        console.log(`Latitude: ${projectData.latitude}`);
        console.log(`Longitude: ${projectData.longitude}`);
    }

    catch (error) {
        console.error("Geonames API returns no response.")
        noResponseFromAPI.innerText = "Your request cannot be processed.\nPlease check city spelling and make sure you're choosing the right country.";
        return
    }

    // Weatherbit API call
    const weatherbitQuery = await fetch('http://localhost:8081/weatherbit', {
        method: 'POST',
        body: JSON.stringify({ lat: projectData.latitude, lon: projectData.longitude }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const weather = await weatherbitQuery.json();


    projectData.weatherIsAvailable = false;
    projectData.maxTemp = weather.data[0].max_temp;
    projectData.minTemp = weather.data[0].min_temp;
    projectData.weatherDescription = weather.data[0].weather.description;
    projectData.weatherIcon = weather.data[0].weather.icon;

    weather.data.forEach(item => {

        if (item.datetime === tripStartDate) {
            projectData.weatherIsAvailable = true;
            projectData.maxTemp = item.max_temp;
            projectData.minTemp = item.min_temp;
            projectData.weatherDescription = item.weather.description;
            projectData.weatherIcon = item.weather.icon;
            return

        }
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

    if (pixabayImage.total !== 0) {
        projectData.imageIsAvailable = true;
        projectData.imageURL = pixabayImage.hits[0].webformatURL;
    } else {
        projectData.imageIsAvailable = false;
    }

    console.log(projectData);
    updateUI(projectData);
}


const updateUI = (projectData) => {

    tripInfoHeader.innerText = "Your Trip Info";

    if (projectData.imageIsAvailable) {
        defaultImage.src = projectData.imageURL;
    } else {
        imageNotFound.innerText = `Sorry, there is no picture of ${projectData.city}, ${projectData.country} in Pixabay library.`
        defaultImage.src = defaultImageSRC;
    }
    tripData.classList.add('trip-data-style');
    daysBeforeTrip.innerText = `Your trip to ${projectData.city}, ${projectData.country} is ${projectData.daysAway} days away.`
    typicalWeather.innerText = (projectData.weatherIsAvailable ? 'Typical weather for then is:' :
        'The forecast for your date is not available. The weather for today is: ');
    minTemperature.innerText = `Min temperature: ${projectData.minTemp} C`;
    maxTemperature.innerText = `Max temperature: ${projectData.maxTemp} C`;
    weatherDescription.innerText = `${projectData.weatherDescription}`
    if (projectData.weatherIcon) {
        weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png`
        weatherIcon.width = "50";
    }
}

const submitRequest = document.getElementById('plan-trip');
const evLisSubmit = submitRequest.addEventListener('click', event => {
    handleSubmit(event);
})

export { handleSubmit }
export { evLisSubmit }
