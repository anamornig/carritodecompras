let fotosEnLocalStorage =JSON.parse(localStorage.getItem('fotos'));

// mostrar los productos en el carrito, precio y boton de eliminar

for (let i = 0 ; i < fotosEnLocalStorage.length;i++){

    $(".main").append(  `
    <div class ="fotos__container">
            <h6 class ="fotos__container--nombre">${fotosEnLocalStorage[i].fotoNombre}</h6>
                <div class ="fotos__container--precio" >${fotosEnLocalStorage[i].fotoPrecio}$</div>
                <a href = "carrito.html" class = "fotos__container--delete deleteButton${i}">Eliminar ${fotosEnLocalStorage[i].fotoNombre} del carrito</button>
            </div>
    </div>`
    )
    $(`.deleteButton${i}`).click(() => {
        
        if(fotosEnLocalStorage[i].fotoNombre === fotosEnLocalStorage[i].fotoNombre ){

            fotosEnLocalStorage.splice(i,1);

        }
        localStorage.setItem('fotos', JSON.stringify(fotosEnLocalStorage));
    })

}

// mostrar precio total y cantidad de articulos

let cantidadFotosTotal=0;
for(let i =0; i < fotosEnLocalStorage.length; i++){
    cantidadFotosTotal = fotosEnLocalStorage.length;
}


let precioTotal = 0;
for (let i =0; i < fotosEnLocalStorage.length; i++) {
    precioTotal = precioTotal + fotosEnLocalStorage[i].fotoPrecio;
};

$ (".precio-total").append(
    `<p>Cantidad de fotos: ${cantidadFotosTotal}<br>
    Precio total: $ ${precioTotal}</p>`);
