import React from 'react'
import {APIContextProvder}from './context/usecontext.js'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Home/Landing';
import Rocket from './components/Rocket/Rocket';
import Capsule from './components/Capsule/Capsule';
import Crew from './components/Crew/Crew';

const App = () => {
  return (
    <BrowserRouter>
      <APIContextProvder>
        <Routes>
          <Route element={<Landing/>} path="/" />
          <Route element={<Rocket/>} path="/rocket" />
          <Route element={<Capsule/>} path="/capsule" />
          <Route element={<Crew/>} path="/crew" />
        </Routes>
      </APIContextProvder>
    </BrowserRouter>
  )
}

export default App