const { Activity, Country } = require('../../db');

const getActivities = async (req, res) => {
    try{
        // Consulto sobre todas las actividades en la base de datos
        const activity = await Activity.findAll({include: Country})
        res.status(200).json(activity)
    }catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {
    getActivities
}