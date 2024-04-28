import React from 'react'
import TotalRevenue from './components/TotalRevenue'
import SalesCounts from './components/SalesCounts'
import OtherCards from './components/OtherCards'
import TodayVisit from './components/TodayVisit'

const Cards = () => {
  return (
    <div className="row">
    {/* Total Revenue */}
        <TotalRevenue />

    {/* Sales */}
        <SalesCounts />

    {/* Other Cards */}
        <OtherCards />

    {/* Today's Visit */}
        <TodayVisit />
    </div>
  )
}

export default Cards
