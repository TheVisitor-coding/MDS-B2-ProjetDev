import { useEffect, useState } from 'react'

function Clock () {
  const [date, SetDate] = useState(new Date())
  // const date = new Date();

  // Fonction appelée automatiquement au montage du composant
  useEffect(() => {
    // Fonction appelée toutes les 1000 ms
    const interval = setInterval(() => {
      SetDate(new Date())
    }, 1000)
    // Fonction appelée automatiquement au démontage du composant
    return () => {
      clearInterval(interval)
    }
  }, [])

  // Affichage du composant
  return (
    <h1>{date.toLocaleTimeString()}</h1>
  )
}

export default Clock
