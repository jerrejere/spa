import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import About from './About';
import Home from './Home';
import  Waiters from './spa';
import Form from './Form';
import NavBar from './NavBar';
import Contact from './Contact';
import "./App.css"



function App() {
  
  return (
    <div className='oga'>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/waiters' element={<Waiters/>}/>
        <Route exact path='/contact' element={<Contact/>} />
        
         
      </Routes>
      
    </div>
  );
}

export default App;