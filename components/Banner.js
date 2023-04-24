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
                src="data:image/jpeg;base64,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"
                alt="Image"
              />
              <div className="carousel-caption  d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white pl-1 text-uppercase animated slideInDown">
                        {" "}
                        Book Appointment without Stress
                      </h6>
                      <h1 className="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Best Barber in town
                      </h1>
                      <div>
                        <Link
                          href="#form"
                          className="btn btn-primary rounded-2 py-2  fw-bolder px-5 animated slideInDown"
                        >
                          Book Appointment
                        </Link>
                        
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      {/* <img
                        className="img-fluid"
                        src="img/carousel-2.png"
                        alt=""
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                className="w-100"
                height="650px"
                src="data:image/jpeg;base64,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"
                alt="Image red"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white pl-1 text-uppercase animated slideInDown">
                        {" "}
                        Book Appointment without Stress
                      </h6>
                      <h1 className="display-4 fw-bolder text-white mb-4 pb-3 animated slideInDown">
                        Barb with Sam
                      </h1>
                     
                      <div>
                        <Link
                          href="#form"
                          className="btn btn-primary rounded-2 py-2  fw-bolder px-5 animated slideInDown"
                        >
                          Book Appointment
                        </Link>
                        {/* <Link
                          href="#form"
                          class="btn btn-primary mx-lg-3 rounded-2 py-2 fw-bolder my-sm-2 px-5 animated slideInDown"
                        >
                          View Slots
                        </Link> */}
                      </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                   
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
