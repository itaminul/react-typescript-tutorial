import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/layouts/TopNav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dahsbord from './components/layouts/Dashbord';
import Aboutusform from './components/Aboutusform';
import AboutIndex from './components/AboutIndex';
import EditAboutus from './components/EditAboutus';

function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dahsboard' element={<Dahsbord />} />
        <Route path='/aboutindex' element={<AboutIndex />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutusform' element={<About />} />
        <Route path='/editaboutus/:id' element={<EditAboutus />} />
      </Routes>
    </div>
  );
}

export default App;
