let listaModa = [];

const listaModaCount = {};

function AddNumberModa(){
    let numberToAddModa = document.getElementById("numeroModa");
    let newNumberModa = Number(numberToAddModa.value);

    listaModa.push(newNumberModa);

    const showListaModa = document.getElementById("listaModa");
    showListaModa.innerText = listaModa;

    document.getElementById('numeroModa').value= null;

}

function CalcularModa(){

    //creamos una funcion que registra cuantas veces estan los 
//elementos en el array
listaModa.map(
    function (elemento){
        if(listaModaCount[elemento]){
            listaModaCount[elemento] += 1;
        }else{
            listaModaCount[elemento] = 1;
        }
    }    
);

//ordenamos los elementos de menor a mayor
const listaModaArray = Object.entries(listaModaCount).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaModaArray[listaModaArray.length-1][0];
const repeticionesmoda = listaModaArray[listaModaArray.length-1][1];

const resultadoModa = document.getElementById("Moda");
resultadoModa.innerText = `La moda es ${moda} y aparece ${repeticionesmoda} veces`;

}


//el reto es integrarlo a JS
