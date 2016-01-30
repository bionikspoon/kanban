import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import './main.css';

persist(alt, storage, 'app');
ReactDom.render(<App />, document.getElementById('app'));
