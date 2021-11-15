const Router = require('router');
const router = Router();

router.get('/formulario/farmacia', (req, res) => {
    res.render('farmacia.ejs')
});

router.get('/formulario/hotel', (req, res) => {
    res.render('hotelesForm.ejs');
});

router.get('/formulario/restaurante', (req, res) => {
    res.render('restaurante.ejs');
});

router.get('/formulario/estaciones-de-servicio', (req, res) => {
    res.render('estaciones_de_servicioForm.ejs');
});



module.exports = router;