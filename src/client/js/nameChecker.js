
function checkCityName(inputText) {

    const cityNameRegExp = /^[a-zA-Z]+[\s\-]?[a-zA-Z]+[\s\-]?[a-zA-Z]+$/i;
    return cityNameRegExp.test(inputText);
}

export { checkCityName }