import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from "react-to-webcomponent";

import PropTypes from 'prop-types';

import {Button} from './Button';
  
customElements.define("web-greeting", reactToWebComponent(Button, React, ReactDOM) );

