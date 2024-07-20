import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='p-3 px-5 m-2 bg-gray-100 rounded-lg'>{props.name}</button>
        
    </div>
  )
}

export default Button