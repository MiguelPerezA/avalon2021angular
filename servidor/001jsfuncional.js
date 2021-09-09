let lista = [1, 2, 3, 4];

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
}
console.log("-----------------------");

console.log(sumar(2, 3));

function sumar(a, b) {
    return a + b;
}

function sumarFormatoA(a, b) {
    console.log("¡" + sumar(2, 3) + "!");
}

function sumarFormatoB(a, b) {
    console.log("<" + sumar(2, 3) + ">");
}

//Para ahorrar una funcion por cada formato

function formatoA(resultado) {
    console.log("¡" + resultado + "!");
}

//High Order Function porque recibe otra funcion como parametro
function sumarConFuncion(a, b, f) {
    f(sumar(a, b));
}

sumarConFuncion(2, 3, formatoA);

//Uso de función anónima
sumarConFuncion(3, 2, function(result) {
    console.log("<" + result + ">");
});