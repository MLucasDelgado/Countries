const { Activity } = require('../../db');

const getActivities = async (req, res) => {
    try{
        const activity = await Activity.findAll()
        res.status(200).json(activity)
    }catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {
    getActivities
}