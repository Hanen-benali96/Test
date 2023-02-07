import React,{useState,useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import TypesCard from './TypesCard';
import axios from 'axios';
function Types() {
  const [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/categories")
      .then((res) => setCategories(res.data))
      .finally(() => setLoading((loading = false)))
      .catch((err) => console.log(err));
  }, [categories]);
  return (
    <div className='mappedCards'>
      {!loading ? (
        categories.map((cat) => {
          return <TypesCard cat={cat} key={cat} />;
        })
      ) : (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
    </div>
  )
}

export default Types