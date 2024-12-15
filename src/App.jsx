import React from 'react'
import './App.css'
import {
  HashRouter as Router,
  Route, Routes
} from "react-router-dom";
import HomePage from './components/main/HomePage';



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