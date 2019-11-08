"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function requestEmpresas() {
    return __awaiter(this, void 0, void 0, function* () {
        var url = "http://localhost/frontend/api/empresas/empresas.php";
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = yield response.json();
        return json;
    });
}
;
function listEmpresas() {
    return __awaiter(this, void 0, void 0, function* () {
        var empresa = "";
        let respuesta = yield requestEmpresas();
        //console.log(respuesta);
        if (respuesta[0].validacion) {
            respuesta.forEach((empresas) => {
                empresa = "<div class=\"card float-left\" style=\"width: 19rem;\">" +
                    "<img src=\"" + empresas.foto + "\" class=\"card-img-top\" alt=\"" + empresas.nombre + "\">" +
                    "<div class=\"card-body\">" +
                    "<h5 class=\"card-title\">" + empresas.nombre + "</h5>" +
                    "<p class=\"card-text\">" +
                    "<b>Dirección:</b>" + empresas.direccion + ".</br>" +
                    "<b>Telefono:</b>" + empresas.telefono1 + "</br>" +
                    "<b>Horario de atención:</b>" + empresas.horario + "</p>" +
                    "<a href=\"" + empresas.foto + "\" class=\"btn btn-primary\">HACER UN PEDIDO</a>" +
                    "</div>" +
                    "</div>";
            });
        }
        else {
        }
    });
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
//# sourceMappingURL=request.js.map