import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6"><img src="/media/images/education.svg" style={{width: "90%"}}/></div>
        <div className="col-6 pt-5">
          <h1>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basic to advanced trading.</p>
            <a href="" style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right-long"></i></a>

          <p className='mt-5'>TradingQ&A, the most active trading and inverstment community in India for all your market related queries.</p>
            <a href="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>

        </div>
      </div>
    </div>
  )
}

export default Education
