import React from 'react'
import './FeatureProduct.css'
const FeatureProduct = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="data:image/jpeg;base64,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"
          alt="product"
        />
        <span className="hotelName">Apart hotel star</span>
        <span className='city'>Madrid state</span>
        <span className='price'>Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="data:image/jpeg;base64,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"
          alt="product"
        />
        <span className="hotelName">Apart hotel star</span>
        <span className='city'>Madrid state</span>
        <span className='price'>Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="data:image/jpeg;base64,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"
          alt="product"
        />
        <span className="hotelName">Apart hotel star</span>
        <span className='city'>Madrid state</span>
        <span className='price'>Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="data:image/jpeg;base64,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"
          alt="product"
        />
        <span className="hotelName">Apart hotel star</span>
        <span className='city'>Madrid state</span>
        <span className='price'>Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="data:image/jpeg;base64,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"
          alt="product"
        />
        <span className="hotelName">Apart hotel star</span>
        <span className='city'>Madrid state</span>
        <span className='price'>Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct