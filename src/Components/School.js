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
        {props.detail}
      </p>
      <p>{props.description}</p>
    </React.Fragment>
  )
}