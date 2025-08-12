import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'; // If you use a global layout file
// import "./i18n";
// import { useTranslation } from "react-i18next";



function App() {
   const [selectedPage, setSelectedPage] = useState('defaultpage');


  
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };


  return (
    <div className="app-container">
      <Header setSelectedPage={setSelectedPage} />
      <main className="main-content">
        <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage}   />
      </main>
      <Footer />

     
    </div>
  );
}

export default App;
