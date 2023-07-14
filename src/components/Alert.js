import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&<div className='alertmsg'>
      <b>{props.alert.type}</b>: {props.alert.msg}
    </div>
  )
}
