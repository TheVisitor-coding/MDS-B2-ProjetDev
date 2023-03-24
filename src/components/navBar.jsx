import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Nav.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Menu () {
  const [cart, setCart] = useState()
  // TODO : terminer demain
  const navigate = useNavigate()

  useEffect(() => {
    const savedCart = window.localStorage.getItem('CART')
    if (savedCart) {
      const _cart = JSON.parse(savedCart)
      setCart(_cart)
    }

    window.addEventListener('storage', (e) => {
      console.log('STOCKAGE MIS A JOUR')
      const savedCart = window.localStorage.getItem('CART')
      if (savedCart) {
        const _cart = JSON.parse(savedCart)
        setCart(_cart)
      }
    })
  }, [])

  const handleCart = () => {
    navigate('/cart')
  }
  return (
    <header>
      <nav>
        <div className='navbar'>
          <div className='navbar-logo'>
            <img src='/assets/img/deliveroo.png' />
          </div>
          <div className='navbar-menu'>
            <a href='/'>Accueil</a>
            <a href='/restaurants'>Les Restaurants</a>
            <a href='/about'>A Propos</a>
          </div>
          <div className='navbar-cart' onClick={handleCart}>
            <AiOutlineShoppingCart size={30} />
            <span>{cart && cart.length}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Menu
