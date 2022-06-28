import {FocusableRef} from '@react-types/shared';
import React, {ReactElement} from 'react';
import {SpectrumComboBoxProps} from '@react-types/combobox';
import { ComboBox } from '@react-spectrum/combobox';

function EvComboBox<T extends object>(props: SpectrumComboBoxProps<T>, ref: FocusableRef<HTMLElement>) {
    return (
        <ComboBox {...props} ref={ref}></ComboBox>
      );
}

/**
 * ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
const _ComboBox = React.forwardRef(EvComboBox) as <T>(props: SpectrumComboBoxProps<T> & {ref?: FocusableRef<HTMLElement>}) => ReactElement;
export {_ComboBox as EvComboBox};
