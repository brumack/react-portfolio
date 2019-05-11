import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar expand='lg' className='fixed-top'>
      <Navbar.Brand href='#home' onClick={scrollTo} ><strong>BR</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#projects' onClick={scrollTo}>Projects</Nav.Link>
          <Nav.Link href='#bio' onClick={scrollTo}>Bio</Nav.Link>
          <Nav.Link target='_blank' href='./Rumack-Resume-2019.pdf'>Resume</Nav.Link>
          <Nav.Link target='_blank' href='https://github.com/brumack'>Github</Nav.Link>
          <Nav.Link target='_blank' href='https://www.linkedin.com/in/bradleyrumack/'>LinkedIn</Nav.Link>
          <Nav.Link target='_blank' href='https://www.instagram.com/firecitydev/'>Insta</Nav.Link>
          <Nav.Link href='#contact' onClick={scrollTo}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const scrollTo = e => {
  e.preventDefault()
  const linkTarget = e.currentTarget.getAttribute('href')
  const destination = document.querySelector(linkTarget)

  window.scrollTo({
    top: destination.offsetTop - destination.scrollTop + destination.clientTop,
    behavior: 'smooth'
  })

}

export default Menu
