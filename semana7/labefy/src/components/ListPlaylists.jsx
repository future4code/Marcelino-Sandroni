import { useState, useEffect } from 'react'
import * as api from 'utils/api'

export const ListPlaylists = (props) => {
  const [playlist, setPlaylist] = useState([])
  
  useEffect(() => {
    api.getPlaylists().then(r => {
      if (r === -1) {
        console.warn(
          `Erro estranho: ${r.status}-${r.statusText}-${r.data}`
        )
        return
      }
      r.data && setPlaylist(r.data.result.list)
    })
  }, [playlist])


    return (
      <div>
        <ul>
          {playlist.map(play => <li key={play.name}>{play.name}</li>)}
        </ul>
        <button onClick={() => props.back(true)}>Volta</button>
        
      </div>
  )
}