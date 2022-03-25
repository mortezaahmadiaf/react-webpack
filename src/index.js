import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import _ from 'lodash'
import ReduxProvider from './providers/reduxProvider'

const rootNode = document.getElementById('root');
ReactDOM.render(<ReduxProvider />, rootNode);