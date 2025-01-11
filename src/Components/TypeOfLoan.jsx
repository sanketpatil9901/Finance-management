import React from "react";
import "../cssFiles/TypeOfLoan.css";
import { Link } from "react-router-dom";

function TypeOfLoan() {
  return (
    <>
      <div className="container d-flex flex-column mt-5">
        {" "}
        <h1 className="display-4 mt-4 mb-4">Types Of Loans</h1>{" "}
        <div className="row">
          {" "}
          <div className="col-lg-4 col-md-6 col-sm-12">
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              {" "}
              <img src="..." className="card-img-top" alt="..." />{" "}
              <div className="card-body">
                {" "}
                <h5 className="card-title">Card title 1</h5>{" "}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 col-md-6 col-sm-12">
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              {" "}
              <img src="..." className="card-img-top" alt="..." />{" "}
              <div className="card-body">
                {" "}
                <h5 className="card-title">Card title 2</h5>{" "}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 col-md-6 col-sm-12">
            {" "}
            <div className="card" style={{ width: "18rem" }}>
              {" "}
              <img src="..." className="card-img-top" alt="..." />{" "}
              <div className="card-body">
                {" "}
                <h5 className="card-title">Card title 3</h5>{" "}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default TypeOfLoan;
