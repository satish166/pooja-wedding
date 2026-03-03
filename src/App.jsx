import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Homepage from './components/homepage/homepage';
import Gallery from './components/gallery/gallery';
import MainLayout from './components/layouts/MainLayout';
import NotFound from './components/not-found/not-found';
import ContactUs from './components/contact-us/contact-us';


function App() {

  return (
    <>
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        {/* 404 without Header/Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes> 
  </>
  )
}

export default App
