import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis"

const appId = process.env.REACT_APP_APP_ID
const serverUrl = process.env.REACT_APP_MORALIS_SERVER

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
