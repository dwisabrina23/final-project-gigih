import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
     main: "#025f5f",
     50: "#f0ffff",
     100: "#789685",
     200: "#95F7B1",
     300: "#58C39D",
     400: "#00C597",
     500: "#279081",
     600: "#1e88e5",
     700: "#1976d2",
     800: "#1565c0",
     900: "#00C597"
   }
 }
});
ReactDOM.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
