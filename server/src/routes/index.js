const { Router } = require("express");
const { getCountries } = require('../controllers/getCountries')

const router = Router();
router.get('/countries', getCountries)


module.exports = router;
