import React from 'react'
import { Navbar ,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './google-drive.png';

export default function NavbarComponent() {
  return (
   <Navbar bg="light" expand="sm">
   <img src={logo} style={{height: "25px", width: "25px", marginLeft: "10px" , marginRight: "10px"}}/>
       <Navbar.Brand as={Link} to="/" style={{marginRight : "200px"}}>
           WDS Drive
       </Navbar.Brand>
       <Nav>
           {/* <Nav.Link as={Link} to="/user"> */}
               {/* Profile */}
           {/* </Nav.Link> */}
           <div class="d-grid gap-5 d-md-flex justify-content-md-end">
           <a class="btn btn-outline-secondary" href="/" role="button">Home</a>
           <a class="btn btn-outline-secondary" href="/" role="button">About Us</a>
           <a class="btn btn-outline-secondary" href="/" role="button">Contact Us</a>
           <a class="btn btn-outline-secondary" href="/user" role="button">Profile</a>
           </div>
       </Nav>
   </Navbar>
  )
}
