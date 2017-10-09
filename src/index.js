import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WeatherComponent from './Weather.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './iconWidget/IconWidget.js';
import NavBar from './Navbar.js';
import App from './App.js';
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
