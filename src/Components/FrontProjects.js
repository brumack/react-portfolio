import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import projectList from '../lib/projectList'

export default class FrontProjects extends React.Component {
  state = { projects: [] }

  componentDidMount() {
    this.setState({ projects: this.getProjects() })
  }

  getProjects = () => projectList.filter(project => project.type === 'front')

  moveLeft = () => {
    const projects = this.state.projects
    projects.push(projects.shift())
    this.setState({ projects })
  }

  moveRight = () => {
    const projects = this.state.projects
    projects.unshift(projects.pop())
    this.setState({ projects })
  }

  renderProjects = () => {
    return this.state.projects.map((project, i) => {
      return (
        <Col>
          <Card text='white'
            style={{
              width: '22rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
            <Card.Img src={project.image} onClick={() => this.setState({ [project.name]: true })} className={i === 1 ? 'middle' : ''} />
          </Card>
        </Col>
      )
    }).slice(0, 3)
  }

  render() {
    return (
      <Row style={{ flexWrap: 'nowrap' }}>
        <Col lg={1}>
          <i class='fa fa-caret-left' onClick={this.moveLeft} style={{ width: '100%', textAlign: 'center' }} />
        </Col>
        {this.renderProjects()}
        <Col lg={1}>
          <i class='fa fa-caret-right' onClick={this.moveRight} style={{ width: '100%', textAlign: 'center' }} />
        </Col>
      </Row>
    )
  }
}
