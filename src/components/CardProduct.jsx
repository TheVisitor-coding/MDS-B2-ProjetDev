import '../styles/CardProductStyle.css'

function CardProduct ({ restaurant }) {
  return (
    <div className='card-product'>
      <div className='card-left'>
        <p>Nom Produit</p>
        <p>Description</p>
        <p>Prix</p>
      </div>

      <div className='card-right'>
        <img src='http://placehold.it/120x50' />
        <button>Ajouter au Panier</button>
      </div>
    </div>
  )
}

export default CardProduct
