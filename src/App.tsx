import React from 'react';
import {Button} from './lib/button';

// import { MyButton } from '../dist/es/index.js';

/**
 * App
 * @returns
 */
function App(): JSX.Element {

  return (
    <div className="App">
      <Button variant={'primary'}>Hello</Button>
    </div>
  );
}

export default App;
