
$.get( "../js/productos.json", data => {
    // mecanica de guardar fotos en carrito
    const guardarFotosEnCarrito =  i => {
        $(`.button${i}`).click( () => {
            swal("Producto agregado al carrito");
            const fotoNombre = data.fotos[i].nombre;
            const fotoPrecio = data.fotos[i].precio;

            let fotosObject = {
                fotoNombre,
                fotoPrecio,
            }       
    
            if(localStorage.getItem('fotos') === null){
                let fotosArray = []
                fotosArray.push(fotosObject)
                localStorage.setItem('fotos', JSON.stringify(fotosArray))
            }else{ 
                let fotosEnLocalStorage = JSON.parse(localStorage.getItem('fotos'));
                fotosEnLocalStorage.push(fotosObject);
                localStorage.setItem('fotos', JSON.stringify(fotosEnLocalStorage))
            }             
        })
    }
        // agregar los productos y boton de compra a la pagina 
        for (let i = 0; i < data.fotos.length; i++) {
            $(".main__container").append(
                `<div>
                    <div class="container">
                        <img src= ${data.fotos[i].src} class='fotoventa'>
                            <div class="middle">
                                <div class="text">
                                    <input value="${data.fotos[i].id}" type="hidden">
                                    <h4>  ${data.fotos[i].nombre}</h4>
                                    <b> $ ${data.fotos[i].precio}</b>
                                    <button class ="main__card--button main__card--element button${i}">Comprar</button>
                                </div>
                            </div>
                    </div>
                </div>`
            )
            guardarFotosEnCarrito(i)
            

    }
    
    

 // mensaje de error
}).fail(()=> {
    console.log("error")
    swal("ERROR 404", "Error en la base de datos, por favor contacte a soporte tecnico", "error");

});



