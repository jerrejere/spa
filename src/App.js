import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import About from './About';
import Hero from './Hero';
// import "../styles/App.css"
import  Waiters from './Waiters';
import Form from './Form';
import NavBar from './NavBar';
import Footer from "./Footer"
import Contact from './Contact';


function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <Routes>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/waiters' element={<Waiters/>}/>
        <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/' element={<Hero/>}/>
         
      </Routes>
      <Footer />
    </div>
  );
}

export default App;