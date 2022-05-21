const lista1 = [
    100,200,300,500
];




function CalcularPromedio(lista){
    /*let  sumaLista =0;

    for(let i = 0;i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(
        (valorAcumulado = 0,nuevoElemento)=> valorAcumulado + nuevoElemento
    );

    const result = sumaLista/lista.length;
    return result;

}