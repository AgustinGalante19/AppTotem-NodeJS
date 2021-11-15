const Router = require('router');
const router = Router();

const controllers = require('../services/requests');

router.post('/subir-estacion', controllers.addEstacion);

module.exports = router;