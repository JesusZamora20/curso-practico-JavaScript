//Helpers
function EsPar(numero){
    return (numero % 2 === 0);
}

function CalcularPromedioDeSalarios(lista){

    const sumaListaMediana = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
    );
    medianaLista = Number(sumaListaMediana/lista.length);  

    return medianaLista;
}

//calculadora de Mediana
function MedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(EsPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = CalcularPromedioDeSalarios([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];

        return personaMitad;
    }
}

const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColOrdenados = salariosCol.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB;
    }
);



const medianaGeneralCol = MedianaSalarios(salariosColOrdenados);