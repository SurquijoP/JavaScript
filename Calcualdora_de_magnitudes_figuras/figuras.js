// codigo del cuadrado
console.group("Cuadrado");

// const ladocuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado){
    return lado * 4 ;
} 

// console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm");

//const areacuadrado = ladocuadrado * ladocuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areacuadrado + "cm^2");

console.groupEnd();

//codigo del cuadrado

//codigo triangulo
console.group("Triangulo");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6
//const basetriangulo = 4;
//const alturatriangulo = 5.5;
function trianguloIsosceles(lado1, lado2, base){
    

    if(lado1 === lado2 && lado1 != base){
 const altura = Math.sqrt(lado1**2 - base**2/ 4)
   alert("Sus lados son iguales!, tenemos un triangulo isosceles y su altura es " + altura + " cm, ingresala");
} else if(lado2 === base && lado2 != lado1) {
const altura = Math.sqrt(lado2**2 - lado1**2/ 4)
    alert("Un lado es igual a la base!, tenemos un triangulo isosceles y su altura es " + altura + " cm, ingresala")
} else if (lado1 === base && lado1 != lado2){
    const altura = Math.sqrt(lado1**2 - lado2**2/ 4)
   alert("Un lado es igual a la base!, tenemos un triangulo isosceles y su altura es " + altura + " cm, ingresala");
} 
}


 
 


   
//console.log("La altura del triangulo es: " + alturatriangulo);
    function perimetrotriangulo(lado1, lado2, base){
     return lado1 + lado2 + base;
    }  

function areaTriangulo(base, altura){
     return (base * altura) / 2;  
}
//console.log("El area del triangulo es: " + areatriangulo);
//codigo triangulo
console.groupEnd();

//codigo circulo
console.group("Circulo");

//radio
//const radiocirculo = 4;
//console.log("El radio del circulo es: " + radiocirculo + "cm");
//diametro
function diametroCirculo(radio){
 return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//pi
const PI = Math.PI;
//console.log("El valor de PI es: " + PI + "cm");

//circunferencia
function perimetrocirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
// console.log("El perimetro del circulo es: " + perimetrocirculo + "cm");

//area 
function areacirculo(radio){
    return (radio * radio) * PI;
} 
//console.log("El area del circulo es: " + areacirculo + "cm");
console.groupEnd();

//Aqui interuactuamos con el html
//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro + " cm Es el perimetro del Cuadrado");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area + " cm^2Es el area del Cuadrado");
}

//Traingulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    
    const isosceles = trianguloIsosceles(value1, value2, value3);

    
    const perimetro = perimetrotriangulo(value1, value2, value3);
    alert(perimetro + " cm Triangulo");
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = Number(input4.value);


    const area = areaTriangulo(value3, value4);
    alert(area + " cm^2 Es el area del triangulo");
}
//Circulo
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    
    const area = areacirculo(value, PI);
    alert(area + " cm^2 Es el area del Circulo");
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    
    const area = perimetrocirculo(value, PI);
    alert(area + " cm Es el Perimetro del Circulo");
}
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    
    const area = diametroCirculo(value, PI);
    alert(area + " cm Es el Diametro del Circulo");
}
