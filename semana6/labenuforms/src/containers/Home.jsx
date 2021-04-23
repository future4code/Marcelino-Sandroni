import { Component } from 'react'
import { Header, MainForm } from '../components'
import { app, questions } from '../assets/json'

import GlobalStyle from '../components/styled/Global'
import { defaultTheme } from '../components/styled/ThemeConfig'
import { ThemeProvider } from 'styled-components'
import { Container, FlexBox, TextField } from '../components/styled'


import { _ } from 'underscore'


class Home extends Component {
  state = {
    currentStage: 1,
  }
  
  stageMessage = `${app.stageName} ${this.state.currentStage}`
  filterQuestions = questions[this.state.currentStage - 1]
  nextStage = () => this.setState({ stage: this.stage++ })
    
  
  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
      <Header title={app.title} message={this.stageMessage}></Header>
      <MainForm questions={this.filterQuestions} />

      </Container>
      </ThemeProvider>
    )
  }
}

export default Home