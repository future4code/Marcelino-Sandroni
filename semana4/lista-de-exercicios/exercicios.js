//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   return array.filter(item => !(item % 2)).map(item => item ** 2)
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   return array.filter(item => !(item % 2))
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   return Math.max(...array)
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let array = []
   for(let i = 0; i  < n * 2; i++) {
      if( !(i % 2) ) array.push(i)
   }
   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if(a === b && a === c) return 'Equilátero'
   else if(a !== b && a !== c && b !== c) return 'Escaleno'
   else return 'Isósceles'
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let max = num1 > num2 ? num1 : num2
   let min = num1 < num2 ? num1 : num2

   return {
      maiorNumero: max,
      maiorDivisivelporMenor: !(max % min),
      diferenca: max - min
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let max = secondMin = Math.max(...array)
   let min = secondMax = Math.min(...array)

   for(item of array) {
      if(item < secondMin && item !== min) secondMin = item
      if(item > secondMax && item !== max) secondMax = item
   }
   
   return [secondMax, secondMin]
}

//Exercício 11

function ordenaArray(array) {
   let isArrayOrdened = false
   const limit = array.length - 1

   while(!isArrayOrdened) {
      isArrayOrdened = true

      for(let i = 0; i < limit; i++) {
         if(array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            isArrayOrdened = false
         }
      }
   }

   return array
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   return {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: [
         'Meryl Streep',
         'Anne Hathaway',
         'Emily Blunt',
         'Stanley Tucci'
      ]
   }
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const {nome, ano, diretor, atores} = filmeFavorito()
   return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${
      diretor} e estrelado por ${atores.join(', ')}.`

}
// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   return {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 +lado2),
      area: (lado1 * lado2)
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   return Object.assign(pessoa, {nome: 'ANÔNIMO'})
   
   // pesquisar depois se é possível fazer destructuring assign com objetos
   // substituindo somente os valores na direita pelos da esquerda
   //return {...pessoa, nome: 'ANÔNIMO'}
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter(item => item.idade >= 18)
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter(item => item.idade < 18)
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   return array.map(item => item * 2)
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   return array.map(item => String(item * 2))
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   return array.map(item => !(item % 2) ? `${item} é par` : `${item} é ímpar`)
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

// tira o argumento pessoas aqui da funcao senao vai chamar variavel local
// e nao o objeto de cima
function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui

   return pessoas.filter(i => i.altura >= 1.5 && i.idade > 14 && i.idade < 60)
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   return pessoas.filter(i => (i.idade < 14 || i.idade > 60) || i.altura < 1.5)
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
   let email = consulta => {
      let {nome, genero, cancelada, dataDaConsulta} = consulta
      genero = genero === 'masculino' ? 1 : 0

      if(cancelada) {
         return `Olá, ${genero ? 'Sr.' : 'Sra.'} ${nome }. Estamos enviando esta\
 mensagem para lembrá-l${genero ? 'o' : 'a'} da sua consulta no dia \
${dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
      } else {
         return `Olá, ${genero ? 'Sr.' : 'Sra.'} ${nome}. Infelizmente sua \
consulta marcada para o dia ${dataDaConsulta} foi cancelada. Se \
quiser, pode entrar em contato conosco para remarcá-la.`
      }
   }

   return consultas.map(email)
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
   const somarCompras = (soma, compra) => soma + compra
   contas.forEach(conta => conta.saldoTotal -= conta.compras.reduce(somarCompras, 0))
   return contas
}

