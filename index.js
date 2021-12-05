//Requirements
const express = require('express');
var cors = require('cors');
const app = express();

//Imports
const mainRoutes = require('./routes/main.routes');
const formRoutes = require('./routes/forms.routes');
const postRoutes = require('./routes/post.routes');

//Settings
app.set('port', process.env.port || 5000);
const port = app.get('port');
app.use(cors());
app.set('appName', 'App Totem');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//Routes
app.use(mainRoutes);
app.use(formRoutes);
app.use(postRoutes);

app.listen(port, () => {
    console.log(app.get('appName') + ' on port', app.get('port'));
    console.log(`http://localhost:${port}`);
});