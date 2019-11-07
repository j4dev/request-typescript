async function requestSWGastos(){
    var url = "http://localhost/frontend/api/empresas/empresas.php";

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const json = await response.json();
    console.log(json);
    
};