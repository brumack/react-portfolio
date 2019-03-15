import React from 'react'
import Menu from './Menu'
import Hero from './Hero'
import TechBar from './TechBar'
import Projects from './Projects'
import Bio from './Bio'
import { Container } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <Container fluid='true'>
        <Menu />
        <Container fluid='true' className='main'>
          <Hero />
          <TechBar />
          <Projects />
          <Bio />
        </Container>
      </Container>
    )
  }
}

export default App
