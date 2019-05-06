import React from 'react'
import { Image } from 'react-bootstrap'

export default props => {
  return (
    <React.Fragment>
      <Image src={props.image} />
      <h5>{props.name}</h5>
      <p>
        {props.date}
        <br />
        {renderDetails(props.detail)}
      </p>
    </React.Fragment>
  )
}

function renderDetails (details) {
  return details.map(detail => {
    if (detail.type === 'link') {
      return (
        <React.Fragment>
          <a href={detail.url} target='_blank' rel="noopener noreferrer">{detail.content}</a>
          <br />
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {detail.content}
        <br />
      </React.Fragment>
    )
  })
}