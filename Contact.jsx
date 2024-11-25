// import React from 'react'
// import '../Components/Contact.css'

// const Contact = () => {
//   return (
//     <>
//        <form>
//        <div className="form-group">
//     <label for="exampleInputName">Full Name</label>
//     <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Enter Name"/>
    
//   </div>
//   <div className="form-group">
//     <label for="exampleInputAddress"> Address</label>
//     <input type="address" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Enter Address"/>
   
//   </div>
//   <div className="form-group">
//     <label for="exampleInputPhone1">Phone No.</label>
//     <input type="phone" className="form-control" id="exampleInputPhone1" placeholder=" Enter Phone"/>
//   </div>
//   <div className="form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn">Submit</button>
// </form>
//     </>
//   )
// }

// export default Contact




import React from 'react'
import '../Components/Contact.css'
import Button from 'react-bootstrap/Button';
const Contact = () => {

  function myfun() {
       alert('Your message is sucessfully');
  }

  return (
    
    <>
   <h1 className="top">CONTACT US</h1>
    <div className="registration-form">
     <form action="#">
      <label htmlFor="Name"></label>
      <input type="text" name='fullname' placeholder='Name'/>
      <br />
      <label htmlFor="Address"></label>
      <input type="address" name='address' placeholder='Address'/>
      <br />
      <label htmlFor="Name"></label>
      <input type="number" name='number' placeholder='Number'/>
      <br />
      <label htmlFor="Message"></label>
      <textarea name="message" form="usrform" rows="6">Message</textarea>
      <br/>
      <button type="submit" className="btn" onClick={myfun}>Submit</button>
      
     </form>
    </div>
   
 
</>
)
}
export default Contact