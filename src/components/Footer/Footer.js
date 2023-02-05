import React from 'react'
import { Link } from 'react-router-dom'
import  flesh from '../../assets/flesh.png'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <h6 className='got-joke'>GOT JOKES?GET PAID  <br/>FOR SUBMITTING</h6>
     < Link to='/' >  <span className='submit'> SUBMIT JOKE <img className='flech' src={flesh} /> </span></Link>
    </div>
  )
}

export default Footer