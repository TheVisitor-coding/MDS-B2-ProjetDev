function Map (address) {
  // const attributes = restaurant.attributes
  console.log(address.coordinates)
  return (
    <iframe
      width='100%'
      height='300'
      src={`https://maps.google.com/maps?q=${address.coordinates}&hl=fr&z=14&amp&output=embed`}
    />
  )
}

export default Map
