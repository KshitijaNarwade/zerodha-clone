import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className="row p-5 m-5 text-center border-bottom">
        <h1>Pricing</h1>
        <h3 className='text-muted fs-5'>Free equity envestment and fkat &#8377;20 trady and F&O trades</h3>
      </div>

      <div className="row p-3 m-3">
        <div className="col-12 col-md-4 p-3">
            <img src="/media/images/pricingEquity.svg" alt=""/>
            <h1 className='fs-3'>Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-12 col-md-4 p-3">
             <img src="/media/images/intradayTrades.svg" alt=""/>
            <h1 className='fs-3'>Intraday and F&O trades</h1>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-12 col-md-4 p-3">
               <img src="/media/images/pricingEquity.svg" alt=""/>
            <h1 className='fs-3'>Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
