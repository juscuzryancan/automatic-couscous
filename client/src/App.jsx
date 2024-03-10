import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {

  //TODO: protecting routes that need authentication
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;