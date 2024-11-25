// import React from 'react'
// import '../Components/Payment.css'
// import { Button } from 'react-bootstrap'
// import GooglePay_Icon from './Images/GooglePay.jpg'
// import Phonepe_Icon from './Images/Phonepe.png'

// const Payment = () => {

//   function myfun() {
//     alert('Your Order Has Been Confirm');
//   }

//   return (
//     <div>
//       <label for="UPI" className='payment'>Select UPI</label>
//       <br></br>
//       <input type="radio" className='radio' name='UPI' />
//       <label for="" className='check'>Google Pay UPI</label>
//       <img className='icon' src={GooglePay_Icon} alt="" />
//       <br></br>
//       <input type="radio" className='radio' name='UPI' />
//       <label for="" className='check'>Phonepe UPI</label>
//       <img className='icon' src={Phonepe_Icon} alt="" />
//       <br></br>
//       <Button className="btn" variant='contained' onClick={myfun}>Confirm Order</Button>
//     </div>
//   );
// }

// export default Payment




import React, { useState } from 'react';
import Popup from './Popup';
import '../Components/Payment.css'
import GooglePay_Icon from './Images/GooglePay.jpg'
import Phonepe_Icon from './Images/Phonepe.png'


const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (selectedPaymentMethod) {
      setTimeout(() => {
        setPopupMessage('Your Order is successful!');
        setIsPopupVisible(true);
      }, 1000);
    } else {
      setPopupMessage('Please select a payment method.');
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <h2>Payment Form</h2>
     
      <form onSubmit={handlePayment}>
        <div>
          <label>
            <input
              type="radio"
              value="google-pay"
              checked={selectedPaymentMethod === 'google-pay'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            />
             <label for="" className='check'>Google Pay UPI</label>
          
            <img className='icon' src={GooglePay_Icon} alt="" />
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="phone-pe"
              checked={selectedPaymentMethod === 'phone-pe'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            />
           <label for="" className='check'>Phonepe UPI</label>
            <img className='icon' src={Phonepe_Icon} alt="" />
          </label>
        </div>
        <button className="btn" type="submit">Pay Now</button>

      </form>
      {isPopupVisible && <Popup message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default Payment;