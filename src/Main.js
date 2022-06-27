import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './homepage_components/homepage_app';
import Aboutpage from './about_components/about_app';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/about' element={<Aboutpage />} />
    </Routes>
  );
}

export default Main;
