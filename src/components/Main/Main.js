import React from 'react'
import './main.css'
import flech from '../../assets/flech.png'
import flesh from '../../assets/flesh.png'
import zigzag from '../../assets/zigzag.png'
import  {Card} from 'react-bootstrap'
import { Dropdown,DropdownButton, ButtonGroup } from 'react-bootstrap'
import { Link, NavLink, useParams } from 'react-router-dom'

function Main() {

  return (
    <section>
    <div className='btns'>
      <div>
    <button className='adult'>ADULT JOKES</button> 
    <button className='dad'>DAD JOKES</button> 
    <button className='christ'>CHRISTMAS JOKES</button> 
    <button className='job'>JOB JOKES</button> 
    <button className='birthday'>BIRTHDAY JOKES</button>
    </div>
    <div className='btn' >
    <button className='social'>SOCIAL JOKES</button> 
    <button className='puns'>PUNS JOKES</button>
    <Link to='/types'> <button className='view'>VIEW ALL</button>
      </Link>
      
     
      
    </div>
    </div>
     <div>
    
     <Link to='/social'> <h5 className='joke'> SOCIAL JAKES</h5>  </Link>
     </div>
     <div className='mainCard'>
     
        <div  className='card-1' >
     <Card  style={{ width: '25rem' }}  >
      <Card.Body>
        <Card.Title className='lawyer-joke'> <img src={zigzag} /> lawyer-joke</Card.Title>
        
        <Card.Text className='A-lawer-dies-and-go' >
        A lawyer dies and goes to heaven."There must be some mistake,"the lawyer argues.i m too young to die. Fifty five? says saint peter.No,according to out calculations you re 82 How d you get that the lawyer askes Answers St Pater We added up your time sheets
        </Card.Text>
        <Card.Link href="#" className='see-stats'>SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className='doctor-joke'> <img src={zigzag} />DOCTOR JOKE</Card.Title>
        
        <Card.Text className='never-had'>
        Id never had surgery , and i was nervous. This is a very simple noninvasive procedure , the anesthesiologist reassured me.I fel better, util...Heck he contined,you have a better chance of dying from the anesthesia than surgery itsef
        </Card.Text>
        <Card.Link href="#" className='see-stats'>SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className='lawyer-joke'> <img src={zigzag} /> BISNESS JOKE </Card.Title>
        
        <Card.Text className='never-had' >
        I went to my boss at work and said,"I need a raise.Three other companies are after me He said,Really? Which other companies are after you? I said The electric company,the gas company and the phone company
        </Card.Text>
        <Card.Link href="#" className='see-stats'>SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
   </div>
   <div  className='card-1' >
     <Card  style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className='lawyer-joke'> <img src={zigzag} /> POLICE JOKE </Card.Title>
        
        <Card.Text className='never-had'>
        an officer conducting speed enforcement stop a young man for traveling in excess of 40mph overthe speed limit. The officier approaches the drive and says, "Well,40 over... Ibeen waiting for you to come along all day."Without pause,the young man replies,"I got here as fast as i could!"
       </Card.Text>
        <Card.Link href="#" className='see-stats'>SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className='doctor-joke'> <img src={zigzag} />DOCTOR JOKE</Card.Title>
        
        <Card.Text className='never-had'>
        An officier observes a women standing in the middle of the street.he approaches her and asks,"Are you okay?"The women replies, "Yes, but how to do i get to the hospital?"The officier replies,"Just keep standig there."
        </Card.Text>
        <Card.Link href="#" className='see-stats' >SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className='lawyer-joke'> <img src={zigzag} /> BOSS JOKE</Card.Title>
        
        <Card.Text className='never-had'  >
        A lawyer dies and goes to heaven."There must be some mistake,"the lawyer argues.i m too young to die. Fifty five? says saint peter.No,according to out calculations you re 82 How d you get that the lawyer askes Answers St Pater We added up your time sheets
        </Card.Text>
        <Card.Link href="#" className='see-stats'>SEE STATS <img src={flesh} /></Card.Link>
      </Card.Body>
    </Card> 
    
   </div>
<div>
   <span className='views'> VIEW MORE <img src={flech} /> </span>
    </div>
    </div>
  

  
    </section>
  )
}

export default Main