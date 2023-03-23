import '../styles/FicheRestoStyle.css'

function FicheResto ({ restaurant }) {
  const IMAGE_URL = 'http://localhost:1337'

  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + restaurant.attributes.image.data.attributes.url
  } else {
    imageUrl = 'https://via.placeholder.com/'
  }

  return (
    <>
      <div className='head'>

        <div className='head-img'>
          <img src={imageUrl} />
        </div>

        <div className='head-content'>
          <h2>{attributes.name}</h2>
          <h3>Délai de Livraison / Type de nourriture</h3>

          <span className='head-info'>
            <img src='https://cdn.pixabay.com/photo/2013/07/13/13/21/information-160885_640.png' />
            <h3>Informations</h3>
          </span>
          <button>Commander</button>
        </div>

      </div>

    </>
  )
}

export default FicheResto
