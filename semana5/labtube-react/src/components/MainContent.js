import { Component } from 'react'

class MainContent extends Component {
  constructor({videoTitle}) {
    super(videoTitle)
    this.title = videoTitle
  }
  
  reproduzVideo = video => alert("O vídeo está sendo reproduzido")

  render() { return (
      <section class="painel-de-videos">
        <div class="box-pagina-principal media1"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=1 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media2"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=2 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media3"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=3 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media4"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=4 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media5"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=5 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media6"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=6 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media7"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=7 " alt="" />
          <h4>{this.title}</h4>
        </div>
        <div class="box-pagina-principal media8"   onClick="this.reproduzVideo">
          <img src="https://picsum.photos/400/400?a=8 " alt="" />
          <h4>{this.title}</h4>
        </div>
      </section>
  )}
}

export default MainContent