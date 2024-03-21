import React from 'react'
import './DashboardCard.css'
import Counter from './Counter'
import { Link } from 'react-router-dom'
const DashboardCard = ({ takeme, title, number, image }) => {
    return (
      <div className='dashboardContainer'>
    <Link to={takeme} className='linker'>
      <div className='card1'>
        <h1>{title}</h1>
        <div className='p'>
          <Counter upperlimit={number} />
        </div>
        <img src={image} alt='No Image Data' />
      </div>
            </Link>
            </div>
  )
}

export default DashboardCard