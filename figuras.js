//CUADRADO
console.group("Cuadrado");

function PerimetroCuadrado(lado){
    return lado * 4;
}

function AreaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//TRIANGULO
console.group("Triangulo");

function PerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function AreaTriangulo(base, altura){
    return (base * altura)/2
}
console.groupEnd();

//CIRCULO
console.log("Circulo");

function PerimetroCirculo(radio){
    return radio * Math.PI * 2;
}

function AreaCirculo(radio){
    return radio * radio * Math.PI;
}

console.groupEnd();

//se interactua con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = AreaCuadrado(value);
    alert(area);
}