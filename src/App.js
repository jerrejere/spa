import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import About from './About';
import Home from './Home';
import SpaAttendant from './SpaAttendant';
import Form from './Form';
import NavBar from './NavBar';
import Contact from './Contact';
import Customer from './Customer';
import "./App.css"
import Loc from './loc';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <div className='oga'>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/customer' element={<Customer/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/spaAttendant' element={<SpaAttendant/>}/>
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/loc' element={<Loc/>} />
         
      </Routes>
      
    </div>
  );
}

export default App;