import React from 'react';
import ReactDOM from 'react-dom/client';
import eruda from 'eruda/eruda.js'

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

let el = document.createElement('div');
document.body.appendChild(el);

// eruda.init({
//    container:el
// })

eruda.init({
    container: el,
    tool: ['console', 'elements','Resouces','info','Sources']
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
