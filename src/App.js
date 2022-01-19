import React from "react";
import Jane from "./image/jane-doe-new.jpg";
import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-app">  
      <img src={Jane} alt="Jane Doe image" className="img-jane"/>
      <Header />
      <About />
      <Interests /> 
      <Footer />
    </div>
  );
}

export default App;
