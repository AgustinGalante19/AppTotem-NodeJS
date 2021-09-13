const express = require('express');
const app = express();

//Settings
app.set('port', 5500);
app.set('appName', 'App Totem')
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/tiempo', (req, res) => {
    res.render('tiempo.ejs')
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
});