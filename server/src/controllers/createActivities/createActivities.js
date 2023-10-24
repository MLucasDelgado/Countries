const { Activity, Country } = require('../../db');

const createActivities = async (req, res) => {
    try {
        const { id, name, dificultad, duracion, temporada, countries } = req.body;

        // Crea la actividad en la base de datos
        const activity = await Activity.create({
            id,
            name,
            dificultad,
            duracion,
            temporada,
        });

        // Relaciona la actividad con los países seleccionados
        if (countries && countries.length > 0) {
            const selectedCountries = await Country.findAll({
                where: {
                    id: countries, 
                },
            });
            // establezco la relación entre la actividad y los países que seleccione
            await activity.setCountries(selectedCountries);
        }

        res.status(201).json(activity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Se produjo un error al crear la actividad.' });
    }
};

module.exports = {
    createActivities
}