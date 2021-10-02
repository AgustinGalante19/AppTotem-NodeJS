import express from 'express';
const app = express();
//Settings
app.set('port', 5500);
app.set('appName', 'App Totem')
app.set('view engine', 'ejs')


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

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
});