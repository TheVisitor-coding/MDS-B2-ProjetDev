import '../styles/Footer.css'

function Footer () {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-logo'>
          <img src='/assets/img/deliveroo.png' />
        </div>

        <div className='footer-link'>
          <a>Accueil</a>
          <a>Les Restaurants</a>
          <a>Panier</a>
        </div>

        <div className='footer-social'>
          <img src='https://shop-cdn.presse-citron.net/instagram.jpg' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
