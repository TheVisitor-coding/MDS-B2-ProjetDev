function Product ({ dish }) {
  return (
    <div className='head'>

      {/* <div className='head-img'>
          <img src={imageUrl} />
        </div> */}

      <div className='head-content'>
        <h2>{dish.attributes.name}</h2>
        <h3>{dish.attributes.description}</h3>
        <h3>{dish.attributes.type}</h3>
        <h3>{dish.attributes.price}</h3>

        <span className='head-info'>
          <img src='https://cdn.pixabay.com/photo/2013/07/13/13/21/information-160885_640.png' />
          <h3>Informations</h3>
        </span>
        <button>Commander</button>
      </div>

    </div>
  )
}

export default Product
