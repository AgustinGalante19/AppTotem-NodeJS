const Router = require('router');
const router = Router();


router.get('/formulario/hotel', (req, res) => {
    res.render('hotelesForm.ejs');
});

router.get('/formulario/restaurante', (req, res) => {
    res.render('restaurantesForm.ejs');
});

router.get('/formulario/estaciones-de-servicio', (req, res) => {
    res.render('estaciones_de_servicioForm.ejs');
});

router.get('/formulario/farmacias', (req, res) => {
    res.render('farmaciasForm.ejs');
});



module.exports = router;