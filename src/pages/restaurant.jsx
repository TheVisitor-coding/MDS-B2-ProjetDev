import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/CardProduct'
import FicheResto from '../components/FicheResto'
import Map from '../components/Map'
import '../styles/CardProductStyle.css'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  }, [])
  return restaurant && (
    <>
      <h1>Fiche Restaurant : {id}</h1>
      <div>
        <FicheResto restaurant={restaurant} />
      </div>
      <div className='cards'>
        <CardProduct restaurant={restaurant} />
        <CardProduct restaurant={restaurant} />
        <CardProduct restaurant={restaurant} />
      </div>
      <div>
        <Map restaurantadress={restaurant.adresse} />
      </div>

    </>
  )
}

export default Restaurant
