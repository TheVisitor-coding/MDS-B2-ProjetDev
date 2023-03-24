function Map (address) {
  // const attributes = restaurant.attributes
  console.log(address.phone)
  return (
    <iframe
      width='99%'
      height='300'
      src={`https://maps.google.com/maps?q=${address.street}&hl=fr&z=14&amp&output=embed`}
    />
  )
}

export default Map
