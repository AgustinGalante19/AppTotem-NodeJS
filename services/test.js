const axios = require('axios');
const CircularJSON = require('circular-json')

const dataDetails = async (req, res) => {
    // const apiResponse = await axios.get('http://localhost:5500/tasks');
    // return res.status(200).CircularJSON.stringfy(apiResponse);


    axios.get('http://nodetestagustin.ddns.net/tasks').then((response) => {
        let resp = CircularJSON.stringify(response.data);
        return res.send(resp), console.log(resp);;
        
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = {
    dataDetails
}