import React from "react";

const Award = () => {
  return (
   <div className="container p-3 m-auto w-100">
  <div className="row align-items-center d-flex g-4 mb-5">

   
    <div className="col-12 col-md-6 p-4 d-flex justify-content-center">
      <img src="/media/images/largestBroker.svg" className="img-fluid" style={{ maxWidth: "100%" }} />
    </div>

    <div className="col-12 col-md-6 p-4 d-flex flex-column justify-content-between gap-3">

      <h1>Largest stock broker in India</h1>

      <p>
        2+ million Zerodha clients contribute to over 15% of all volumes in India
        daily by trading and investing in:
      </p>

      <div className="row g-3">
        <div className="col-6">
          <ul className="m-0">
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="m-0">
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. Securities</li>
          </ul>
        </div>
      </div>


      <img
        src="/media/images/pressLogos.png"
        className="img-fluid"
        style={{ width: "90%", objectFit: "contain" }}
      />

    </div>

  </div>
</div>

  );
};

export default Award;
