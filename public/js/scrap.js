const cheerio = require('cheerio');
const request = require('request-promise');

async function init(){

    const url = 'https://scratch.mit.edu/users/AGUSTINLAMAQUINA/';
    const $ = await request({
        uri: url,
        transform: body => cheerio.load(body)
    })

    const nombre = $('.header-text').find('h2');
    return nombre.text()
}


//Funciona
// async function init(){
//     const url = 'https://scratch.mit.edu/users/AGUSTINLAMAQUINA/';
//     const $ = await request({
//         uri: url,
//         transform: body => cheerio.load(body)
//     })

//     const nombre = $('.header-text').find('h2');

//     return new Promise((res, rej) => {
//         res(nombre.text().trim())
//     })
// }

// exports.init = init().then((dato) => {return dato});