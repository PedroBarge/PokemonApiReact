import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PokemonContextProvider } from './context/pokemon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
)
