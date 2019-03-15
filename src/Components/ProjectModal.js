import React from 'react'
import { Modal, Carousel } from 'react-bootstrap'

export default props => {
  if (Object.keys(props).length > 0) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id='contained-modal-title-vcenter'
            style={{ fontFamily: 'Righteous' }}>
            {props.project.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {props.project.slideshow.map(slide => {
              return (
                <Carousel.Item key={slide}>
                  <img
                    alt={slide}
                    className='d-block w-100'
                    src={'./images/' + slide}
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
          <p style={{ padding: '10px' }}>{props.project.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ width: '66%' }}>
            {props.project.tech.map(tech => {
              return <span key={props.project.name + props.project.tech}>{tech} | </span>
            })}
          </div>
          <div style={{ width: '33%', textAlign: 'right' }} >
            <a href={props.project.repo} target='_blank'><i className={props.project.hostIcon} /></a>
            {
              renderLiveIcon(props.project)
            }
          </div>

        </Modal.Footer>
      </Modal>
    )
  }
  return null
}

function renderLiveIcon(project) {
  if (project.live) {
    return <a href={project.live} target='_blank' rel='noopener noreferrer'><i class="fas fa-desktop"></i></a>
  }
}
