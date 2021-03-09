import { Component } from 'react'

import Header from './components/Header'
import Menu from './components/Menu'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

//styles
//import './App.css'

function App() {

  const siteTitle = 'Labtube'
  const menuItems = ['Inínio', 'Em alta', 'Inscrições', 'Origianais', 'Histórico']
  const videoTitle = 'Título do Video'
  const footerMessage = 'Oi eu moro no footer'

  return (
    <div className="container">
      <Header title={siteTitle}/>
      <main>
        <Menu items={menuItems}/>
        <MainContent videoTitle={videoTitle}/>
      </main>
      <Footer text={footerMessage}/>

    </div>
  )
}

export default App;
