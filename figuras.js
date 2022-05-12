//CUADRADO
console.group("Cuadrado");

function PerimetroCuadrado(lado){
    return Number(lado) * 4;
}

function AreaCuadrado(lado){
    return Number(lado) * Number(lado);
}

console.groupEnd();

//TRIANGULO
console.group("Triangulo");

function PerimetroTriangulo(lado1, lado2, base){
    const perimetro = (Number(lado1) + Number(lado2) + Number(base));
    return perimetro;
}

function AreaTriangulo(base, altura){
    const area = (Number(base) * Number(altura))/2;
    return area;
}
console.groupEnd();

//CIRCULO
console.log("Circulo");

function PerimetroCirculo(radio){
    return Number(radio) * Math.PI * 2;
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

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const inputbase = document.getElementById("InputTrianguloBase");

    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = inputbase.value;

    const perimetroTriangulo = PerimetroTriangulo(lado1, lado2, base);
    alert(perimetroTriangulo);

}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura"); 

    const base = inputBase.value;
    const altura = inputAltura.value;
    const areaTriangulo = AreaTriangulo(base, altura);
    alert(areaTriangulo);
}

function calcularPerimetroCirculo(){
   const inputRadio = document.getElementById("InputRadioCirculo");

   const radio = inputRadio.value;

   const perimetro = PerimetroCirculo(radio);
   alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");

   const radio = inputRadio.value;

   const areaDelCirculo = AreaCirculo(radio);
   alert(areaDelCirculo);

}