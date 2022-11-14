import countries from '../data/countries.json';

export const getNumberOfCountries = (startInput, endInput) => {
   return countries.length;
}

export const getCountryWithTheHighestOficialLanguages = () => {
    const max = Math.max(...countries.map(item => item.languages.length));
    let response = [];
    for (const item of countries) {
        if (item.languages.length === max) {
            response.push(item)
        }
    }
    return response;
}

export const getAllCountriesWithOfficialLanguageBy = (language) => {
    if(typeof language != 'string'){
        throw 'Invalid language parameter';
    }

    let response = []

    const filtered = countries.filter(
        country => country.languages.find(element => element == language.toLowerCase())
    )
    
    const max = Math.max(...filtered.map((country) => country.languages.length));
    for (const country of filtered) {
        if (country.languages.length == max) {
            response.push(country)
        }
    }
    return response
}

export const getTheMostCommonOfficialLanguageOfAllCountries = () => {
    let max = 0;
    const result = countries.reduce((accLanguages, currentCountry, index, currentArray) => {
        const languages = currentCountry.languages;
        if(index == 1){
            accLanguages = {}
        }
        for (let language of languages) {
            accLanguages[language] = accLanguages[language]?accLanguages[language]+1:1    
            if (accLanguages[language] > max) {
                max = accLanguages[language]
            }
        }
        return accLanguages
    });   
    const filteredLanguages = Object.entries(result).filter(([k, v]) => v === max)
    return Object.fromEntries(filteredLanguages)
}