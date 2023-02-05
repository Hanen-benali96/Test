import React from 'react'
import bitmap2 from '../../assets/bitmap2.png'
import search  from '../../assets/search.png'
import {Button,Form} from 'react-bootstrap'
import './home.css'

function Home({titleSearch}) {
  return (
    <section className='home'>
    <div className='overlay'></div>
   
    <div className='homeContent container'>
      <div className='  textDiv'>
        <h1  className='homeTitle'>THE JOKE BIBLE</h1>
        <h5 className='smallText' >
          Daily Laughs for you and yours
        </h5>
        <Form className="search ">
            <Form.Control
              type="search"
              placeholder="How can we make you laugh today?"
              className="me-2 "
              aria-label="Search"
              /> <img src={search} />
          </Form>
      </div>


    </div>
    </section>
  )
}

export default Home