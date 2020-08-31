import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Header/Header'
import './Components/Footer/Footer.css'
import './Components/Sidebar/Sidebar.css'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
