import React, {ElementType, ReactElement} from 'react';
import {FocusableRef} from '@react-types/shared';
import {SpectrumButtonProps} from '@react-types/button';
import { Button } from '@react-spectrum/button';

function EvButton<T extends ElementType = 'button'>(props: SpectrumButtonProps<T>, ref: FocusableRef<HTMLElement>) {
  
  return (
    <Button {...props} ref={ref}></Button>
  );
}

/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
let _Button = React.forwardRef(EvButton) as <T extends ElementType = 'button'>(props: SpectrumButtonProps<T> & { ref?: FocusableRef<HTMLElement> }) => ReactElement;
export {_Button as EvButton};
