//import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import './index.css';
//import { userContext } from './userContext.js';
import { UserProvider } from './userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>
  //<userContext.Provider value={contextValue}>
  //  <App />
  //</userContext.Provider>
  <UserProvider>
    <App />
  </UserProvider>
);
