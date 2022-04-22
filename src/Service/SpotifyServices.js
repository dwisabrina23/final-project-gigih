const API_SPOTIFY = 'https://api.spotify.com/v1'

const useGetPlaylists = async (token) => {
  return await fetch(`${API_SPOTIFY}/me/playlists`, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

const useGetTrackPlaylist = async (token, playlistId) => {
  return await fetch(`${API_SPOTIFY}/playlists/${playlistId}/tracks`, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

//POST
const useAddTrackToPlaylist = async (token, newPlaylistId, selectedTracks) => {
  const reqOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uris: selectedTracks,
      position: 0,
    }),
  }
  return await fetch(
    `${API_SPOTIFY}/playlists/${newPlaylistId}/tracks?uris=${selectedTracks}`,
    reqOptions,
  ).then((res) => res.json())
}
export { useGetPlaylists, useGetTrackPlaylist, useAddTrackToPlaylist }
