async function requestEmpresas(){
    var url = "http://localhost/frontend/api/empresas/empresas.php";

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    return json;
    
};

async function listEmpresas(){
    var empresa: String = "";
    let respuesta = await requestEmpresas();
    //console.log(respuesta);
    if (respuesta[0].validacion) {
        respuesta.forEach((empresas: any)=>{
            empresa = "<div class=\"card float-left\" style=\"width: 19rem;\">"+
            "<img src=\""+empresas.foto +"\" class=\"card-img-top\" alt=\""+empresas.nombre+"\">"+
            "<div class=\"card-body\">"+
            "<h5 class=\"card-title\">"+empresas.nombre+"</h5>"+
            "<p class=\"card-text\">"+
            "<b>Dirección:</b>"+empresas.direccion+".</br>"+
            "<b>Telefono:</b>"+empresas.telefono1+"</br>"+
            "<b>Horario de atención:</b>"+empresas.horario+"</p>"+
            "<a href=\""+empresas.foto+"\" class=\"btn btn-primary\">HACER UN PEDIDO</a>"+
            "</div>"+
            "</div>";
        });
    } else {
        
    }
    
}
/*"<div class=\"card float-left\" style=\"width: 19rem;\">
            <img src=\"http://localhost/img/p1.jpg\" class=\"card-img-top\" alt=\"Imagen Empresa\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">Papios</h5>
                <p class=\"card-text\">
                <b>Direccion:</b> Primera Constituyente 34-25.</br>
                <b>Telefono:</b>(03) 294-0601</br>
                <b>Horario de atención:</b> 08:00 hasta las 16:00</p>
                <a href=\"#\" class=\"btn btn-primary\">HACER UN PEDIDO</a>
            </div>
            </div>"*/