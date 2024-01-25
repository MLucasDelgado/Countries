const { Router } = require("express");
const { getCountries } = require('../controllers/getCountries/getCountries');
const { getCountriesById } = require('../controllers/getCountriesById/getCountriesById');
const { getCountriesByName } = require('../controllers/getCountriesByName/getCountriesByName');
const { createActivities } = require('../controllers/createActivities/createActivities')
const { getActivities } = require('../controllers/getActivities/getActivities')
const { deleteActivities } = require('../controllers/deleteActivities/deleteActivities')
const { updateActivities } = require('../controllers/updateActivities/updateActivities')

const router = Router();
router.get('/countries', getCountries)
router.get('/countries/name', getCountriesByName)
router.get('/countries/:id', getCountriesById)
router.post('/activities', createActivities )
router.get('/activities', getActivities)
router.delete('/activities/:id', deleteActivities)
router.put('/activities/update/:id', updateActivities)


module.exports = router;
