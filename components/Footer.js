import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Address</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>Molyko, Buea
                Cameroon
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+237654297746
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>topbids@gmail.com
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Opening Hours</h4>
              <h6 class="text-light">Monday - Friday:</h6>
              <p class="mb-4">09.00 AM - 09.00 PM</p>
              <h6 class="text-light">Saturday - Sunday:</h6>
              <p class="mb-0">07.00 AM - 12.00 PM</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Brands</h4>
              <a class="btn btn-link" href="">
                 Bughatti Veyron
              </a>
              <a class="btn btn-link" href="">
                Toyota
              </a>
              <a class="btn btn-link" href="">
                Mercedes bennz
              </a>
              <a class="btn btn-link" href="">
                Range Rover
              </a>
              <a class="btn btn-link" href="">
                Lamborghini
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Newsletter</h4>
              <p>Please sign up for newsletter.</p>
              <div class="position-relative mx-auto" >
                <input
                  class="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom " href="#">
                  Topbids
                </a>
                   All Right Reserved. Designed By{" Topbids designers "}
    
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
