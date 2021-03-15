import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NumberContextProvider } from './context/numberContext'
import { HistoryContextProvider } from './context/historyContext'
import { ThemeContextProvider } from './context/themeContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeContextProvider >
    <HistoryContextProvider>
      <NumberContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </NumberContextProvider>
    </HistoryContextProvider>
  </ThemeContextProvider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
