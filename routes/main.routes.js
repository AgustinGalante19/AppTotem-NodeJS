const  Router  = require('router');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs')
});

router.get('/tiempo', (req, res) => {
    res.render('tiempo.ejs')
});

router.get('/mapa', (req, res) => {
    res.render('mapa.ejs');
});

router.get('/gualeactiva', (req, res) => {
    res.render('ingresar_gualeactiva.ejs')
});

router.get('/restaurantes', (req, res) => {
    res.render('restaurantes.ejs')
});

router.get('/estaciones-de-servicio', (req, res) => {
    res.render('estaciones_de_servicio.ejs')
});

router.get('/hoteles', (req, res) => {
    res.render('hoteles.ejs');
});

router.get('/farmacias', (req, res) => {
    res.render('farmacias.ejs');
});

module.exports =  router;