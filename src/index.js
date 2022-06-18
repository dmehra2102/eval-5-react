import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProviderWrapper } from './contexts/CartContext';
import { AuthProviderWrapper } from './contexts/AuthContext';
import {BrowserRouter} from "react-router-dom";
import { reducer, state } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProviderWrapper>
    <CartProviderWrapper reducer={reducer} state={state}>
    <App />
    </CartProviderWrapper>
    </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
