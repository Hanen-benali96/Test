import React from 'react'
import {NavDropdown, Nav,Navbar,Container} from 'react-bootstrap'
import './navbar.css'
function Nabar() {
  return ( 
    <div >
  <Navbar bg="dark" variant="dark">
        <Container className='navbar-nav'>
          
          <Nav className="me-auto">
            <Nav.Link href="#">SO FUNKTIONIERT'S</Nav.Link>
            <Nav.Link href="#features">SONDERANGEBOTE</Nav.Link>
            <NavDropdown title="MEIN BERIECH"  id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">My published jokes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My saved jokes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Account information</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Publish new joke
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default Nabar