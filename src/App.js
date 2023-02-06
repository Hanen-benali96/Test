import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react'
import  Navbar from './components/Nabar/Nabar'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useParams } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Categories from './components/categorie/Jokes';
import Jokes from './components/categorie/Jokes';


function App() {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
  axios.get("https://api.chucknorris.io/jokes/categories")
  .then(res=>setCategories(res.data))
  .catch(err=>console.log(err))
  },[]) 
  console.log(categories)

  return (
  
    <div className="App">
      <Navbar/>
      
    <Home />
    <Routes>
       <Route path='/' element={<Main categories={categories}  />}  />
       
       <Route path= '/jokes' element={<Jokes />} />
       </Routes>
      <Footer/>
     
    
   
        
    </div>
   
  );
}

export default App;
