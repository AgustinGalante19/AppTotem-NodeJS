const axios = require('axios');
const CircularJSON = require('circular-json')

async function getFarmacias(req, res) {

    axios.get('http://api-totem.ddns.net/api/hoteles').then((response) => {
        //let resp = CircularJSON.stringify(response.data);
        //return res.send(resp), console.log(resp);;
        return res.send(CircularJSON.stringify(response.data));
    }).catch((error) => {
        console.log(error);
    });
}

async function getFarmaciaByID(req, res) {
    const id = req.params.id;
    axios.get(`http://api-totem.ddns.net/api/hoteles/${id}`).then((response) => {
        console.log(id);
        return res.send(CircularJSON.stringify(response.data));
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = {
    getFarmacias,
    getFarmaciaByID
}