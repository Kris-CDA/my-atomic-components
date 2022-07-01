import register from 'preact-custom-element';

import {EvButton} from './Button';

register(EvButton, 'ev-button', ['variant'], { shadow: false });
register(EvButton, 'ev-button-s', ['variant'], { shadow: true });