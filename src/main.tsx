import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import WebApp from '@twa-dev/sdk';
import { TableBackground } from './TableBackground.tsx';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TableBackground>
      <App />
    </TableBackground>
  </React.StrictMode>
);
