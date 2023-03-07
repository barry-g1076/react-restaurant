import React from "react";
import Header from './components/Header';
import About from './components/About';
import NavIcon from './components/NavIcon';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins bg-back">
      <Header/>
      <NavIcon/>
      <Home/>
      <About/>
      <Recipe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
