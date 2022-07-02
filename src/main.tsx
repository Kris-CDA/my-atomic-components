import React from 'react';
import ReactDOM from 'react-dom/client';

import { render } from 'preact';

import App from './App';

const container: Element | DocumentFragment = document.getElementById('root')!;

//ReactDOM.createRoot(container).render(<App />);

render(<App />, document.getElementById('root') as HTMLElement);
