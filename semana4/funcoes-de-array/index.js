let arrDespesas = []


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>' + 
    '<div class="title"><u>Valor</u><u>Tipo</u><u>Descrição</u></div>'


    if(!arrDespesas.length) return
    // AQUI VEM A IMPLEMENTAÇÃO
    let container = document.createElement('div') 
    container.classList.add('despesas-detalhadas')
    
    let titleContainer = document.createElement('div')
    titleContainer.classList.add('title')

    for(keys in despesas[0]) {
        let title = document.createElement('span').textContent = keys
        titleContainer.append(title)
    }
    
    despesas.forEach(despesa => {
        let value = document.createElement('span')
        let type = document.createElement('span')
        let description = document.createElement('span')

        value.textContent = despesa.valor
        type.textContent = despesa.tipo
        description.textContent = despesa.descricao
        
        let lineContainer = document.createElement('div')
        lineContainer.classList.add('line-container')
        lineContainer.append(value, type, description)
        
        container.append(lineContainer)
    })

    divDespesas.append(titleContainer, container)
    //divDespesas.replaceChildren(container,)
}
const filterType = type => arrDespesas.filter(item => item.tipo === type)

const filterValues = (list, min, max) => 
  list.filter(i => i.valor >= min && i.valor <= max)

const sumType = type => filterType(type).reduce((s, i) => s + i.valor, 0)

const sumValue = items => items.reduce((sum, item) => sum + item.valor, 0)

const sortValues = (list, order) => list.sort(
  (a, b) => order ? a.valor - b.valor : b.valor - a.valor
)

// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')

    // AQUI VEM A IMPLEMENTAÇÃO
    let gastoAlimentacao = sumType('alimentação')
    let gastoUtilidades = sumType('utilidades')
    let gastoViagem = sumType('viagem')
    let gastoTotal =  !arrDespesas.length || sumValue(arrDespesas)

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
    imprimirDespesas(arrDespesas)
}



function adicionarDespesa(){
    // let valorCdt = document.getElementById('valorCadastro')
    // let tipoCtd = document.getElementById('tipoCadastro')
    // let descricaoCtd = document.getElementById('descricaoCadastro')
    
    // Minha propria maneira de pegar elementos
    const selector = '#cadastro > [id$=Cadastro]'
    let [valorCdt, tipoCtd, descricaoCtd] = document.querySelectorAll(selector)


    if( validarValor(valorCdt) &&
        validarTipo(tipoCtd) &&
        validarDescricao(descricaoCtd) ){

        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""
        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato(arrDespesas)
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    if (!arrDespesas.length) {
        alert('Ainda nao tem despesas para filtrar')
      return
    }

    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    let order = Number(document.querySelector('#ordemFiltro').value)
    
    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    let filtered 

    if (tipoFiltro && tipoFiltro !== 'todos') {
        console.log({tipoFiltro})
        filtered = filterType(tipoFiltro)
    } else {
        console.log(`Sem filtro`)
        filtered = arrDespesas
    }
    
    console.log({filtered})

    // Permitir inserir apenas valorMin ou apenas valorMax
    // Mas nao vaorMin menor que valorMax
    if(valorMin < valorMax ||
      valorMin && !valorMax ||
      valorMax && !valorMin) {
        valorMax = valorMax || Infinity
        console.log({valorMax})
        filtered = filterValues(filtered, valorMin, valorMax)
    }
    
    console.log({order})
    console.log({filtered})
    
    filtered = sortValues(filtered, order)

    imprimirDespesas(filtered)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    // if(valor.value.length > 0 && parseInt(valor.value) > 0){
        // return true
    // }
    // return false
    
    // meu jeito de verificar condicoes
    return valor.value && Number(valor.value) > 0
}

function validarTipo(tipo){
    // if(tipo.value !== ""){
    //     return true
    // }
    // return false
    
    // minha validacao
    return tipo.value
}

function validarDescricao(texto){
    // if(texto.value.replace(/ /g,"").length !== 0){
    //     return true
    // }
    // return false
   
    //minha validacao
    return texto.value.replace(/ /g, '')
}

imprimirDespesas(arrDespesas)
imprimirExtrato()