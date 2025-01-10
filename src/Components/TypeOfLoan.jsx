import React from "react";
import "../cssFiles/TypeOfLoan.css";
import { Link } from "react-router-dom";

function TypeOfLoan() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "100vh" }}>
        <h1 className="fs-1 fw-bold m-5">Types Of Loans</h1>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                className="card-img-top"
                alt="not available"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Personal Loans</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/loan" className="btn btn-primary">
                  Create Loan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                className="card-img-top"
                alt="not available"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Vehicle Loans</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/loan" className="btn btn-primary">
                  Create Loan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                className="card-img-top"
                alt="not available"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Education Loans</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/loan" className="btn btn-primary">
                  Create Loan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                className="card-img-top"
                alt="not available"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Home Loans</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Link to="/loan" className="btn btn-primary" role="button">
                  Create Loan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeOfLoan;
