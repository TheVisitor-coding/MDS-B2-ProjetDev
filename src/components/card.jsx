import '../styles/CardStyle.css'

function Card ({ restaurant }) {
  const attributes = restaurant.attributes
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={attributes.image} />
      </div>
      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.content}</p>
      </div>
      <div className='card-footer'>
        <button>Ajouter au Panier</button>
      </div>
    </div>
  )
}

export default Card
