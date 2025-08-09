import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'; // If you use a global layout file

function App() {
   const [selectedPage, setSelectedPage] = useState('defaultpage');

  return (
    <div className="app-container">
      <Header setSelectedPage={setSelectedPage} />
      <main className="main-content">
        <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </main>
      <Footer />

     
    </div>
  );
}

export default App;
