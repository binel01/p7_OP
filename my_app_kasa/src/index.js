import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importation du Routeur
import App from './App';
import { useEffect } from 'react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//On donne un titre à l'onglet
function useTitle(title) {
    useEffect(() => {
      document.title = `Kasa | ${title}`;
    });
  }
  
  export default useTitle;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
