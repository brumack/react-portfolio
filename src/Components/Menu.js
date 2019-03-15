import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar expand='lg' className='fixed-top'>
      <Navbar.Brand href='#home'><strong>BR</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#bio'>Bio</Nav.Link>
          <Nav.Link target='_blank' href='./Rumack-Resume-2019.pdf'>Resume</Nav.Link>
          <Nav.Link target='_blank' href='https://www.linkedin.com/in/bradleyrumack/'>LinkedIn</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
