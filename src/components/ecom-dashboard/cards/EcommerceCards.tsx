import React from 'react'
import TotalRevenue from './components/TotalRevenue'
import Orders from './components/Orders'
import Stores from './components/Stores'
import Sellers from './components/Sellers'

const EcommerceCards = () => {
  return (
    <div className="row">
    {/* Total Revenue */}
        <TotalRevenue />

    {/* orders */}
        <Orders />

    {/* stores */}
        <Stores />

    {/* sellers */}
        <Sellers />
    </div>
  )
}

export default EcommerceCards
