import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import icons from '../lib/icons'

const TechBar = () => {
  return (
    <Container className='stack'>
      <Row>
        {
          icons.map(icon => {
            return (
              <Col key={icon}>
                <i className={icon} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default TechBar
