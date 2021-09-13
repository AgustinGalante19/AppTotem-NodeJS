const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request-promise');
//const scrap = require('./scrap.js')
//setTimeout(async function() { console.log(scrap.init) }, 1500)

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

app.get('/prueba', (req, res) => {
    res.render('test.ejs')
})

app.get('/farmaciasdeturnovich', (req, res) => {
    // async function init() {
    //     const url = 'https://scratch.mit.edu/users/AGUSTINLAMAQUINA/';
    //     const $ = await request({
    //         uri: url,
    //         transform: body => cheerio.load(body)
    //     });

    //     const nombre = $('.header-text').find('h2');
    //     const clean = nombre.text().trim();
    //     console.log(clean)
    //     res.json({"nombre": clean})
    // }
    // async function init() {
    //     const url = 'https://gualeguaychu.gov.ar/farmaciasdeturno';
    //     const $ = await request({
    //         uri: url,
    //         transform: body => cheerio.load(body)
    //     });
    //     //const div1 = $('.col-xs-12 .col-md-12').find('h2');
    //     let texto = []
    //     const div1 = $('.col-xs-12 .col-md-12').find('.col-xs-12 .col-md-4').each((i, el) => {
    //         //console.log(i, $(el).text());
    //         texto[i] = $(el).text()
    //     })
    //     res.json(texto)
    // }

    async function init(){
        const url = 'https://gualeguaychu.gov.ar/farmaciasdeturno';
        const $ = await request({
            uri: url,
            transform: body => cheerio.load(body)
        });
        //const div1 = $('.col-xs-12 .col-md-12').find('h2');
        let texto = []
        const div1 = $('.col-xs-12 .col-md-12').find('.col-xs-12 .col-md-4').each((i, el)=> {
            //console.log(i, $(el).text());
            texto[i] = $(el).text()
        })
        //var lol1 = texto[1].replace(/\n/g, " ");
        //res.json(lol1.split(' '));
        res.json(texto)
    }

    init()
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
});