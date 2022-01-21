let articulo={
    nombre:"Dona",
    descripcion:"Chocolate con chispas gluten free",
    precio:50,
    cantidad: 3,
    link:"https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc",
}

let venta={
    producto:{
        pan: "Dona"
    },
    total: 5,
    idCliente: 1915,
    emailcliente:"idcliente151@gmail.com"

}

console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+((articulo.precio)*(articulo.cantidad)));


document.getElementById("boquita").innerHTML = persona.nombreCompleto();