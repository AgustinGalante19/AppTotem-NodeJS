const express = require('express');
const app = express();
const scrap = require('./scrap.js')
//
// async function init(){
//     const url = 'https://scratch.mit.edu/users/AGUSTINLAMAQUINA/';
//     const $ = await request({
//         uri: url,
//         transform: body => cheerio.load(body)
//     });

//     const nombre = $('.header-text').find('h2');

//     console.log(nombre.text().trim());
// }

//Settings
app.set('port', 5500);
app.set('appName', 'App Totem')
app.set('view engine', 'ejs')

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

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
});
setTimeout(async function() { console.log(scrap.init) }, 1500)
