import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import HomePage from '../Pages/Home'
import Login from '../Pages/Login/Login'

import PlaylistPage from '../Pages/Playlist/PlaylistPage'
import { setToken } from '../Redux/Slice/AuthSlice'
export default function Router() {
  const dispatch = useDispatch()

  let accessToken = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split('&')[0]
    .split('=')[1]

  if (accessToken) {
    dispatch(setToken(accessToken))
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/login" element={<LoginPage/>}></Route> */}
        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <PlaylistPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.login)
  return isLoggedIn ? children : <Navigate to="/" />
}
