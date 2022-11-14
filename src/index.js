import {
    getNumberOfCountries, 
    getAllCountriesWithOfficialLanguageBy, 
    getCountryWithTheHighestOficialLanguages, 
    getTheMostCommonOfficialLanguageOfAllCountries
} from './application.js';

const command = process.argv[2];

switch(command){
    case 'getNumberOfCountries':
        console.log(getNumberOfCountries());
    break;
    case 'getAllCountriesWithOfficialLanguageBy':
        const language = process.argv[3];
        console.log(getAllCountriesWithOfficialLanguageBy(language));
    break;
    case 'getCountryWithTheHighestOficialLanguages':
        console.log(getCountryWithTheHighestOficialLanguages());
    break;
    case 'getTheMostCommonOfficialLanguageOfAllCountries':
        console.log(getTheMostCommonOfficialLanguageOfAllCountries());
    break;            
}