import React from 'react'
import './cardService.css'

const CardService = ({image,title,description}) => {
  return (
    <div className='card-element'>
        {image}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default CardService
