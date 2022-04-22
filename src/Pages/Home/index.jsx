import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'

//components
import PageTitle from '../../Components/Title/PageTitle'
import SongCard from '../../Components/SongCard/SongCard'
import SearchButton from '../../Components/Search/SearchButton'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Navbar from '../../Components/Navbar/Navbar'
import ModalAddPlaylist from '../../Components/Modal/ModalAddPlaylist';

//redux
import { useSelector, useDispatch } from 'react-redux'
import { addSong, removeSong } from '../../Redux/Slice/SongSlice'

//utils
import useDocumentTitle from '../../Utils/UseDocumentTitle'

function HomePage() {
  useDocumentTitle('Spoticlone | Home')
  const [search, setSearch] = useState('')
  const [searchRes, setSearchRes] = useState([])
  const dispatch = useDispatch()
  const accToken = useSelector((state) => state.auth.token)

  const handleSearchSong = async (keyword) => {
    let result
    try {
      result = await axios.get(`https://api.spotify.com/v1/search`, {
        //...data
        params: {
          q: keyword,
          type: 'track',
        },
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      })
      setSearchRes(result.data.tracks)
    } catch (err) {
      console.error(err)
    }
  }

  const handleKeyPress = (e) => {
    const value = e.target.value
    setSearch(value)
    if (e.keyCode === 13) {
      const keyword = encodeURI(value.trim())
      handleSearchSong(keyword)
      e.preventDefault()
      e.stopPropagation()
    } else {
      return
    }
  }

  const selectedSongList = useSelector((state) => state.song.selected)

  const checkSelected = (id) => {
    return selectedSongList.includes(id)
  }

  const handleSelect = (id) => {
    const isSelected = checkSelected(id)

    if (!isSelected) {
      dispatch(addSong(id))
    } else {
      dispatch(removeSong(id))
    }
  }

  const title = `Search result for '${search}':`

  return (
    <>
      <Navbar />
      <div className="row home-wrapper">
        <div className="col-md-2 sidemenu p-3">
          <SideMenu />
        </div>
        <div className="col-md-10 song-section">
          <SearchButton
            setSearch={setSearch}
            search={search}
            handleKeyPress={handleKeyPress}
          />
          {selectedSongList.length !== 0 ? <ModalAddPlaylist /> : <></>}
          <hr />
          <PageTitle title={title} />
          <div className="row">
            {searchRes?.items?.map((song, idx) => (
              <SongCard
                data={song}
                key={idx}
                handleSelect={handleSelect}
                isSelected={checkSelected(song.uri)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
