

var cadena = "hola como estas"
var numero = 456
var mensaje = "mira tu "+cadena+" tengp el numero "+ numero

console.log(mensaje)

mensaje = utf8Decode(mensaje)

console.log(mensaje)
    
    
var suma = 10 +10 ; 
var resta = 50 - 20 ;
var multiplicacion = 50 * 20;
var division = 45 / 5;
var modulo = 5%2;
//var elevacion 

//declaraciones un arreglo
var nombres = ["Pepe", "Daniel","Sofia"]
console.log(nombres)
//agregamos un nuevo nombre
nombres.push("teresa")
console.log(nombres)

var buscando = nombres.indexOf("Daniel")
console.log(buscando)

//eliminamos el elemento

nombres.splice(buscando,5)
console.log(nombres)

var valores=["Daniel","Sofia",true,false,2*2,56.7,undefined,10,"Roberto"]
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])


for (var i=0 ; i < valores.length; i++){
    
    console.log(valores[i])
}

/*for (i=0;i<10;i++){ 
   	for (j=0;j<10;j++) { 
   	document.write(i + "-" + j) 
   	} 
}*/

function calculaArea(base, altura){
 
    return base * altura
}

var ladoA=10
var ladoB = 30

var areaFigura1 = calculaArea(10, 30)
//document.write("el area" + ladoA + "x" + ladoB + " es: " + areaFigura1)
alert("el area" + ladoA + "x" + ladoB + " es: " + areaFigura1)


//java escript los json en esta parte se define un objeto dentro de sus funciones 
// es la forma de trabajar con objetos en java script bueno en JSON

var automovil = {
    color: "Rojo",
    marca: "Chevrolet",
    placas: "1234-ABCD",
    duenio: "Ricardo",
    cambDuenios: 0,
    cambioDuenios: function(duenio){
        this.duenio = duenio
        this.cambDuenios+=1;
    },
    cambiarPlacas: function(placas){
        this.placas
    }
}

console.log(automovil)
automovil.cambioDuenios("Daniel")
console.log(automovil)


function Persona(nombre,apep,apen){
    this.nombre = nombre;
    this.apep = apep;
    this.apen = apen;
}
//asignamos un constructor
var persona = new Persona()
persona.nombre ="Pepe"
persona.apen ="Perez"
persona.apep ="Perez"


//ARREGLO DE LA CLASE PERSONAS
var personas =[]
personas.push(new Persona("Daniel","Perez","Roberto"))
personas.push(new Persona("Daniel","Perez","Roberto"))
personas.push(new Persona("Daniel","Perez","Roberto"))




