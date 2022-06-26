//detectar si son iguales o alguno mayor
function igualSumarDosNumeros (num1, num2){
 if (num1 == num2){
   console.log(num1 + "y " + num2 + "Son numeros iguales");
 } if (num1 > num2){
   console.log(num1 + "es mayor que " + num2 + "por " + (num1-num2));
 } if (num2 > num1){
   console.log(num2 + "es mayor que " + num1 + "por " + (num2-num1));
 }
}

igualSumarDosNumeros();
//aca inicia la segunda prueba
//ordenar los numeros
let numeros = [ 150, 1, 6, 300, 5000, 6, 475, 74, 85 ,2];

function compararNumeros (a, b){
  return a - b;
}
numeros.sort(compararNumeros)


//sumar los numeros
function sumarNumeros(){
  let totalNumeros = numeros.reduce((a, b) => a + b, 0);
}
sumarNumeros();

//sumar numeros metodo for
let total = 0;
for(let i of numeros) total+=i;
console.log(total)

//sumar numeros metodo foreach
let total1=0;
numeros.forEach(function(a){total1 += a;});
console.log(total1);

//metodo while
const cantidadNumeros = numeros.length -1;
let sum = 0;
let i = 0;

while (i  <= cantidadNumeros){
  sum += numeros[i]
  i++
}
console.log(sum)
