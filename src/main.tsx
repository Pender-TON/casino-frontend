import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebApp from '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import smoothscroll from 'smoothscroll-polyfill';

import { App } from './App/index.tsx';

WebApp.ready();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

// for safari <3
smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl="https://pender-lwydwhnl2-pender-mvp.vercel.app/tonconnect-manifest.json">
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  </TonConnectUIProvider>
);
