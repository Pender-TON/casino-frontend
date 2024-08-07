import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import smoothscroll from 'smoothscroll-polyfill'

import { App } from './App/index.tsx'
import { BrowserRouter } from 'react-router-dom'

WebApp.ready()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
})

// for safari <3
smoothscroll.polyfill()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TonConnectUIProvider manifestUrl="https://pender-tma.vercel.app/tonconnect-manifest.json">
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </TonConnectUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
