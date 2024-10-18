import React from 'react'

const TeleBox03 = (props) => {
  return (
    <div className='TeleBox' style={{borderColor: props.border}}>
      <h5>{props.name}</h5>
      <span>{props.color}</span>
    </div>
  )
}

export default TeleBox03
