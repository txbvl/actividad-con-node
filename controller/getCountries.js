const paises = require ("../paises");
const{ request, response} = require ("express");

const paisesData = paises.paises;

const getCountries = (req = request, res = response) => {
    return res.json({
        ok: true,
        paisesData,
        statusCode : 200
    });
}

const getCountry = (req = request, res = response) => {

}

module.exports = {
    getCountries,
    getCountry
}