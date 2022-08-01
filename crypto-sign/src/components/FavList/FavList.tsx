import React, { useState } from 'react'

const FavList = () => {

    const [fav, setFav] = useState(localStorage.getItem('fav') || null)

    return (
      <div>FavList</div>
    )
}

export default FavList