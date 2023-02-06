import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './jokes.css'
import hand  from '../../assets/hand.png'
import hand1 from '../../assets/hand1.png'
import arrow1 from '../../assets/arrow1.png'
import arrow from '../../assets/arrow.png'
function Jokes() {
  return (
     <section>
      <div>
     <div className='granny'>
      
       <Card  style={{ width: '40rem' }}   >
       <div className='scial-trending' >
        <span className='sociale' >SOCIAL JAKES </span>
        <span className='trending'> TRENDING</span> </div>
      <Card.Body>
        <h4 className='the-granny'> The Granny Joke  </h4>
        
        <Card.Text className=' An-old-grandm' >
       An old grandma brings a bus driver a bag of peanuts every day 
       First the bus driver enjoyed the peanuts but after a week of eating them he asked: "Please granny ,don't bring me peanuts anymore.Have them yourself"<br/>
       <br/> The granny answers: "You know , I don't have teeth anymore .I just prefer to suck the chocolate around them."
               </Card.Text>
      </Card.Body>
    </Card> 
    </div>
    <div className='handel'> <img className='hand' src={hand} /> <img className='hand1'  src={hand1} /> </div>
    
    <div className='nomber' > <span className='like' > 328 </span>
     <span> 98 </span>
    </div>
    <div className='btn-joke'> <button className='prev'> <img src={arrow1} /> PREV. JOKE</button>
    <button className='prev'>  NEXT JOKE <img src={arrow} />  </button></div>
    </div>
    </section> 

  )
}

export default Jokes