import {
    getNumberOfCountries, 
    getAllCountriesWithOfficialLanguageBy, 
    getCountryWithTheHighestOficialLanguages, 
    getTheMostCommonOfficialLanguageOfAllCountries
} from './application.js';

describe('Exercise 02', () => {

    test('Returns the number of countries in the world', () => {
        const total = getNumberOfCountries();
        expect(total).toEqual(5);
    });   

    test(`Finds the country with the most official languages, 
          where they officially speak German (de)`, () => {
        const result = getAllCountriesWithOfficialLanguageBy('de');
        const expected = [{ country: 'BE', languages: ['nl', 'fr', 'de'] }];
        expect(result).toStrictEqual(expected);
    })

    test(`Finds the country with the most official languages,
          where they officially speak German (de) - invalid parameter`, () => {
        try {
            getAllCountriesWithOfficialLanguageBy(1);
        } catch(error){
            expect(error).toEqual(`Invalid language parameter`);
        }
    })

    test('Find the country with the highest number of official languages', () => {
        const country = getCountryWithTheHighestOficialLanguages();
        expect(country).toEqual([{"country": "BE", "languages": ["nl", "fr", "de"]}]);
    });  

    test('Find the most common official language(s), of all countries', () => {
        const language = getTheMostCommonOfficialLanguageOfAllCountries();
        expect(language).toEqual({"de": 2, "nl": 2});
    }); 
});