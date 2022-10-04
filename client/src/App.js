
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import Dashboard from './components/Dashboard';
import { useState, useEffect } from 'react';
import TenantLanding from './components/TenantLanding';
import AddProperty from './components/AddProperty'

function App() {
const [landlord, setLandlord]= useState('') 
const [property, setProperty]= useState('')

useEffect (() => {
  const getLandlord = async ()  => {
    let req = await fetch(`http://localhost:3000/landlords/1`)
    let res = await req.json()
    // console.log("RES", res)
    setLandlord(res)

  }
  getLandlord()
}, [])

useEffect(() => {
  const getProperty = async () => {
    let req = await fetch(`http://localhost:3000/properties/1`)
    let res = await req.json()
    setProperty(res)
  }
  getProperty()
},[])

//console.log('property',property)

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='' element={<payment/>}/>
          <Route path='/dashboard' element={<Dashboard landlord={landlord} property={property}/>}/>
          <Route path='/tenant-landing' element={<TenantLanding />}/>
          <Route path='/add-property' element={<AddProperty landlord={landlord} />}/>

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
