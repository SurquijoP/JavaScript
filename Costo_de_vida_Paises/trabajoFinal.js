
// Saludo
const saludo = prompt("Hola, Ingresa tu nombre");
const nombre = document.getElementById("nombre");
        nombre.innerText = "Hola! " + saludo + ", Ingresa tu salario en USD."; 
// paises
const Paises = [
    "Colombia",
    "Peru",
    "Chile",
 ];
        // Calcular el salario real
function calcularSalarioFinal(salario, Pais){
    const gastosPorPais = salario - Pais;
       return gastosPorPais;      
    }
// Convertir moneda
function onClickButtonConvertirMoneda(){
    const inputMoneda = document.getElementById("inputMoneda");
    const inputSalario = document.getElementById("inputSalario")
    const MonedaValue = inputMoneda.value;
    const COP ="COP"
    const PEN ="PEN"
    const CLP ="CLP"
    

    if(MonedaValue === COP)
    {
        const MonedaValueCOP = inputSalario.value / 4100;
        alert("Ganas $" + MonedaValueCOP +" Ingresalo!");
      }
      else if(MonedaValue === PEN)
      {
        const MonedaValuePEN = inputSalario.value / 4;
        alert("Ganas $" + MonedaValuePEN +" Ingresalo!");
      }
      else if (MonedaValue === CLP)
    {
        const MonedaValueCLP = inputSalario.value / 826;
        alert("Ganas $" + MonedaValueCLP +" Ingresalo!");
      } 

      
    }


// Calcular salario
function onClickButtonCalSalario(){
    const inputSalario = document.getElementById("inputSalario");
    const salarioValue = inputSalario.value;

    const inputPais = document.getElementById("inputPais");
    const PaisValue = inputPais.value;

    
// Seleccion de paises
   
    let Pais;
        switch(PaisValue) 
        {
           case Paises[0]: //"Colombia"
           Pais = 588,54;
           break;

           case Paises[1]: //"Peru"
           Pais = 257
           break;
           
           case Paises[2]://"Chile"
            Pais = 529;
            break;
           
           default:
            alert("Ingrese un Pais valido!")
         }
const calSalarioFinal = calcularSalarioFinal(salarioValue, Pais);
// Si ganas menos de 257 dolares
if(salarioValue < 257){
    alert("Te recomiendo no vivir allí!, Tienes " + calSalarioFinal + " Que debes conseguir Para vivir!.")
    }

// Resultado final
const resultP = document.getElementById("resultP");
        resultP.innerText = "Tu salario real es de $" + calSalarioFinal + ". en " + PaisValue; 

}