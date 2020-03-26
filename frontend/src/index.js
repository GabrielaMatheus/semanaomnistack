import React from 'react';
import ReactDOM from 'react-dom'; //integração do react com o navegador/dom (arvore de elementos)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

