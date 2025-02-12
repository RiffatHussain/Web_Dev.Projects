import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products')
  }

  return (
    <div>        
      <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className='max-w-[700px]'>
            <img
              src="/image/Pet-swinger.jpeg"
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Pet Accessories is released!</h2>
            <p>Grab before it's too late.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleClick}>Buy Now</button>
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default Hero
