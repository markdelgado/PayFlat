
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
import EditUnit from './components/EditUnit';


function App() {
const [landlord, setLandlord]= useState('') 
const [property, setProperty]= useState('')
const [submitProp, setSubmitProp] = useState("{}")
const [addUnit, setAddUnit] = useState('')

const [patchUnit, setPatchUnit]= useState('')

const user = useSelector((state) => state.user.value)
const dispatch = useDispatch()


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

//



  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='' element={<payment/>}/>
          <Route path='/dashboard' element={<Dashboard setPatchUnit={setPatchUnit} landlord={landlord} property={property} setAddUnit={setAddUnit} setSubmitProp={setSubmitProp} />}/>
          <Route path='/tenant-landing' element={<TenantLanding />}/>
          <Route path='/add-property' element={<AddProperty landlord={landlord} setSubmitProp={setSubmitProp}  submitProp={submitProp}/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/add-units' element={<AddUnits submitProp={submitProp} addUnit={addUnit}/>}/>
          <Route path='/edit-unit' element={<EditUnit patchUnit={patchUnit} />}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
