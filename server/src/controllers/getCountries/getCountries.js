const { Country, Activity } = require('../../db')

const getCountries = async (req, res) => {
    try{  
        const country = await Country.findAll({include: Activity })
        res.status(200).json(country)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCountries
}