import React, {ElementType, ReactElement} from 'react';
import {useFocusableRef} from '@react-spectrum/utils';
import {FocusableRef} from '@react-types/shared';
import {AriaBaseButtonProps, ButtonProps, LinkButtonProps} from '@react-types/button';
import {FocusRing} from '@react-aria/focus';
import {mergeProps} from '@react-aria/utils';
import {useButton} from '@react-aria/button';
import {useHover} from '@react-aria/interactions';
import {Text} from '@react-spectrum/text';
import classNames from 'classnames';

export interface EvButtonProps<T extends ElementType = 'button'> extends AriaBaseButtonProps, ButtonProps, LinkButtonProps<T> {
  /** The [visual style] of the button. */
  variant: 'primary' | 'secondary' | 'default',
  className?: string
}

function Button<T extends ElementType = 'button'>(props: EvButtonProps<T>, ref: FocusableRef<HTMLElement>): JSX.Element {
  let {
    elementType: ElementType = 'button',
    children,
    variant,
    isDisabled,
    autoFocus
  } = props;
  const domRef = useFocusableRef(ref);
  const {buttonProps, isPressed} = useButton(props, domRef);
  const {hoverProps, isHovered} = useHover({isDisabled});
  const buttonVariant = variant || 'default';

  return (
    <FocusRing focusRingClass={'focus-ring'} autoFocus={autoFocus}>
      <ElementType
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={
          classNames(
            'btn',
            `btn-${buttonVariant}`,
            {
              'is-disabled': isDisabled,
              'is-active': isPressed,
              'is-hovered': isHovered
            },
            props.className
          )
        }>
        {typeof children === 'string'
          ? <Text>{children}</Text>
          : children}
      </ElementType>
    </FocusRing>
  );
}

/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
const _Button = React.forwardRef(Button) as <T extends ElementType = 'button'>(props: EvButtonProps<T> & {ref?: FocusableRef<HTMLElement>}) => ReactElement;
export {_Button as Button};