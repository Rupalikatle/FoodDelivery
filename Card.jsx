import React from 'react'
import { Card } from 'react-bootstrap/card'
import BlackBurger from '../Components/Images/BlackSheepBurger.jpeg'

const Card = () => {
  return (
    <>
    <Card style={{width:'18rem'}}>
      <Card.Img variant='top' src={BlackBurger}/>
        <div className='card_body'>
        <div className='upper_data'>
          <h4>BlackBurger</h4>
          <span>3.8★</span>
        </div>

      </div>
    </Card>
    </>
  )
}

export default Card