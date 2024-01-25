const { Activity } = require('../../db')

const updateActivities = async (req, res) => {
    try {
        const { name, difficulty, duration, season } = req.body
        const { id } = req.params
        const response = await Activity.findByPk(id)

        if (response) {
            response.name = name
            response.difficulty = difficulty
            response.duration = duration
            response.season = season

            await response.save() // Save the changes to the database

            res.status(200).json(response)
        } else {
            res.status(400).send('Algo salio mal')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    updateActivities
}