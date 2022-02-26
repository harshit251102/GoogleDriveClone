import React from 'react'
import { Navbar ,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
   <Navbar style={{marginLeft: "100px"}} bg="light" expand="sm">
       <Navbar.Brand as={Link} to="/">
           WDS Drive
       </Navbar.Brand>
       <Nav style={{marginLeft: "500px"}}>
           <Nav.Link as={Link} to="/user">
               Profile
           </Nav.Link>
       </Nav>
   </Navbar>
  )
}
