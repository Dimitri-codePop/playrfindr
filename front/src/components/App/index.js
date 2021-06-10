// == Import npm
import React from 'react';
// == Import
import NavBar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Footer />
  </div>
);

// == Export
export default App;
