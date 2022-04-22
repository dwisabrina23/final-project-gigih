import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { setUser } from '../../Redux/Slice/AuthSlice'
import './Login.css'
import { Button, Box } from '@chakra-ui/react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const handleLogin = (e) => {
    e.preventDefault()
    var stateKey = 'spotify_auth_state'
    var CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    var REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/'

    var state = uuidv4()

    localStorage.setItem(stateKey, state)
    var scope =
      'user-read-private user-read-email playlist-modify-private playlist-read-private'

    var url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += '&client_id=' + encodeURIComponent(CLIENT_ID)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URL_AFTER_LOGIN)
    url += '&state=' + encodeURIComponent(state)

    window.location = url
  }

  const handleGetProfile = async (token) => {
    let result
    try {
      result = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const userData = {
        id: result.data.id,
        display_name: result.data.display_name,
        image: result.data.images[0].url,
        email: result.data.email,
      }
      dispatch(setUser(userData))
    } catch (err) {
      console.error(err)
    } finally {
      navigate('/home')
    }
  }

  if (token) {
    handleGetProfile(token)
  }

  return (
    <div className="login-container">
      <Navbar />
      <section
        className="h-100 w-100"
        style={{ boxSizing: 'border-box', backgroundColor: '#000000' }}
      >
        <div className="header-4-4 container-xxl mx-auto p-0 position-relative">
          <div>
            <div className="mx-auto d-flex flex-lg-row flex-column hero">
              {/* Left Column */}
              <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
                <p className="text-caption">GIGIH 2.0 Final Project</p>
                <h1 className="title-text-big text-white">
                  SPOTIFY
                  <br className="d-lg-block d-none" />
                  Playlist maker
                </h1>
                <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                  <Button colorScheme="primary" onClick={(e) => handleLogin(e)}>
                    Login with spotify
                  </Button>
                  <Button colorScheme="primary" variant='outline'>
                    Link to Project
                  </Button>
                </div>
              </div>
              {/* Right Column */}
              <div className="right-column text-center d-flex justify-content-lg-end justify-content-center pe-0">
                <img
                  id="img-fluid"
                  className="h-auto mw-100"
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header4/Header-4-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Box bg="green.50" w="100%" h="calc(100vh)" top="0" bottom="0">
        <Button colorScheme="primary" onClick={(e) => handleLogin(e)}>
          Login with spotify
        </Button>
      </Box> */}
      <Footer />
    </div>
  )
}

export default Login
