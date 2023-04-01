import React from "react";

export default function Banner() {
  return (
    <div>
      <div class="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="w-100"
                src="https://img.freepik.com/free-vector/high-speed-race-hatchback-car-trailing-lights-motion-effect-realistic-composition-night-city-street_1284-28805.jpg?w=2000&t=st=1680369556~exp=1680370156~hmac=2d9ebd31acda5bb59bcb73cdd110f99544a8c49fdcba7f022fa2e0d874bfc15c"
                alt="Image"
              />
              <div class="carousel-caption d-flex align-items-center">
                <div class="container">
                  <div class="row align-items-center justify-content-center justify-content-lg-start">
                    <div class="col-10 col-lg-7 text-center text-lg-start">
                      <h6 class="text-white text-uppercase mb-3 animated slideInDown">
                        {" "}
                        Car Servicing
                      </h6>
                      <h1 class="display-3 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Cheap and Affordable Cars
                      </h1>
                      <div>
                        <a
                          href=""
                          class="btn btn-danger rounded-2 py-2 fw-bolder px-5 animated slideInDown"
                        >
                          Buy
                        </a>
                        <a
                          href=""
                          class="btn btn-danger mx-3 rounded-2 py-2 fw-bolder px-5 animated slideInDown"
                        >
                          Sell
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img class="img-fluid" src="img/carousel-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="/img/bg.avif" alt="Image" />
              <div class="carousel-caption  d-flex align-items-center">
                <div class="container">
                  <div class="row align-items-center justify-content-center justify-content-lg-start">
                    <div class="col-10 col-lg-7 text-center text-lg-start">
                      <h6 class="text-white pl-1 text-uppercase animated slideInDown">
                        {" "}
                        Car Servicing
                      </h6>
                      <h1 class="display-3 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Your safety is our Priority
                      </h1>
                      <div>
                        <a
                          href=""
                          class="btn btn-danger rounded-2 py-2 fw-bolder px-5 animated slideInDown"
                        >
                          Buy
                        </a>
                        <a
                          href=""
                          class="btn btn-danger mx-3 rounded-2 py-2 fw-bolder px-5 animated slideInDown"
                        >
                          Sell
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img class="img-fluid" src="img/carousel-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="advance-search col-10 px-5 container mx-auto py-5 border ">
        <form action="#">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="block d-flex">
                <input
                  type="text"
                  class="form-control mb-2 mr-sm-2 mb-sm-0"
                  id="search"
                  placeholder="Search for store"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="block d-flex">
                <input
                  type="text"
                  class="form-control mb-2 mr-sm-2 mb-sm-0"
                  id="search"
                  placeholder="Search for store"
                />
                <button class="btn btn-main">SEARCH</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
