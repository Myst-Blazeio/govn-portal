import React from 'react'
import './App.css'
import {
  HashRouter as Router,
  Route, Routes
} from "react-router-dom";
import HomePage from './components/auth/Homepage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App