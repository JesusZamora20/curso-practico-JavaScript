const listaModa = [1,2,3,1,2,3,4,2,2,2,1];

const listaModaCount = {};

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

const moda = listaModaArray[listaModaArray.length-1];

//el reto es integrarlo a JS
