const { Activity, Country } = require('../../db')

const createActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).send('Faltan datos');
    }

    let existingActivity = await Activity.findOne({ where: { name } });

    if (existingActivity) {
      // Si la actividad ya existe, aggrego los países relacionados a la actividad existente
      if (countries && countries.length > 0) {
        for (const countryId of countries) {
          const country = await Country.findByPk(countryId);
          if (country) {
            await existingActivity.addCountry(country);
          }
        }
      }

      return res.status(200).json(existingActivity);
    } else {
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

      return res.status(201).json(createdActivity);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createActivities
}