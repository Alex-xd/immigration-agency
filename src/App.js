import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProgramSearch from './components/ProgramSearch';
import ProgramThemes from './components/ProgramThemes';
import Services from './components/Services';
import DrivingSuccess from './components/DrivingSuccess';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProgramSearch />
      <ProgramThemes />
      <Services />
      <DrivingSuccess />
      <Footer />
    </div>
  );
}

export default App;