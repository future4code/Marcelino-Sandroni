import React from 'react'
import * as api from 'utils/api'
import ListPlaylists from 'components/ListPlaylists'
import CreatePlaylists from 'components/CreatePlaylists'

class Home extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount() {
    api.pegarTodasPlaylists().then(r => {
        console.log(r)
        this.setState({ playlists: r.result.list }, console.log(this.playlists))
    })
  }

  render () {

    return (
      <div>
        <h1>Hi</h1>
          <ListPlaylists playlist={this.state.playlists} />
          <CreatePlaylist />
      </div>
    );
  }
}

export default Home;
