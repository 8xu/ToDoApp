import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Twemoji } from 'twemoji-react'

ReactDOM.render(
  <React.StrictMode>
    <Twemoji>
      <App/>
    </Twemoji>
  </React.StrictMode>,
  document.getElementById('root')
)
