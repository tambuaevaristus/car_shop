import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Molyko, Buea
                Cameroon
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+237654297746
              </p>
              <p className="mb-2">
                {/* <i className="fa fa-envelope me-3"></i>topbids@gmail.com */}
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Opening Hours</h4>
              <h6 className="text-light">Monday - Friday:</h6>
              <p className="mb-4">08.00 AM - 05.00 PM</p>
              <h6 className="text-light">Saturday - Sunday:</h6>
              <p className="mb-0">07.00 AM - 6.00 PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <h4 className="text-light mb-4">Brands</h4> */}
             
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Please sign up for newsletter.</p>
              <div className="position-relative mx-auto" >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
               
                   All Right Reserved. Designed By Desmond and Eva
    
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/* <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
