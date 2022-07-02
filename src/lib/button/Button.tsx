import React, {ElementType, ReactElement} from 'react';
import {FocusableRef} from '@react-types/shared';
import {SpectrumButtonProps} from '@react-types/button';
import { Button, Provider, lightTheme } from '@adobe/react-spectrum';

function EvButton<T extends ElementType = 'button'>(props: SpectrumButtonProps<T>, ref: FocusableRef<HTMLElement>): JSX.Element {

  return (
    <Provider theme={lightTheme} UNSAFE_className='ev-provider'>
      <Button {...props} ref={ref} UNSAFE_className='ev-button'></Button>
    </Provider>
  );
}

/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
const _Button: any = React.forwardRef(EvButton) as <T extends ElementType = 'button'>(props: SpectrumButtonProps<T> & { ref?: FocusableRef<HTMLElement> }) => ReactElement;
export {_Button as EvButton};
