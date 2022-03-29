import React from 'react';
import { Footer, Articles, Product, Reviews, OurMission, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <OurMission />
        <Reviews />
        <Product />
        <CTA />
        <Articles />
        <Footer />
    </div>
  )
};

export default App;