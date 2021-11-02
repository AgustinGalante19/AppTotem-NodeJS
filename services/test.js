const axios = require('axios');
const CircularJSON = require('circular-json')

const dataDetails = async (req, res) => {
    // const apiResponse = await axios.get('http://localhost:5500/tasks');
    // return res.status(200).CircularJSON.stringfy(apiResponse);


    axios.get('http://nodetestagustin.ddns.net/tasks').then((response) => {
        let json = CircularJSON.stringify(response.data);
        res.status(200)
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = {
    dataDetails
}