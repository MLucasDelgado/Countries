const { Country } = require('../../db')

const { Op } = require('sequelize');

const getCountriesByName = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).send('Debes proporcionar un nombre de país en la consulta.');
        }

        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`
                }
            }
        });
        console.log(countries);

        if (countries.length === 0) {
            return res.status(404).json({ message: 'No se encontraron países.' });
        }

        res.status(200).json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCountriesByName
}