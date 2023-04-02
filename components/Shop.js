import Link from "next/link";
import React from "react";
import ShopPage from "./ShopPage";

export default function Shop({cars}) {
  return (
    <section>
      <div className="container py-5">
        {cars.map((car)=><div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://images.cars.com/cldstatic/wp-content/uploads/bmw-x1-2023-01-exterior-front-angle-scaled.jpg"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{car.model}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>toyota 2015</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>{car.engine_type}</span>
                      <span className="text-primary"> • </span>
                      <span>{car.mileage}</span>
                      <span className="text-primary"> • </span>
                        <br />
                    </div>

                    <p className="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className=" align-items-center mb-1">
                      <h6 className="text-success">highest bid</h6>

                      <h4 className="mb-1 me-1">7000,000FCFA</h4>
                      <span className="text-danger">
                        <s>6500,000FCFA</s>
                      </span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link
                        href="/car/x"
                        className="btn btn-primary btn-sm"
                        type="button"
                      >
                        Details
                      </Link>
                      <Link
                        href="/bid/xx"
                        className="btn btn-outline-primary btn-sm mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}

      </div>
    </section>
  );
}
