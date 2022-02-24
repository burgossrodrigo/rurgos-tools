import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProvider } from './state/Context'
import Price from './components/price'


function App() {
  return (
    <AppProvider>
      <div className="App">
        <Price />
      </div>
    </AppProvider>
  );
}

export default App;
