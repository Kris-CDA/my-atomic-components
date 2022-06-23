import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container: Element | DocumentFragment = document.getElementById('root')!;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
