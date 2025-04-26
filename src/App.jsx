import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from '../components/LandingPage'


function App() {


  return (
    <>
      <div>
        <Router>
        <LandingPage />
          <Routes>
            <Route path="/" element={""} />
          </Routes>
        </Router>

        </div>
    </>
  )
}

export default App
