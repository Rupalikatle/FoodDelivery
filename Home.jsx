import React from 'react'
import '../Components/Home.css';
import FoodBackground from './Images/Burger_Image.png'

const Home = () => {
  return (
    <>

      <div className='container'>
        <h1 className='heading'>DELICIOUS BURGER</h1>
        <h2 className='heading_2'>The Burger Tastes Better When You It With Your Family</h2>
        <img className='img'  src={FoodBackground} alt="" />
      </div>
    </>
  )
}

export default Home








