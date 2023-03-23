import { useNavigate } from 'react-router-dom'
import '../styles/CardProductStyle.css'

function CardProduct ({ dishes }) {
  console.log(dishes.data[0].id)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/restaurants/' + dishes.id + '/' + dishes.data[0].id)
  }

  return dishes && dishes.data && (
    <div className='cards'>
      {
      dishes.data.map(dish => {
        const IMAGE_URL = 'http://localhost:1337'

        let imageUrl = ''
        if (dish.attributes.image) {
          imageUrl = IMAGE_URL + dish.attributes.image.data.attributes.url
        } else {
          imageUrl = 'https://via.placeholder.com/'
        }
        return (
          <div key={dish.id} className='card-product'>
            <div className='card-left'>
              <h4 className='product-name'>{dish.attributes.name}</h4>
              <p className='product-content'>{dish.attributes.content}</p>
              <p className='product-price'>{dish.attributes.price} €</p>
            </div>

            <div className='card-right'>
              <img src={imageUrl} />
              <button onClick={handleClick}>Ajouter au Panier</button>
            </div>
          </div>
        )
      })
    }
    </div>

  )
}

export default CardProduct
