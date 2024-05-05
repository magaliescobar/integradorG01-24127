


let cupon1 = "10%OFF";
let cupon2 = "15%OFF";
let cupon3 = "20%OFF";



function checkDescuento(cupon){
    switch (cupon) {
        case "10%OFF":
            return descuentoPorcentaje = 0.1;
        case "15%OFF":
            return descuentoPorcentaje = 0.15;
        case "20%OFF":
            return descuentoPorcentaje = 0.2;
        default:
           return descuentoPorcentaje = 0;

    }
}


let updateButton = document.getElementById("button-update");
let discountButton = document.getElementById("button-cupon");
discountButton.addEventListener("click", update);
updateButton.addEventListener("click", update);




function update(){

    let inputCupon = document.getElementById("input-cupon");
    descuentoPorcentaje = checkDescuento(inputCupon.value);

    let precios = [];
    let preciosElement = document.getElementsByClassName("precio")
    for (item of preciosElement){
        precios.push((Number(item.innerText)))

    }
    let cantidades = [];
    let cantidadesElement = document.getElementsByClassName("cantidad")
    for (item of cantidadesElement){
        cantidades.push((Number(item.value)))
    }

    let subtotal = 0;
    for(let i=0; i<precios.length; i++){
        console.log(precios[i]);
        console.log(cantidades[i]);
        subtotal = subtotal + precios[i]*cantidades[i];
    }

    console.log(precios);
    console.log(cantidades);
    console.log(subtotal);

    let subtotalElement = document.getElementById("subtotal")
    subtotalElement.innerText = subtotal;
    let total = document.getElementById("total");
    let descuento = document.getElementById("descuento");
    descuentoMonto = subtotal*descuentoPorcentaje;
    descuento.innerText = descuentoMonto;
    total.innerText = subtotal - descuentoMonto;


}





