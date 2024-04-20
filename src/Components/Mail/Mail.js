import React from 'react';
import './Mail.css'

const Mail = () => {
  return (
    <div className="mail">
      <h1>Save time, save money!</h1>
      <span className="maildesc">
        Sign up and we'll sent the best deals to you
      </span>
      
        <div className="email">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
   
    </div>
  );
}

export default Mail