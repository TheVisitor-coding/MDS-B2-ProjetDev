import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../services/cartUtils'
import '../styles/CardStyle.css'
// import '../styles/Card.js'

const IMAGE_URL = 'http://localhost:1337'

function Card ({ item, mode }) {
  const attributes = item.attributes
  let imageUrl = ''
  if (attributes.image.data) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'https://via.placeholder.com/300x150'
  }

  const navigate = useNavigate()

  const handleClick = () => {
    if (mode === 'restaurant') {
      navigate('/restaurants/' + item.id)
    } else {
      addToCart(item)
    }
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={imageUrl} />
      </div>
      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.description}</p>
      </div>
      <div className='card-footer'>
        <button onClick={handleClick}>{mode === 'restaurant' ? 'Voir le restaurant' : 'Ajouter au Panier'}</button>
      </div>
    </div>
  )
}

export default Card
