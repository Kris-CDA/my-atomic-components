import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container: Element | DocumentFragment = document.getElementById('root')!;

ReactDOM.createRoot(container).render(<App />);
