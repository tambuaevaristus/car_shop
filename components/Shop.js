import Link from "next/link";
import React from "react";
import ShopPage from "./ShopPage";

export default function Shop({cars}) {
  return (
    <section>

<div class="advance-search col-10 px-5 container mx-auto mt-5 py-5 border ">
        <form action="#" className="">
          <div class="row mx-auto">
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Date</option>
                  <option value="1">2013</option>
                  <option value="2">2011</option>
                  <option value="3">2018</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Model</option>
                  <option value="1">Toyota</option>
                  <option value="2">Tesla</option>
                  <option value="3">Benz</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Fuel Type</option>
                  <option value="1">Petrol</option>
                  <option value="2">Dizeil</option>
                  <option value="3">Gas</option>
                </select>
              </div>
            </div>

            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Mileage</option>
                  <option value="1">Hibrid</option>
                  <option value="2">Manual</option>
                  <option value="3">Digital</option>
                </select>
                <button class="btn btn-danger mx-2">SEARCH</button>
              </div>
            </div>
          </div>
        </form>
      </div>


      <div className="container py-5">
        {cars.map((car)=><div key={car.id} className="row justify-content-center mb-3">
          <div className="col-md-4 col-xl-4">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src={car.images[0]}
                        className="w-100"
                      />
                      {/* <p className="bg-danger border border-1 rounded-pill w-4">50% OFF</p> */}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 ">
                    <h5>{car.model}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>Toyota 2015</span>
                    </div>
                    <div className="mt-1 mr-12 mb-0 text-muted small">
                      <span>{car.engine_type}</span>
                      <span className="text-danger"> • </span>
                      <span>{car.mileage}</span>
                      <span className="text-danger"> • </span>
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
                      {/* <h6 className="text-secondary fw-bold">Highest bid</h6> */}

                      <h4 className="mb-1 me-1 text-danger">6000,000FCFA</h4>
                      <span className="text-secondary">
                        <s>6500,000FCFA</s>
                      </span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link
                        href="/car/x"
                        className="btn btn-danger btn-sm"
                        type="button"
                      >
                        Details
                      </Link>
                      <Link
                        href="/bid/xx"
                        className="btn  btn-sm mt-2 border border-danger"
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
