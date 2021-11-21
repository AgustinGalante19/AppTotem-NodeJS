async function renderizarRestaurantes() {
    const contenedor = document.getElementById('contenedor');

    const res = await fetch(`http://api-totem.ddns.net/api/restaurantes`)
        .then((response) => response.json())
        .then((info) => {
            return info;
        });

    for (let i = 0; i < res.length; i++) {
        contenedor.innerHTML += `
        <div class="card mb-3" style="max-width: 120vh; border: 1px solid black; margin: 5px; padding: 10px; margin: 10px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${res[i].rest_imageUrl}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${res[i].rest_nombre}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>                  
                        
                        <p class="card-text" style="display: inline-block">${res[i].rest_direccion}</p>
                        <p class="card-text" style="display: block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            Lunes a Viernes ${res[i].lun_vie_ha1M} - ${res[i].lun_vie_hc1M} - ${res[i].lun_vie_ha1T} - ${res[i].lun_vie_hc1T}
                        </p>
                        <p class="card-text" style="display: block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            Sábado y Domingo ${res[i].sab_dom_ha2M} - ${res[i].sab_dom_hc2M} - ${res[i].lun_vie_ha1T} - ${res[i].sab_dom_hc2T}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

async function renderizarFarmacias() {
    const contenedor = document.getElementById('contenedor');

    const res = await fetch(`http://api-totem.ddns.net/api/farmacias`)
        .then((response) => response.json())
        .then((info) => {
            return info;
        });

    for (let i = 0; i < res.length; i++) {
        contenedor.innerHTML += `
        <div class="card mb-3" style="max-width: 120vh; border: 1px solid black; margin: 5px; padding: 10px; margin: 10px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${res[i].farmacia_imageUrl}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${res[i].farmacia_nombre}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>                  
                        
                        <p class="card-text" style="display: inline-block">${res[i].farmacia_direccion}</p>
                        <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                            ${res[i].farmacia_telefono}
                        </p>
                        <p class="card-text" style="display: block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            Lunes a Viernes ${res[i].lun_vie_ha1M} - ${res[i].lun_vie_hc1M} - ${res[i].lun_vie_ha1T} - ${res[i].lun_vie_hc1T}
                        </p>
                        <p class="card-text" style="display: block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            Sábado y Domingo ${res[i].sab_dom_ha2M} - ${res[i].sab_dom_hc2M} - ${res[i].lun_vie_ha1T} - ${res[i].sab_dom_hc2T}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


async function renderizarEstaciones() {
    const contenedor = document.getElementById('contenedor');

    const res = await fetch(`http://api-totem.ddns.net/api/estaciones_de_servicio`)
        .then((response) => response.json())
        .then((info) => {
            return info;
        });
    for (let i = 0; i < res.length; i++) {
        contenedor.innerHTML += `
        <div class="card mb-3" style="max-width: 120vh; border: 1px solid black; margin: 5px; padding: 10px; margin: 10px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${res[i].estacion_imageUrl}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${res[i].estacion_nombre}</h4>
                        <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                            ${res[i].estacion_direccion}
                        </p>
                        <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                            ${res[i].estacion_telefono}
                        </p>
                        <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        Abierto las 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

async function renderizarHoteles() {
    const contenedor = document.getElementById('contenedor');
    const res = await fetch('http://api-totem.ddns.net/api/hoteles')
        .then((response) => response.json())
        .then((info) => {
            return info
        });

    for (let i = 0; i < res.length; i++) {
        contenedor.innerHTML += `
            <div class="card mb-3" style="max-width: 120vh; border: 1px solid black; margin: 5px; padding: 10px; margin: 10px">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${res[i].hotel_imageUrl}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${res[i].hotel_nombre}</h4>
                            <p class="card-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                                ${res[i].hotel_direccion}
                            </p>
                            <p class="card-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                                ${res[i].hotel_telefono}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

//Relacionado al clima
async function temperatura() {

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=-33.001146355012644&lon=-58.523484474104954&appid=5ead772f5e978aba66947f30c55359f8');
    const data = await response.json();
    let elemento = document.getElementById('temp-actual-index');
    let conversion = data.main.temp - 273.15;
    let resultado = conversion.toFixed(0);
    elemento.innerHTML = "La temperatura acutal es: " + resultado + "º";
    //20 minutos.
    setTimeout("temperatura()", 1200000);
}

async function temperatura_actual() {

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=-33.001146355012644&lon=-58.523484474104954&appid=5ead772f5e978aba66947f30c55359f8');
    const data = await response.json();

    const temp_ac_elemento = document.getElementById('temp-actual-h1');
    const humedad_ac_elemento = document.getElementById('humedad-h1');
    const cieloEstado_elemento = document.getElementById('cielo-estado');

    let humedad_actual = data.main.humidity;
    let cielo_estado = data.weather[0].description;
    let conversion = data.main.temp - 273.15;
    let temp_actual = conversion.toFixed(0);

    const humedad_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
    </svg>`;

    const tiempo_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
    <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </svg>`;

    temp_ac_elemento.innerHTML = 'Temperatura actual: ' + temp_actual + 'º' + tiempo_icon;
    humedad_ac_elemento.innerHTML = "Humedad: " + humedad_actual + '%' + humedad_icon;

    if (cielo_estado === 'clear sky') {
        cieloEstado_elemento.innerHTML = 'Despejado';
    } else if (cielo_estado === 'few clouds' || cielo_estado === 'overcast clouds') {
        cieloEstado_elemento.innerHTML = 'Parcialmente nublado';
    } else if (cielo_estado === 'broken clouds' || cielo_estado === 'scattered clouds') {
        cieloEstado_elemento.innerHTML = 'Nubes dispersas';
    } else {
        cieloEstado_elemento.innerHTML = cielo_estado;
    }

    //20 minutos.
    setTimeout("temperatura()", 1200000);
}

async function forecast() {

    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=3433658&appid=5ead772f5e978aba66947f30c55359f8`
    );
    //let dias = [dia1, dia2, dia3, dia4, dia5];
    const data = await response.json();
    //declaracion objeto dia 1.
    var dia1 = {
        fecha: data.list[4].dt_txt.split(" ")[0],
        temp_min: 999,
        temp_max: -500,
        humedad: data.list[0].main.humidity + "%",
        descripcion: data.list[3].weather[0].description
    };
    //declaracion objeto dia 2.
    var dia2 = {
        fecha: data.list[12].dt_txt.split(" ")[0],
        temp_min: 999,
        temp_max: -500,
        humedad: data.list[8].main.humidity + "%",
        descripcion: data.list[11].weather[0].description
    };
    //declaracion objeto dia 3.
    var dia3 = {
        fecha: data.list[20].dt_txt.split(" ")[0],
        temp_min: 999,
        temp_max: -500,
        humedad: data.list[16].main.humidity + "%",
        descripcion: data.list[19].weather[0].description
    };
    //declaracion objeto dia 4.
    var dia4 = {
        fecha: data.list[28].dt_txt.split(" ")[0],
        temp_min: 999,
        temp_max: -500,
        humedad: data.list[24].main.humidity + "%",
        descripcion: data.list[27].weather[0].description
    };
    //declaracion objeto dia 5.
    var dia5 = {
        fecha: data.list[36].dt_txt.split(" ")[0],
        temp_min: 999,
        temp_max: -500,
        humedad: data.list[39].main.humidity + "%",
        descripcion: data.list[35].weather[0].description
    };
    //conversion de dias
    //declaracion numerica
    let dia0_elemento = document.getElementById("fecha-hoy");
    let dia_numero0 = data.list[0].dt_txt.split(" ")[0];
    dia0_elemento.innerHTML = "Hoy " + ordenar_fecha(dia_numero0);
    let dia_numero1 = new Date(data.list[4].dt_txt);
    let dia_numero2 = new Date(data.list[12].dt_txt);
    let dia_numero3 = new Date(data.list[20].dt_txt);
    let dia_numero4 = new Date(data.list[28].dt_txt);
    let dia_numero5 = new Date(data.list[36].dt_txt);
    //dias de la semana
    var dias_semana = { weekday: 'long' };
    //conversion

    let d1_conv = new Intl.DateTimeFormat('es-ES', dias_semana).format(dia_numero1);
    let d2_conv = new Intl.DateTimeFormat('es-ES', dias_semana).format(dia_numero2);
    let d3_conv = new Intl.DateTimeFormat('es-ES', dias_semana).format(dia_numero3);
    let d4_conv = new Intl.DateTimeFormat('es-ES', dias_semana).format(dia_numero4);
    let d5_conv = new Intl.DateTimeFormat('es-ES', dias_semana).format(dia_numero5);

    //fecha actual
    let fechahoyElemento = document.getElementById('fecha-hoy');
    fechahoyElemento.innerHTML = calcular_dia();

    let dia_1Elemento = document.getElementById('dia-1');
    let dia_2Elemento = document.getElementById('dia-2');
    let dia_3Elemento = document.getElementById('dia-3');
    let dia_4Elemento = document.getElementById('dia-4');
    let dia_5Elemento = document.getElementById('dia-5');

    const termometro_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
    </svg>`;

    const humedad_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
    </svg>`;

    let temp_minmax_dia1Element = document.getElementById('temp-min-max-dia1');
    let temp_minmax_dia2Element = document.getElementById('temp-min-max-dia2');
    let temp_minmax_dia3Element = document.getElementById('temp-min-max-dia3');
    let temp_minmax_dia4Element = document.getElementById('temp-min-max-dia4');
    let temp_minmax_dia5Element = document.getElementById('temp-min-max-dia5');

    let humedad_diaE1 = document.getElementById("humedad-dia1");
    let humedad_diaE2 = document.getElementById("humedad-dia2");
    let humedad_diaE3 = document.getElementById("humedad-dia3");
    let humedad_diaE4 = document.getElementById("humedad-dia4");
    let humedad_diaE5 = document.getElementById("humedad-dia5");



    //Declaracion estado dia 12:00 hs.
    let dia_1Desc = document.getElementById("dia1-desc");
    let dia_2Desc = document.getElementById("dia2-desc");
    let dia_3Desc = document.getElementById("dia3-desc");
    let dia_4Desc = document.getElementById("dia4-desc");
    let dia_5Desc = document.getElementById("dia5-desc");

    //traduccion estados dia 1,2,3,4,5
    //dia1
    if (dia1.descripcion === 'clear sky') {
        dia_1Desc.innerHTML = 'Despejado';
    } else if (dia1.descripcion === 'few clouds' || dia1.descripcion === 'overcast clouds') {
        dia_1Desc.innerHTML = 'Parcialmente nublado';
    } else if (dia1.descripcion === 'broken clouds' || dia1.descripcion === 'scattered clouds') {
        dia_1Desc.innerHTML = 'Nubes dispersas';
    } else if (dia1.descripcion === 'light rain') {
        dia_1Desc.innerHTML = 'Lluvia ligera';
    } else {
        dia_1Desc.innerHTML = dia1.descripcion;
    }

    //dia2
    if (dia2.descripcion === 'clear sky') {
        dia_2Desc.innerHTML = 'Despejado';
    } else if (dia2.descripcion === 'few clouds' || dia2.descripcion === 'overcast clouds') {
        dia_2Desc.innerHTML = 'Parcialmente nublado';
    } else if (dia2.descripcion === 'broken clouds' || dia2.descripcion === 'scattered clouds') {
        dia_2Desc.innerHTML = 'Nubes dispersas';
    } else if (dia2.descripcion === 'light rain') {
        dia_2Desc.innerHTML = 'Lluvia ligera';
    } else {
        dia_2Desc.innerHTML = dia2.descripcion;
    }

    //dia3
    if (dia3.descripcion === 'clear sky') {
        dia_3Desc.innerHTML = 'Despejado';
    } else if (dia3.descripcion === 'few clouds' || dia3.descripcion === 'overcast clouds') {
        dia_3Desc.innerHTML = 'Parcialmente nublado';
    } else if (dia3.descripcion === 'broken clouds' || dia3.descripcion === 'scattered clouds') {
        dia_3Desc.innerHTML = 'Nubes dispersas';
    } else if (dia3.descripcion === 'light rain') {
        dia_3Desc.innerHTML = 'Lluvia ligera';
    } else {
        dia_3Desc.innerHTML = dia3.descripcion;
    }

    //dia4
    if (dia4.descripcion === 'clear sky') {
        dia_4Desc.innerHTML = 'Despejado';
    } else if (dia4.descripcion === 'few clouds' || dia4.descripcion === 'overcast clouds') {
        dia_4Desc.innerHTML = 'Parcialmente nublado';
    } else if (dia4.descripcion === 'broken clouds' || dia4.descripcion === 'scattered clouds') {
        dia_4Desc.innerHTML = 'Nubes dispersas';
    } else if (dia4.descripcion === 'light rain') {
        dia_4Desc.innerHTML = 'Lluvia ligera';
    } else {
        dia_4Desc.innerHTML = dia4.descripcion;
    }

    //dia5
    if (dia5.descripcion === 'clear sky') {
        dia_5Desc.innerHTML = 'Despejado';
    } else if (dia5.descripcion === 'few clouds' || dia5.descripcion === 'overcast clouds') {
        dia_5Desc.innerHTML = 'Parcialmente nublado';
    } else if (dia5.descripcion === 'broken clouds' || dia5.descripcion === 'scattered clouds') {
        dia_5Desc.innerHTML = 'Nubes dispersas';
    } else if (dia5.descripcion === 'light rain') {
        dia_5Desc.innerHTML = 'Lluvia ligera';
    } else {
        dia_5Desc.innerHTML = dia5.descripcion;
    }

    //Temperatura minima | maxima Dia 1.
    for (let i = 0; i <= 8; i++) {
        if (data.list[i].main.temp_max > dia1.temp_max) {
            dia1.temp_max = data.list[i].main.temp_max;
        }
        if (data.list[i].main.temp_min < dia1.temp_min) {
            dia1.temp_min = data.list[i].main.temp_min;
        }
    }

    //Temperatura minima | maxima Dia 2.  
    for (let i = 8; i <= 16; i++) {
        if (data.list[i].main.temp_max > dia2.temp_max) {
            dia2.temp_max = data.list[i].main.temp_max;
        }
        if (data.list[i].main.temp_min < dia2.temp_min) {
            dia2.temp_min = data.list[i].main.temp_min;
        }
    }

    //Temperatura minima | maxima Dia 3.
    for (let i = 16; i <= 24; i++) {
        if (data.list[i].main.temp_max > dia3.temp_max) {
            dia3.temp_max = data.list[i].main.temp_max;
        }
        if (data.list[i].main.temp_min < dia3.temp_min) {
            dia3.temp_min = data.list[i].main.temp_min;
        }
    }

    //Temperatura minima | maxima Dia 4.
    for (let i = 24; i <= 32; i++) {
        if (data.list[i].main.temp_max > dia4.temp_max) {
            dia4.temp_max = data.list[i].main.temp_max;
        }
        if (data.list[i].main.temp_min < dia4.temp_min) {
            dia4.temp_min = data.list[i].main.temp_min;
        }
    }

    //Temperatura minima | maxima Dia 5.
    for (let i = 32; i <= 39; i++) {
        if (data.list[i].main.temp_max > dia5.temp_max) {
            dia5.temp_max = data.list[i].main.temp_max;
        }
        if (data.list[i].main.temp_min < dia5.temp_min) {
            dia5.temp_min = data.list[i].main.temp_min;
        }
    }

    dia_1Elemento.innerHTML = capitalizeFirstLetter(d1_conv) + ' ' + `<p style="font-size: 14px;">${ordenar_fecha(dia1.fecha)}</p>`;
    dia_2Elemento.innerHTML = capitalizeFirstLetter(d2_conv) + ' ' + `<p style="font-size: 14px;">${ordenar_fecha(dia2.fecha)}</p>`;
    dia_3Elemento.innerHTML = capitalizeFirstLetter(d3_conv) + ' ' + `<p style="font-size: 14px;">${ordenar_fecha(dia3.fecha)}</p>`;
    dia_4Elemento.innerHTML = capitalizeFirstLetter(d4_conv) + ' ' + `<p style="font-size: 14px;">${ordenar_fecha(dia4.fecha)}</p>`;
    dia_5Elemento.innerHTML = capitalizeFirstLetter(d5_conv) + ' ' + `<p style="font-size: 14px;">${ordenar_fecha(dia5.fecha)}</p>`;

    temp_minmax_dia1Element.innerHTML = (dia1.temp_min - 273.15).toFixed(0) + `º|` + (dia1.temp_max - 273.15).toFixed(0) + `º ` + termometro_icon;
    temp_minmax_dia2Element.innerHTML = (dia2.temp_min - 273.15).toFixed(0) + `º|` + (dia2.temp_max - 273.15).toFixed(0) + `º ` + termometro_icon;
    temp_minmax_dia3Element.innerHTML = (dia3.temp_min - 273.15).toFixed(0) + `º|` + (dia3.temp_max - 273.15).toFixed(0) + `º ` + termometro_icon;
    temp_minmax_dia4Element.innerHTML = (dia4.temp_min - 273.15).toFixed(0) + `º|` + (dia4.temp_max - 273.15).toFixed(0) + `º ` + termometro_icon;
    temp_minmax_dia5Element.innerHTML = (dia5.temp_min - 273.15).toFixed(0) + `º|` + (dia5.temp_max - 273.15).toFixed(0) + `º ` + termometro_icon;

    humedad_diaE1.innerHTML = dia1.humedad + humedad_icon;
    humedad_diaE2.innerHTML = dia2.humedad + humedad_icon;
    humedad_diaE3.innerHTML = dia3.humedad + humedad_icon;
    humedad_diaE4.innerHTML = dia4.humedad + humedad_icon;
    humedad_diaE5.innerHTML = dia5.humedad + humedad_icon;

    //ejecucion de la funcion cada 20 minutos.
    setTimeout("forecast()", 1200000);
}

//utilidades
function capitalizeFirstLetter(string) {
    let aux;
    aux = string.toLowerCase();
    return aux.charAt(0).toUpperCase() + aux.slice(1);
}

function ordenar_fecha(fecha) {
    let aux = fecha.split('-');
    return aux[2] + '/' + aux[1];
}

function calcular_dia() {
    const fecha322 = new Date();
    let day = fecha322.getDay();
    switch (day) {
        case 0:
            day = "Domingo";
            break;

        case 1:
            day = "Lunes";
            break;

        case 2:
            day = "Martes";
            break;

        case 3:
            day = "Miércoles";
            break;

        case 4:
            day = "Jueves";
            break;

        case 5:
            day = "Viernes";
            break;

        case 6:
            day = "Sabado";
            break;
    }
    return day;
}

function hora_actual() {
    let hoy = new Date();
    let hora = hoy.getHours();
    let minuto = hoy.getMinutes();
    let segundo = hoy.getSeconds();

    str_segundo = new String(segundo);
    if (str_segundo.length == 1)
        segundo = "0" + segundo

    str_minuto = new String(minuto)
    if (str_minuto.length == 1)
        minuto = "0" + minuto

    str_hora = new String(hora)
    if (str_hora.length == 1)
        hora = "0" + hora

    horaImprimible = hora + " : " + minuto;

    let element_nav = document.getElementById('hora-navbar');
    element_nav.innerHTML = `${horaImprimible}`;
    setTimeout("hora_actual()", 1000);
}