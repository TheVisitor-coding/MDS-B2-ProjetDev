import { useEffect, useState } from 'react'
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
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    const $card = document.querySelector('.head-img img')
    function rotateToMouse (e) {
      if (!bounds) return

      const mouseX = e.clientX
      const mouseY = e.clientY
      const leftX = mouseX - bounds.x
      const topY = mouseY - bounds.y
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `

      // $card.querySelector('.glow').style.backgroundImage = `
      //   radial-gradient(
      //     circle at
      //     ${center.x * 2 + bounds.width / 2}px
      //     ${center.y * 2 + bounds.height / 2}px,
      //     #ffffff55,
      //     #0000000f
      //   )
      // `
    }

    function handleMouseEnter () {
      const bounds = $card.getBoundingClientRect()
      setBounds(bounds)
      document.addEventListener('mousemove', rotateToMouse)
    }

    function handleMouseLeave () {
      document.removeEventListener('mousemove', rotateToMouse)
      $card.style.transform = ''
      $card.style.background = ''
    }

    $card.addEventListener('mouseenter', handleMouseEnter)
    $card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      $card.removeEventListener('mouseenter', handleMouseEnter)
      $card.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', rotateToMouse)
    }
  }, [bounds])

  return (
    <>
      <div className='head'>

        <div className='head-img'>
          <img src={imageUrl} />
          <div className='glow' />
        </div>

        <div className='head-content'>
          <h2>{attributes.name}</h2>
          <h3>{attributes.adresse.street} {attributes.adresse.postcode} {attributes.adresse.city}</h3>
          <h3>{attributes.adresse.email}</h3>
          <h3>{attributes.adresse.phone}</h3>

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
