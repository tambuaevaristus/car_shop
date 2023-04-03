import Link from "next/link";
import React from "react";

export default function Banner() {

  return (
    <div>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                className="w-100"
                height="650px"
                src="/img/bg.avif"
                alt="Image"
              />
              <div className="carousel-caption  d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white pl-1 text-uppercase animated slideInDown">
                        {" "}
                        Car Servicing
                      </h6>
                      <h1 className="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Your safety is our Priority
                      </h1>
                      <div>
                        <Link
                          href="/shop"
                          className="btn btn-danger rounded-2 py-2  fw-bolder px-5 animated slideInDown"
                        >
                          Find Car
                        </Link>
                        <Link
                          href="/dashboard"
                          className="btn btn-danger mx-lg-3 rounded-2 py-2 fw-bolder my-sm-2 px-5 animated slideInDown"
                        >
                          Sell
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="img/carousel-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                className="w-100"
                height="650px"

                src="https://img.freepik.com/free-vector/black-cloth-drapery-covering-car-silk-fabric-hanging-gift-surprise-reveal_575670-656.jpg?w=1380&t=st=1680383926~exp=1680384526~hmac=a3f681216b673e10a77cc1f98c9d1e46f58c820cbf5a43f41ed0339b914321e1"
                alt="Image"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        {" "}
                        Car Servicing
                      </h6>
                      <h1 className="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Get your dream car with no stress
                      </h1>
                      <div>
                      <Link
                          href="/shop"
                          className="btn btn-danger rounded-2 py-2  fw-bolder px-5 animated slideInDown"
                        >
                          Find Car
                        </Link>
                        <Link
                          href="/dashboard"
                          class="btn btn-danger mx-lg-3 rounded-2 py-2 fw-bolder my-sm-2 px-5 animated slideInDown"
                        >
                          Seller
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="img/carousel-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
