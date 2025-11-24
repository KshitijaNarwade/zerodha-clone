import React from 'react'

const Hero = () => {
  return (
    <div className='container p-3 mb-5'>
      <div className='row text-center'>
        <img src="/media/images/homeHero.png" alt="hero" className='mb-5'/>
        <h1 className='mt-5'>Inversting in everything</h1>
        <p>Online platform to inverst in stocks, derivatives, mutual funds, and more</p>
        <button className='p-2 btn btn-primary fs-5' style={{width: "30%", margin: "0 auto"} }>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero
