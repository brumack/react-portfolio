import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'

const Hero = () => {
  return (
    <Jumbotron id='home'>
      <Row className='justify-content-center align-items-center headline'>
        <Col lg='12'>
          <h1>Bradley Rumack</h1>
          <p>Freelance Full-Stack Developer</p>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default Hero
