import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => completa ? 'line-through' : 'none'};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const TaskInput = styled(TextField)`
`

class App extends React.Component {

    state = {
      tarefas: [],
      campoAdicionar: '',
      filtro: ''
    }

  componentDidUpdate() {
    this.salvarTarefa(this.state.tarefas)
  }

  componentDidMount() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasSalvas && this.setState({ tarefas: tarefasSalvas })
  };

  criaTarefa = e => {
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.campoAdicionar,
        completa:false
      }
      
      this.setState({
        tarefas: [...this.state.tarefas, novaTarefa],
        campoAdicionar: ''
      })
    }
  }
  
  salvarTarefa = tarefas => 
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

  selectTarefa = (id) => {
    const novaLista = [...this.state.tarefas]
    novaLista.forEach(item => item.completa = item.id === id && !item.completa)
    
    this.setState({ tarefas: novaLista })
  }
  
  deletarTarefa = id => {
    const novaLista = [...this.state.tarefas]
    
    const posicao = novaLista.findIndex(item => item.id === id)
    novaLista.splice(posicao, 1)
    this.setState({ tarefas: novaLista })
  }

  handleChanges = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Container>
      <Grid />
        <h1>Lista de tarefas</h1>
        <TaskInput
          name='campoAdicionar'
          value={this.state.campoAdicionar}
          onChange={this.handleChanges}
          onKeyDown={this.criaTarefa}
          >
          <button onClick={this.criaTarefa} >
            Adicionar
          </button>
        </TaskInput>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select name='filtro'
          value={this.state.filtro}
          onChange={this.handleChanges}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                  key={tarefa.id}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.deletarTarefa(tarefa.id)}>Excluir</button>
              </div>
            )
          })}
        </TarefaList>
      </Container>
    )
  }
}

export default App