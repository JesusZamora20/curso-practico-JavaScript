let listaPromedio = [];

function AddNumber(){
    let numberToAdd = document.getElementById("numberToAdd");
    let newNumber = Number(numberToAdd.value);

    listaPromedio.push(newNumber);


    const showList = document.getElementById("list");
    showList.innerText = listaPromedio;

    document.getElementById('numberToAdd').value= null;

}

function CalcularPromedio(){

    const sumaLista = listaPromedio.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
    promedioLista = Number(sumaLista/listaPromedio.length);  

    const result = document.getElementById("promedio");
    result.innerText = `el promedio es ${promedioLista}`;
}



