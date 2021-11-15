const axios = require('axios');
//const CircularJSON = require('circular-json');

const addEstacion = async (req, res) => {
    var objEstacion = {
        estacion_nombre: req.body.nombre,
        estacion_direccion: req.body.direccion,
        estacion_telefono: req.body.telefono,
        estacion_imageUrl: req.body.imageUrl
    }
    axios({
        method: 'post',
        url: 'http://api-totem.ddns.net/api/estaciones_de_servicio',
        data: objEstacion
    })
        .then(function (response) {
            console.log(response.status);
        })
        .catch(function (error) {
            console.log(error);
        });

    res.redirect('/estaciones-de-servicio');
}

const addHotel = async (req, res) => {

    var objHotel = {
        hotel_nombre: req.body.nombre,
        hotel_direccion: req.body.direccion,
        hotel_telefono: req.body.telefono,
        hotel_urlImage: req.body.imageUrl,
        hotel_description: req.body.descripcion
    };

    axios({
        method: 'post',
        url: 'http://api-totem.ddns.net/api/hoteles',
        data: objHotel
    })
    .then(function (response) {
        console.log(response.status);
    })
    .catch(function (error){
        console.log(error);
    });

    res.redirect('/hoteles')

};

module.exports = {
    addEstacion,
    addHotel
}