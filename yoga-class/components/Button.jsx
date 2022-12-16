import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-amber-100 px-5 py-3">
       <h1>{props.name}</h1>
    </button>
  )
}

export default Button