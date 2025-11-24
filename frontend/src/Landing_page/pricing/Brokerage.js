import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className="row p-3 m-3 border-top">
        <div className="col-12 col-md-8 p-3">
          <a href="" style={{textDecoration:"none"}}> <h3 className='fs-5 p-3'>Brokerage calculator</h3></a>
          <ul style={{textAlign:"left", lineHeight:"2.5"}} className='text-muted'>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges will apply.</li>
            <li>For NRI account (non-PIS), 0.5% or &#8377;100 per ececuted order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or &#8377;200 per ececuted order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged &#8377;40 per ececuted order instread fo &#8377;20 per executed order.</li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-3 text-center">
         <a href="" style={{textDecoration:"none"}}><h3 className='fs-5 p-3'>List of Charges</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
