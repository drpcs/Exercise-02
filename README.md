# Install

npm install

## Exercise 2:

Image you have a set of data in JSON, describing official languages spoken by countries, as such:

[ 
{
country:"US",
languages: ["en"] },
{
country:"BE", languages: ["nl","fr","de"]
}, {
country:"NL",
languages: ["nl"] },
{
country:"DE", languages: ["de"]
}, {
country:"ES",
languages: ["es"] }
]

Write a function in javascript that:
- returns the number of countries in the world
- finds the country with the most official languages, where they officially speak German (de). - that counts all the official languages spoken in the listed countries.
- to find the country with the highest number of official languages.
- to find the most common official language(s), of all countries.

## Available Scripts

In the project directory, you can run:

### `npm test`

Runs the application's tests.

### `npm run transpile`

Runs the script to transpile the source code of directory src to dist-src.

### `node dist-src/index.js getNumberOfCountries`

Runs the script to find to returns the number of countries in the world

### `node dist-src/index.js getAllCountriesWithOfficialLanguageBy 'de'`

Finds the country with the most official languages, where they officially speak German (de). - that counts all the official languages spoken in the listed countries

### `node dist-src/index.js getCountryWithTheHighestOficialLanguages`

Runs the script to find the country with the highest number of official languages.

### `node dist-src/index.js getTheMostCommonOfficialLanguageOfAllCountries`

Runs the script to find the most common official language(s), of all countries.
 

