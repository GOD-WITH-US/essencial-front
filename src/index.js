// == Import dépendances 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


// == Import Composants
import App from './App';

// data, styles et utilitaires
import './styles/index.scss';


// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  <App />
</BrowserRouter>

);

