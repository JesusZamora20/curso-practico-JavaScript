const listaMediana = [1,3,4,5];

const mitadListaMediana = parseInt(listaMediana.length /2);

function EsPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}

let mediana;

if(EsPar(listaMediana.length)){
    const elemento1 = listaMediana[mitadListaMediana - 1];
    const elemento2 = listaMediana[mitadListaMediana];
    
    const promedioElem1YElem2 = CalcularPromedioDeMediana([
        elemento1, elemento2
    ]);
    mediana = promedioElem1YElem2;

}else{
    mediana = listaMediana[mitadListaMediana];
 
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
// además debemos ordenar los datos de mayor a menor con .sort