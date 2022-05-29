const listaMediana = [1,3,5,6,1,3,4,5,5,6,7,7,7,3,1,21,2,2];

const mitadListaMediana = parseInt(listaMediana.length /2);


function EsPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}

let mediana;

const listaMedianaOrdenada = listaMediana.sort(
    function (elementoAmediana, elementoBmediana){
        return elementoAmediana - elementoBmediana;
    }
);

if(EsPar(listaMedianaOrdenada.length)){
    const elemento1 = listaMedianaOrdenada[mitadListaMediana - 1];
    const elemento2 = listaMedianaOrdenada[mitadListaMediana];
    
    const promedioElem1YElem2 = CalcularPromedioDeMediana([
        elemento1, elemento2
    ]);
    mediana = promedioElem1YElem2;

}else{
    mediana = listaMedianaOrdenada[mitadListaMediana];
 
}

function CalcularPromedioDeMediana(lista){

    const sumaListaMediana = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
        medianaLista = Number(sumaListaMediana/lista.length);  

        return medianaLista;

}



//el reto de este es integrarlo con html como siempre, 
// además debemos ordenar los datos de mayor a menor con .sort - hecho