import React from 'react';
import { EvButton } from './lib/button';
// import { MyButton } from '../dist/es/index.js';

/**
 * App
 * @returns
 */
function App(): JSX.Element {

  return (
    <div className="App">
      <EvButton variant={'primary'} UNSAFE_className="zaza">Hello</EvButton>
    </div>
  );
}

export default App;
