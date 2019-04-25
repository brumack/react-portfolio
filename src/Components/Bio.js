import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import Job from './Job'
import School from './School'
import jobs from '../lib/jobs'
import schools from '../lib/schools'
import ProjectModal from './ProjectModal'

export default props => {
  return (
    <Container id='bio' fluid='true' className='bio'>
      <Row className='justify-content-center'>
        <Col md={10} xs={12}>
          <ProjectModal />
          <Card>
            <Card.Body>
              <h1>Bio</h1>
              <hr />
              <Card.Text>
                I'm a self-taught full-stack developer specializing in Javascript and Javascript frameworks.
                When I'm not writing code, I spend my time still probably writing code. I'm a technology enthusiest. I enjoy
                pretty much anything and everything tech. Two areas I'd love to explore in the near-future are machine learning/artificial
                intellegence and blockchain technology. Both of these are going to play a very large role in society as they continue to develop. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={5} xs={12}>
          <Card>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Experience</h4>
                  <hr />
                  {
                    jobs.map(job =>
                      <Job image={job.image}
                        key={job.name}
                        name={job.name}
                        date={job.date}
                        detail={job.detail}
                        description={job.description} />)
                  }
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} xs={12}>
          <Card>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Education</h4>
                  <hr />
                  {
                    schools.map(school =>
                      <School image={school.image}
                        key={school.name}
                        name={school.name}
                        date={school.date}
                        detail={school.detail}
                        description={school.description} />)
                  }
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center' id='contact'>
        <Col md={8} xs={12}>
          <Card className='contact'>
            <Card.Body>
              <h4>Contact</h4>
              <hr />
              <Card.Text>
                <a href='http://bradrumack.com/mailto:brad.rumack@gmail.com?Subject=Portfolio%20Contact'>brad.rumack@gmail.com</a>
                <br />
                <span>480.599.5214</span>
                <br />
                <a href='https://www.instagram.com/angelscitydev/' id='insta' className='social' target='_blank'><i className='fab fa-lg fa-instagram' /></a>
                <a href='https://www.instagram.com/angelscitydev/' id='linked' className='social' target='_blank'><i className='fab fa-lg fa-linkedin' /></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}
