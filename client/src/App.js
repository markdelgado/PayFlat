
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import Dashboard from './components/Dashboard';
import { useState, useEffect } from 'react';
import TenantLanding from './components/TenantLanding';
import AddProperty from './components/AddProperty'
import Signin from './components/SignIn';
import { useSelector, useDispatch} from 'react-redux';
import { setValue } from './redux/user';
import AddUnits from './components/AddUnits';


function App() {
const [landlord, setLandlord]= useState('') 
const [property, setProperty]= useState('')

const user = useSelector((state) => state.user.value)
const dispatch = useDispatch()
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
    let token = localStorage.getItem("jwt");
    if (token && !user.name) {
      fetch("http://127.0.0.1:3000/profile", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setValue(data))
        });
    }
  }, []);

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
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='add-units' element={<AddUnits/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
