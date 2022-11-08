import React from 'react'
import FetchHook from '../FetchHook'

const Rooms = () => {
  const { apiData : rooms} = FetchHook("rooms/by_hotel/{{id}}")

  return (
    <div>Rooms</div>
  )
}

export default Rooms