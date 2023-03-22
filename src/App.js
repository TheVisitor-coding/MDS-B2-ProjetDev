import './styles/variable.css';
import './App.css';
import Clock from './components/clock';
import Card from './components/card';
import Menu from './components/navBar';
import Footer from './components/footer';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  // Déclaration d'une variable (restaurants) qui contiendra nos restaurants
  // On obtient une méthode (setRestaurants) mettant à jour les restaurants et rafraichissant l'affichage (setRestaurants)
  const [restaurants, setRestaurants] = useState()

  // Méthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
  // Le montage => l'apparition du composant à l'écran
  useEffect(() => {

    // Création d'une méthode pour récupérer les données provenant du backend (Strapi)
    const loadData = async() => {
      // On récupère les données du backend avec la library Axios (Appel HTTP)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*')
      // On vérifie si l'appel de l'API s'est bien passé (status = 200 = "OK")
      if (response.status === 200){
        // Appel d'API ok => on enregistre les restaurants dans la variable "restaurants"
        const data = response.data.data
        setRestaurants(data)
      }
    }
    // On appelle la méthode créé précédemment
    loadData()
  }, [])

  return (
    <div className="App">
      <Menu/>
      <main className="content">
      <Clock/>
      {
        // On vérifie qu'on a bien récupérer les restaurants
        // On créé une boucle sur le tableau de restaurants grâce à la fonction "map()"
        // On retourne pour chaque restaurant une Card pour afficher son contenu
        restaurants && restaurants.map(restaurant => {
          return (
            <Card restaurant={restaurant}/>
            )
          })
        }
      </main>
      <Footer/>
    </div>
  );
}

export default App;
