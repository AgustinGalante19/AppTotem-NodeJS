const Router = require('router');
const router = Router();

const controllers = require('../services/requests');

router.post('/subir-estacion', controllers.addEstacion);

router.post('/subir-hotel', controllers.addHotel);

router.post('/subir-farmacia', controllers.addFarmacia);

router.post('/subir-restaurante', controllers.addRestaurante);

module.exports = router;