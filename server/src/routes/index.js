const { Router } = require("express");
const { getCountries } = require('../controllers/getCountries/getCountries');
const { getCountriesById } = require('../controllers/getCountriesById/getCountriesById');
const { getCountriesByName } = require('../controllers/getCountriesByName/getCountriesByName');
const { createActivities } = require('../controllers/createActivities/createActivities')
const { getActivities } = require('../controllers/getActivities/getActivities')

const router = Router();
router.get('/countries', getCountries)
router.get('/countries/name', getCountriesByName)
router.get('/countries/:id', getCountriesById)
router.post('/activities', createActivities )
router.get('/activities', getActivities)


module.exports = router;
