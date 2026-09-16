import React from 'react'

const Hero = () => {
  return (
      <div className="container-fluid" id="supportHero">
      <div className="container m-auto">

        <div className="p-5 mt-3 mb-3" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="#" id="supportLinks">Track Tickets</a>
        </div>

        <div className="row px-md-5 px-3 mt-3 mb-3">
          {/* Left Section */}
          <div className="col-12 col-md-6 col-lg-5 p-3 mt-3 mb-3">
            <h1 className="fs-3 mb-3">
              Search for an answer or browse help topics to create a ticket.
            </h1>

            <input
              type="text"
              id="supportInput"
              className="form-control mb-3 p-3"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="d-flex flex-column gap-2">
              <a href="#" id="supportLinks">Track account opening</a>
              <a href="#" id="supportLinks">Track segment activation</a>
              <a href="#" id="supportLinks">Intraday margins</a>
              <a href="#" id="supportLinks">Kite user manual</a>
              <a href="#" id="supportLinks">Track account opening</a>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="d-none d-lg-block col-lg-2"></div>

          {/* Right Section */}
          <div className="col-12 col-md-6 col-lg-5 p-3 mt-3 mb-3">
            <h1 className="fs-2 mb-3">Featured</h1>

            <div className="d-flex flex-column gap-2">
              1. <a href="#" id="supportLinks">Current takeovers and Delisting - January 2024</a>
              2. <a href="#" id="supportLinks">Latest Intraday leverages - MIS & CO</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
 

export default Hero
