import { useNavigate } from 'react-router-dom'
import '../styles/CardStyle.css'
const IMAGE_URL = 'http://localhost:1337'

function Card ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'https://via.placeholder.com/'
  }

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/restaurants/' + restaurant.id)
  }
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={imageUrl} />
      </div>
      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.content}</p>
      </div>
      <div className='card-footer'>
        <button onClick={handleClick}>Voir le Restaurant</button>
      </div>
    </div>
  )
}

export default Card
