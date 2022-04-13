import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllResults, Home, Result } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/results" element={<AllResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
