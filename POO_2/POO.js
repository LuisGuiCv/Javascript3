/*
let objeto={
    
}

console.log(objeto.apellido_materno);


let persona={
    nombre:"Luis Guillermo",
    apellido:{
        paterno:"Cruz",
    materno:"Vargas"

    },
    edad: 22,
    nombreCompleto: function(){
        return this.nombre +" "+this.apellido.paterno;}
    
}
console.log(persona.nombreCompleto());

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


document.getElementById("boquita").innerHTML = persona.nombreCompleto();*/
/*
class Rectangle{
constructor(height,width){
    this.height=height;
    this.width=width;
}

get area(){
    return this.calcArea();
}

calcArea(){
    return this.height*this.width;
}
}



const square = new Rectangle(10,10);

console.log(square.area);*/
/*
class persona{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const persona1= new persona("Luis",1999);
const persona2=new persona("Angeles",2000)

console.log(persona1);

console.log(persona2);

document.getElementById("id").innerHTML =persona1.name;
document.getElementById("id").innerHTML =persona2.name;
*/
class padre {
    
    constructor(apellido) {
      this.apellidoPadre = apellido;
    }
  }
  
  class hijo extends padre {
    constructor(nombre, apellido) {
      super(apellido);
      this.nombreHijo = nombre;
    }
  
    registro() {
      return (
        "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
    }
  }
  
  let Hijo1 = new hijo(prompt("ingrese el nombre del hijo"),prompt("Ingrese apellido del padre:"));
  let Hijo2 = new hijo(prompt("ingrese el nombre del hijo"),prompt("Ingrese apellido del padre:"));
  
  document.getElementById("id").innerHTML = Hijo1.registro();

  