import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <Pricing />
      <WhyUs />
    </React.Fragment>
  );
}

export default App;
