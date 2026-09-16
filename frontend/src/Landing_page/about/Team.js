import React from 'react'

const Team = () => {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 border-top'>
            <p className='fs-2 text-center fw-normal mt-5'>People</p>
        </div>

        <div className='row p-5  ' style={{lineHeight:"2", fontSize:"1.1em"}}>
           <div className='col-5 text-center'>
               <img src="/media/images/nithinKamath.jpg" alt="founder-image" style={{borderRadius:"100%", width: "60%"}}/>
               <h4 className='mt-5'>Nithin Kamath</h4>
               <h6 className="text-muted">Founder, CEO</h6>

           </div>
           <div className='col-7'>

                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>

           </div>
        </div>
    </div>
  )
}

export default Team
