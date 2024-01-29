import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import GlobaStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobaStyles/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
