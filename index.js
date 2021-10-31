const express = require('express');
const app = express();
//Settings
app.set('port', process.env.port || 5000);
app.set('appName', 'App Totem');
app.set('view engine', 'ejs');
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs')
}
);

app.get('/tiempo', (req, res) => {
    res.render('tiempo.ejs')
});

app.get('/mapa', (req, res) => {
    res.render('mapa.ejs');
});

app.get('/gualeactiva', (req, res) => {
    res.render('ingresar_gualeactiva.ejs')
});

app.get('/restaurantes', (req, res) => {
    res.render('restaurantes.ejs')
});

app.get('/formulario_rest', (req, res) => {
    res.render('formulario_restaurantes.ejs');
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
});