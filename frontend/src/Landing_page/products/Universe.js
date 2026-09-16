import React from 'react'

const Universe = () => {
  return (
    <div className="container text-center">
      <div className="row text-center">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-4 p-3">

          <div class="text-center">
            <img src="/media/images/zerodhaFundhouse.png" alt="" style={ { width: "60%" } } />
          </div>

          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
          </div>

        </div>

        <div className="col-12 col-md-4 p-3 ">
          <div class="text-center">
            <img src="/media/images/sensibullLogo.svg" style={ { width: "60%" } } />
          </div>
          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3 ">
          <div class="text-center">
            <img src="/media/images/tijori-logo.png" alt="" style={ { width: "60%" } } />
          </div>
          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chain, and more.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3 ">
          <div class="text-center">
            <img src="/media/images/streakLogo.png" alt="" style={ { width: "60%" } } /> </div>
          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Systematic trading platform that allow you to create and backtest strategies withour coding.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3">
          <div class="text-center">
            <img src="/media/images/smallcaseLogo.png" alt="" style={ { width: "60%" } } /> </div>
          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Themetic inversting platform that helps you invest in diversified baskets of stocks on ETFs.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3">
          <div class="text-center">
            <img src="/media/images/dittoLogo.png" alt="" style={ { width: "60%" } } /> </div>
          <div class="text-center mt-3">
            <p className='text-small text-muted mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
          </div>
        </div>
         <button className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width: "30%", margin: "0 auto"} }>Signup Now</button>
      </div>
    </div>

  )
}

export default Universe
