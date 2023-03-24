import Card from './card'

function DishesListItem ({ dish }) {
  return (
    <Card item={dish} mode='dish' />
  )
}

export default DishesListItem
