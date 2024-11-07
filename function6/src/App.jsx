import { useState } from 'react'
import './App.css'
import about from './assets/Components/about'
import home from './assets/Components/home'
import Nav from './assets/Components/Nav'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' Component={home}/>
      <Route path='/about' Component={about}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App