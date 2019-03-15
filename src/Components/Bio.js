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
                I'm a <em>self-taught</em> full-stack web developer, specializing in Javascript and Javascript frameworks.
                . Originally from Phoenix, AZ, I've called California home for a total of 4 years; Long Beach for 2 and a half
                years beginning in 2010, and now Pasadena as of October of 2017. While I enjoy all aspects of development, I highly
                enjoy working on the back-end, and creating and consuming APIs.
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
      <Row className='justify-content-center'>
        <Col md={8} xs={12}>
          <Card id='contact' className='contact'>
            <Card.Body>
              <h4>Contact</h4>
              <hr />
              <Card.Text>
                <a href='http://bradrumack.com/mailto:brad.rumack@gmail.com?Subject=Portfolio%20Contact'>brad.rumack@gmail.com</a>
                <br />
                <span>480.599.5214</span>
                <br />
                <a href='https://www.linkedin.com/in/bradleyrumack/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}
