
const addToCart = (item) => {
  // Récupération du panier sauvegardé
  const savedCart = window.localStorage.getItem('CART')
  // Récupère le panier ou j'en créé un nouveau
  const cart = savedCart ? JSON.parse(savedCart) : []
  // Ajout de l'item
  cart.push(item)
  // Sauvegard du panier
  window.localStorage.setItem('CART', JSON.stringify(cart))
  // Envoi d'un évènement pour avertir les autres composants
  window.dispatchEvent(new Event('storage'))
}

const deleteFromCart = (index) => {
  const savedCart = window.localStorage.getItem('CART')
  if (savedCart) {
    const cart = JSON.parse(savedCart)
    cart.splice(index, 1)
    window.localStorage.setItem('CART', JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))
  }
}

export {
  addToCart,
  deleteFromCart

}
