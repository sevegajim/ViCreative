function productoSeleccionado(producto){
    let specialsDatos = document.getElementById("descripcion");
    let specialsImg = document.getElementById("row-specials-img");
    let urlImg = "";
    let htmlDinamico = "";

    switch(producto){
        case 1:
            urlImg = "/assets/img/Taza.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Taza de 15oz</h3>";
            htmlDinamico +=
            "<p class='text-center'>Por un precio de ₡5200 te ofrecemos una variedad de colores a escoger para tu taza con un diseño que tu puedes elegir.</p>";
        break;
        case 2:
            urlImg = "/assets/img/PerritoJarra.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Jarra Cervezera</h3>";
            htmlDinamico +=
            "<p class='text-center'>Por un precio de ₡5600 te ofrecemos una variedad <br>de colores a escoger para tu jarra con <br>el diseño que desees.</p>";
        break;
        case 3:
            urlImg = "/assets/img/Gorra.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Gorra</h3>";
            htmlDinamico +=
            "<p class='text-center'>Llevate una gorra con tu diseño favorito. <br>Adulto: ₡4000 / Niño: ₡3800</p>";
        break;
        case 4:
            urlImg = "/assets/img/CamisaSpiderman.jpg";
            htmlDinamico += "<h3 class= 'text-center'>Camisetas</h3>";
            htmlDinamico +=
            "<p class='text-center'>Tu prenda de vestir favorita con un diseño unico <br>por tan solo ₡6700.</p>";
        break;
        case 5:
            urlImg = "/assets/img/ToteBag.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Tote Bag</h3>";
            htmlDinamico +=
            "<p class='text-center'>Solicita tu tote bag personalizado para guardar tus cosas por ₡8000</p>";
        break;
        case 6:
            urlImg = "/assets/img/Sudadera.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Hoodies</h3>";
            htmlDinamico +=
            "<p class='text-center'>Una sudadera nunca está de más, y que mejor <br>que una con tu propio estilo por ₡15000</p>";
        break;
        case 7:
            urlImg = "/assets/img/Llavero.jpeg";
            htmlDinamico += "<h3 class= 'text-center'>Llavero</h3>";
            htmlDinamico +=
            "<p class='text-center'>Un detallito pequeño pero muy significativo. <br>LLevate el tuyo por ₡4100</p>";
        break;
    }

    specialsDatos.innerHTML = "";
    specialsDatos.innerHTML = htmlDinamico;
    specialsImg.src = urlImg;
}




