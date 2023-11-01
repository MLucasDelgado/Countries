const { Activity, Country } = require('../../db')

const createActivities = async (req, res) => {

  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if(!name || !difficulty || !duration || !season || !countries){
      return res.status(404).send('Faltan datos')
    }
    // Crea la actividad en la base de datos
    const createdActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Asocia la actividad a los países indicados
    if (countries && countries.length > 0) {
      for (const countryId of countries) {
        const country = await Country.findByPk(countryId);
        if (country) {
          await createdActivity.addCountry(country);
        }
      }
    }

    res.status(201).json(createdActivity);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createActivities
}