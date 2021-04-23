const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

const { log } = console;

log(ordenarListaPorNome(consultas));
log(ordenarListaPorData(consultas));

// Exercicio 19-A
function ordenarListaPorNome(array) {
  /* #OPTION 1 */
  //Simple resolution, native method, return sorted list if is array,
  //and nothing if arg is not array
  if (Array.isArray(array))
    return array.sort((firstItem, secondItem) =>
      firstItem.nome < secondItem.nome ? -1 : 1
    );

  /* #OPTION 2 */
  //Manual sorting, without native methods, comment first method to run

  //bye if not array
  if (!Array.isArray(array)) return;
  //loop control to see if order is correct
  let isListOrdened;

  //ordenando aqui vendo letra por letra, pois acho q kda char tem um numero
  //esses numeros do char sao menores para as letras que vem antes no alfabeto
  do {
    //let put that list is sorted, until we found a unsorted item in loop
    isListOrdened = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].nome > array[i + 1].nome) {
        //Achei algo fora de ordem, entao vamos falar q ainda esta baguncado
        isListOrdened = false;
        //troca dos items com destructuring assign, invertendo a ordem
        [array[i].nome, array[i + 1].nome] = [array[i + 1].nome, array[i].nome];
      }
    }
  } while (!isListOrdened);

  return array;
}

// Exercicio 19-B
function ordenarListaPorData(consultas) {
  //calculate diferrence in date values to sort
  const sortDate = (itemA, itemB) =>
    convertDate(itemA.dataDaConsulta) - convertDate(itemB.dataDaConsulta);

  //convert DD/MM/YYYY to YYYY/MM/DD
  const convertDate = (dateString) =>
    Date.parse(dateString.split("/").reverse().join("/"));

  //sorted list by date
  return consultas.sort(sortDate);
}
