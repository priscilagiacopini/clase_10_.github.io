const helado = 100;

let topping= "Oreo";
let precio;
let precioFinal;

if (topping == "Oreo") {
    precio = 10;
} 


else if (topping == "KitKad") {
    precio = 15;
}


else if (topping == "Kinder") {
    precio = 25;
}

precioFinal = precio + helado;

console.log ("El helado cuesta $" + precioFinal);