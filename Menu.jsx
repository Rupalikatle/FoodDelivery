import React from 'react'
import '../Components/Menu.css'
import { useNavigate } from 'react-router-dom';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pizza from './Images/Pizza.jpg'
import Sandwitch from './Images/Sandwich.jpg'
import Noodles from './Images/Noodles.jpg'
import Machurian from './Images/Manchurian.jpg'
import VdaPav from './Images/vdaPav.jpg'
import Potato from './Images/Potato.jpg'

const Menu = () => {

const navigate=useNavigate();

return (
    <>
      <div className='text  col-md-4 col-10'>
       <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={Pizza} />
       <Card.Title className='title'>Pizza</Card.Title>
      <Card.Body>
       
        <Card.Text>
          <p className='p'>A hamburger or burger is an American fast food. 
          It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun.</p>
           <a className='price' >PRICE=50Rs</a>  
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='text  col-md-4 col-10'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={Sandwitch} />
      <Card.Body>
        <Card.Title className='title'>Sandwitch</Card.Title>
        <Card.Text>
          <p className='p'>A hamburger or burger is an American fast food.
           It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. </p>
         <a className='price'> PRICE=60Rs</a>
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='text  col-md-4 col-10'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={  Noodles} />
      <Card.Body>
        <Card.Title className='title'> Noodles</Card.Title>
        <Card.Text>
          <p className='p'>A hamburger or burger is an American fast food. 
          It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun.</p>
         <a className='price'>PRICE=70Rs</a> 
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>

   
   <div className='text  col-md-4 col-10'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={ Machurian} />
      <Card.Body>
        <Card.Title className='title'> Machurian</Card.Title>
        <Card.Text>
          <p className='p'> A hamburger or burger is an American fast food.
           It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun.</p>
             <a className='price'>PRICE=60Rs</a> 
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>

   <div className='text  col-md-4 col-10'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={Potato} />
      <Card.Body>
        <Card.Title className='title'>Potato</Card.Title>
        <Card.Text>
          <p className='p'>A hamburger or burger is an American fast food. 
          It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun.</p>
          <a className='price'>PRICE=80Rs</a>
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>

   <div className='text  col-md-4 col-10'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src={VdaPav} />
      <Card.Body>
        <Card.Title className='title'>VdaPav</Card.Title>
        <Card.Text>
          <p className='p'>A hamburger or burger is an American fast food.
           It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun.</p>
        <a className='price'>PRICE=40rs</a> 
        </Card.Text>
        <Button className="primary" onClick={()=>navigate("/Payment")}>Order Now</Button>
      </Card.Body>
    </Card>
    </div>
{/* 
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src={Pizza} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

    </>
  )
}

export default Menu









