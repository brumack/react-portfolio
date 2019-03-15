import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import projectList from '../lib/projectList'

const Projects = () => {
  return (
    <section style={{ background: '#eeeeee' }}>
      <Container id='projects'
        className='justify-content-center'
      >
        <Row className='justify-content-center'>
          {
            projectList.map(project => {
              return (
                <Col className='justify-content-center'>
                  <Card bg='dark' text='white' style={{ width: '22rem', marginBottom: '1.5rem' }}>
                    <Card.Img style={{ background: 'white' }} variant='top' src={project.image} />
                    <Card.Body style={{ textAlign: 'center' }}>
                      <Card.Title>{project.name}</Card.Title>
                      <Button size='sm' variant='success'
                        style={
                          {
                            color: '#000',
                            borderColor: '#000',
                            height: '40px',
                            width: '40px',
                            marginLeft: '.5rem',
                            borderRadius: '50%'
                          }
                        }
                      >
                        <i className={project.hostIcon} style={{ fontSize: '1.5rem' }} />
                      </Button>
                      {renderPublishedButton(project)}
                      <Button size='sm' variant='primary'
                        style={
                          {
                            borderColor: '#000',
                            height: '40px',
                            width: '40px',
                            marginLeft: '.5rem',
                            borderRadius: '50%'
                          }
                        }
                      >
                        <i class='fas fa-info' style={{ fontSize: '1.5rem' }} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container >
    </section>
  )
}

function renderPublishedButton(project) {
  if (project.live) {
    return (
      <Button size='sm' variant='danger' style={
        {
          color: '#000',
          borderColor: '#000',
          marginLeft: '.5rem',
          height: '40px',
          width: '40px',
          borderRadius: '50%'
        }
      }>
        <i class='fab fa-chrome' style={{ fontSize: '1.5rem' }} />
      </Button>
    )
  }
}

export default Projects
