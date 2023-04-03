import Link from "next/link";
import React from "react";
import amount from "amount";

export default function Car({car}) {
  console.log("sd", Math.max(230,500));
  return (
    // <div className="col-lg-4 p-3 py-4 col-md-4 col-12">

    <div className="col-md-8 col-lg-4 col-xl-4 my-3">
        <div
          className="bg-image border rounded hover-overlay ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img
            src={car.images[0]}
            className="card-img-top"
            alt="Laptop"
          />
          {/* <a href="#!">
                    <div className="mask"></div>
                  </a> */}
        
        <div className="card-body pb-0 px-5">
          <div className="d-flex py-4 justify-content-between">
            <h3>{car.model}</h3>
          </div>

          <div className="d-flex justify-content-between ">
            <p className="">Model</p>
            <p className="text-dark">{car.model}</p>
          </div>

          {/* <hr className="my-0" /> */}
          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <p className="">Rating</p>
              <div className="d-flex flex-row justify-content-end mt-1 text-danger">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>{" "}
            </div>
            <div className="d-flex justify-content-between ">
              <p className="">Highest bid</p>
              <p className="text-dark">{amount(Math.max(...car.bidding.map((elem)=>+elem.amount)),",",",")}XFA</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <Link href="/cars/x" className="btn mx-auto text-danger ">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
