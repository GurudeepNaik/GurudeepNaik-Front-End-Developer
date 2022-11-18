import React from 'react'
import './App.css';
import {APIContextProvder}from './context/usecontext.js'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Home/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <APIContextProvder>
        <Routes>
          <Route element={<Landing/>} path="/" />
        </Routes>
      </APIContextProvder>
    </BrowserRouter>
  )
}

export default App