const Router = require('router');
const router = Router();

router.get('/formulario/farmacia', (req, res) => {
    res.render('./forms/farmacia.ejs')
});

router.get('/formulario/hotel', (req, res) => {
    res.render('./forms/hote.ejs');
});

router.get('/formulario/restaurante', (req, res) => {
    res.render('./forms/restaurante.ejs');
});

router.get('/formulario/estacionesde-servicio', (req, res) => {
    res.render('./forms/estacion.ejs');
});

module.exports = router;