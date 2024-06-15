import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Fotter';
import About from './component/About';
import Contact from './component/Contact';
import Faq from './component/Faq';
import Listing from './component/Listing';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <section className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/faq" element={<Faq/>}/>
            <Route exact path="/listing" element={<Listing/>}/>
          </Routes>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
