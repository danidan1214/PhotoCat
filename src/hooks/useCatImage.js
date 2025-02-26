import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (!fact) return
    // extraer las priemras 3 palabras
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&fontSize=50&fontColor=red&json=true`)
      .then((res) => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}
