import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react'
import  Navbar from './components/Nabar/Nabar'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useParams } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Jokes from './components/jokes/Jokes';
import Social from './components/social/Social';
import Types from './components/Types/Types';


function App() {
  

  return (
  
    <div className="App">
      <Navbar/>
      
    <Home />
    <Routes>
       <Route path='/' element={<Main   />}  />
       <Route path= '/types' element={<Types/>} />
       <Route path={`/jokes/:cat`} element={<Jokes />} />
       <Route path= 'social' element={<Social/>} />
       
       </Routes>
      <Footer/>
     
    
   
        
    </div>
   
  );
}

export default App;
