import React from 'react';
import Head from 'next/head';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Head>
        <title>CRA with Next head for meta data</title>
      </Head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
