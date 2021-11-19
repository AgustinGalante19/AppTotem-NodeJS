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
        hotel_imageUrl: req.body.imageUrl,
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
        .catch(function (error) {
            console.log(error);
        });

    res.redirect('/hoteles');

};

const addFarmacia = async (req, res) => {
    var objFarmacia = {
        farmacia_nombre: req.body.nombre,
        farmacia_direccion: req.body.direccion,
        farmacia_telefono: req.body.telefono,
        farmacia_imageUrl: req.body.imageUrl,
        lun_vie_ha1M: req.body.lun_vie_ha1M,
        lun_vie_hc1M: req.body.lun_vie_hc1M,
        lun_vie_ha1T: req.body.lun_vie_ha1T,
        lun_vie_hc1T: req.body.lun_vie_hc1T,
        sab_dom_ha2M: req.body.sab_dom_ha2M,
        sab_dom_hc2M: req.body.sab_dom_hc2M,
        sab_dom_ha2T: req.body.sab_dom_ha2T,
        sab_dom_hc2T: req.body.sab_dom_hc2T
    };

    axios({
        method: 'post',
        url: 'http://api-totem.ddns.net/api/farmacias/',
        data: objFarmacia
    })
        .then(function (response) {
            console.log(response.status);
            res.redirect('/farmacias');
        })
        .catch(function (error) {
            console.log(error);
        });
}

const addRestaurante = async (req, res) => {
    var objRestaurante = {
        rest_nombre: req.body.nombre,
        rest_direccion: req.body.direccion,
        rest_imageUrl: req.body.imageUrl,
        lun_vie_ha1M: req.body.lun_vie_ha1M,
        lun_vie_hc1M: req.body.lun_vie_hc1M,
        lun_vie_ha1T: req.body.lun_vie_ha1T,
        lun_vie_hc1T: req.body.lun_vie_hc1T,
        sab_dom_ha2M: req.body.sab_dom_ha2M,
        sab_dom_hc2M: req.body.sab_dom_hc2M,
        sab_dom_ha2T: req.body.sab_dom_ha2T,
        sab_dom_hc2T: req.body.sab_dom_hc2T
    };

    axios({
        method: 'post',
        url: 'http://api-totem.ddns.net/api/restaurantes/',
        data: objRestaurante
    })
        .then(function (response) {
            console.log(response.status);
            res.redirect('/restaurantes');
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {
    addEstacion,
    addHotel,
    addFarmacia,
    addRestaurante
}