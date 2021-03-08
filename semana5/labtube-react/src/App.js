import { Component } from 'react'
import './App.css';

import Header from './components/Header'
import Menu from './components/Menu'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

class App extends Component {

  siteTitle = 'Labtube'
  menuItems = ['Inínio', 'Em alta', 'Inscrições', 'Origianais', 'Histórico']
  videoTitle = 'Título do Video'
  footerMessage = 'Oi eu moro no footer'

  render() { return (
    <div className="tela-inteira">
      <Header title={this.siteTitle}/>
      <main>
        <Menu items={this.menuItems}/>
        <MainContent videoTitle={this.videoTitle}/>
      </main>
      <Footer text={this.footerMessage}/>

    </div>
  )}
}

export default App;
