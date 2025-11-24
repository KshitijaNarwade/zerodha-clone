import React from 'react'

const RightSection = ({
  imageURL,
  productName,
  productDesription,
  learnMore, }) => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row ">

        <div className="col-12 col-lg-5 p-5 d-flex justify-content-center align-items-center">
          <div className='px-3'>
            <h1 className="fw-semibold">{ productName }</h1>
            <p>{ productDesription }</p>

            <div className="">
              <a href={ learnMore } style={ { marginLeft: "50px", textDecoration: "none" } }>Learn More<i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
        <div className='col-1'></div>
        <div className="col-12 col-lg-6 p-5 align-items-center">
          <img
            src={ imageURL }
            alt=""
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  )
}

export default RightSection
