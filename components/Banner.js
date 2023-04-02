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
            <div class="carousel-item">
              <img
                class="w-100"
                height="650px"
                src="/img/bg.avif"
                alt="Image"
              />
              <div class="carousel-caption  d-flex align-items-center">
                <div class="container">
                  <div class="row align-items-center justify-content-center justify-content-lg-start">
                    <div class="col-10 col-lg-7 text-center text-lg-start">
                      <h6 class="text-white pl-1 text-uppercase animated slideInDown">
                        {" "}
                        Car Servicing
                      </h6>
                      <h1 class="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Your safety is our Priority
                      </h1>
                      <div>
                        <a
                          href=""
                          class="btn btn-danger rounded-2 py-2  fw-bolder px-5 animated slideInDown"
                        >
                          Find Car
                        </a>
                        <a
                          href=""
                          class="btn btn-danger mx-lg-3 rounded-2 py-2 fw-bolder my-sm-2 px-5 animated slideInDown"
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
            <div class="carousel-item active">
              <img
                class="w-100"
                src="https://img.freepik.com/free-vector/black-cloth-drapery-covering-car-silk-fabric-hanging-gift-surprise-reveal_575670-656.jpg?w=1380&t=st=1680383926~exp=1680384526~hmac=a3f681216b673e10a77cc1f98c9d1e46f58c820cbf5a43f41ed0339b914321e1"
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
                      <h1 class="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Get your dream car with no stress
                      </h1>
                      <div>
                        <a
                          href="/shop"
                          class="btn btn-danger rounded-2 py-2 fw-bolder px-5 animated slideInDown"
                        >
                          Find Car
                        </a>
                        <a
                          href="/register"
                          class="btn btn-danger mx-3 rounded-2 py-2 my-sm-2 fw-bolder px-5 animated slideInDown"
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
    </div>
  );
}
