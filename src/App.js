import './App.css'
import HomePage from './Pages/Home'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './Routes/index'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
