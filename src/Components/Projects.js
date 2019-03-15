import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import projectList from '../lib/projectList'
import ProjectsModal from './ProjectModal'
import './Projects.css'

class Projects extends React.Component {

  state = {}

  componentDidMount() {
    projectList.forEach(project => {
      this.setState({ [project.name]: false })
    })
  }

  modalClose = project => this.setState({ [project.name]: false })

  render() {
    return (
      <section>
        <Container id='projects'
          className='justify-content-center'
        >
          <Row className='justify-content-center'>
            {
              projectList.map(project => {
                return (
                  <Col className='justify-content-center' key={project.name} >
                    <Card text='white'
                      style={{
                        width: '22rem',
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                      }}>
                      <Card.Img src={project.image} onClick={() => this.setState({ [project.name]: true })} />
                      <ProjectsModal
                        show={this.state[project.name]}
                        onHide={() => this.modalClose(project)}
                        project={project}
                      />
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
}

export default Projects
