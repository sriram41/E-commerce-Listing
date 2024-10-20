import React from 'react';
import './ThankYouPage.css'

const ThankYouPage = ({ productName }) => { 
  
  return (
  <div className ='thankyoubody'>

     <div className ="modal" style={{ backgroundImage: `url(/assets/bg.png)` }}>
        <div className ="modal-content">
            
            <h2>Your Cart</h2>
            <hr />
            <h3>Congratulations<br />Order Placed!</h3>
            <img src="/assets/plant.png" alt="Plant Icon" className="plant-icon" />
            <p>Thank you for choosing Chaperone services.<br />We will soon get in touch with you!</p>
            <button className="continue-button">CONTINUE SHOPPING</button>
        </div>
    </div>
    
  
  </div>
)

};

export default ThankYouPage;
