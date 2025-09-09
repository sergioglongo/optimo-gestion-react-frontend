import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import ThemeCustomization from './themes'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  // Prepare MSW in a Service Worker
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    // Launched mock server, and then start client React app
    .then(() =>
      root.render(
        <ThemeCustomization>
          <App />
        </ThemeCustomization>,
      ),
    )
} else {
  // Production
  root.render(
    <ThemeCustomization>
      <App />
    </ThemeCustomization>,
  )
}
