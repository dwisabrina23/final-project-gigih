import React, { useEffect, useState } from 'react'
import { useGetPlaylists } from '../../Service/SpotifyServices'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setPlaylist } from '../../Redux/Slice/SongSlice'

//dcomponents
import PlaylistItem from './PlaylistItem';

function Playlist() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token);
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    useGetPlaylists(token).then((data) =>{
      console.log(data)
      setPlaylists(data.items)
      dispatch(setPlaylist(data.items))},
    )
  }, [])

  return (
    <div className="row p-3">
      {playlists?.map((playlist) => (
        <PlaylistItem playlist={playlist} key={playlist.id}/>
      ))}
    </div>
  )
}

export default Playlist
