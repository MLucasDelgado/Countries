const { Country, Activity } = require ('../../db')

const getCountriesById = async (req, res) => {
    try{
        const { id } = req.params
        const country = await Country.findOne({
            where:{
                id: id
            }, include: Activity})
        res.status(200).json(country)
    } catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {
    getCountriesById
}