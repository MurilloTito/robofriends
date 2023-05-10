import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

// . - mesma pasta
// .. - volta duas partas

// usando esse codigo, precisa importar o 'react-dom/client' ao inves do 'react-dom' apenas
/*const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // o StrictMode serve para ajudar o dev a detectar certos erros especificos que
  // podem vir a acontecer no codigo
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)*/

// so pode renderizar uma coisa(nesse caso, é um div com outros elementos dentro)

              //mounting the App that starts in index.html
ReactDOM.render(<App></App>, 
                document.getElementById("root"));


reportWebVitals();
