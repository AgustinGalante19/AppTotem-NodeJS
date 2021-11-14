const express = require('express');
const app = express();

const mainRoutes = require('./routes/main.routes');
const formRoutes = require('./routes/forms.routes');
//Settings
app.set('port', process.env.port || 5000);
app.set('appName', 'App Totem');
app.set('view engine', 'ejs');
app.use(express.json())

//Routes
app.use(mainRoutes);
app.use(formRoutes);
const requestsXD = require('./services/requests')
app.get('/testing/:id', requestsXD.getFarmaciaByID);

app.use(express.static('public'));

const port = app.get('port');
app.listen(port, () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
    console.log(`http://localhost:${port}`);
});