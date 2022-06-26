const precioOriginal = 120;
const Cupones = [
   "sebas1",
   "sebas2",
   "sebas3",
];

function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   return precioConDescuento;      
}

function onClickButtonPriceDiscount() {
        const inputPrice = document.getElementById("inputPrice")
        const priceValue = inputPrice.value;
        
        const inputDiscount = document.getElementById("inputCupon");
        const CuponValue = inputCupon.value;

        
        let descuento;

        switch(CuponValue) 
        {
           case Cupones[0]: //"JuanDc_es_batman"
           descuento = 15;
           break;

           case Cupones[1]: //"pero_no_le_digas_a_nadie"
           descuento = 30
           break;
           
           case Cupones[2]://"es_un_secreto"
            descuento = 25;
            break;
           
           default:
            alert("Ingrese un Cupon valido!")
         }
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento; 
}        
//console.log({
     //precioOriginal,
     //descuento,
    // porcentajePrecioConDescuento,
     //precioConDescuento
 //});