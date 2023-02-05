import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react'
import  Navbar from './components/Nabar/Nabar'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import { Routes ,Route } from 'react-router-dom';


function App() {
  const [ searchName, setSearchName] = useState("")
  const [jokes,setJokes]=useState([])
useEffect(()=>{
axios.get("https://api.chucknorris.io/jokes/categories")
.then(res=>setJokes(res.data))
.catch(err=>console.log(err))
},[]) 
console.log(jokes)
  return (
  
    <div className="App">
      <Navbar/>
      
    <Home/>
    
       <Main jokes={jokes} />
      <Footer/>
     
    
   
        
    </div>
   
  );
}

export default App;
