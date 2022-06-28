import { Item } from '@react-spectrum/combobox';
import { Provider } from '@react-spectrum/provider';
import { theme } from '@react-spectrum/theme-default';
import React from 'react';
import { EvComboBox } from './lib/combobox';
// import { MyButton } from '../dist/es/index.js';

/**
 * App
 * @returns
 */
function App(): JSX.Element {

  return (
    <div className="App">
      <Provider theme={theme}>
      <EvComboBox label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </EvComboBox>
      </Provider>
    </div>
  );
}

export default App;
