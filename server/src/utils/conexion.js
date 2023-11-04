const {Country} = require('../db')
const axios = require('axios')
const URL = 'http://localhost:5000/countries'

const getInformation = async () => {
    try{
        // const encontrarPaises = await Country.findAll()
        // if(encontrarPaises) return
        
        const response = await axios.get(URL)
    
        if(!response.data) return res.status(400).send('Faltan datos')
    
        const data = response.data;
    
        const countrys = data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.png,
                continents: country.continents[0],
                capital: country.capital?.[0] ? country.capital?.[0] : null,
                subregion: country.subregion ? country.subregion : null,
                area: country.area,
                population: country.population,
            }
        })
        // bulkCreate postear un array de objetos
        const createCountry = await Country.bulkCreate(countrys)
        return createCountry;
    } catch(error){
        console.log(error.message)
    }
}

module.exports = {
    getInformation
}
