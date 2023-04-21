import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>Great SOPPO Buea, Cameroon</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 08.00 AM - 05.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small><a href="https://wa.me:+237676814364">+ 237 676814364</a> </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-0" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          href="/"
          className="navbar-brand text d-flex align-items-center px-4 px-lg-5"
        >
SAMS Barbing
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="nav-item nav-link text-primary active">
              Home
            </Link>
            <Link href="#about" className="nav-item nav-link text-primary">
              About
            </Link>
            <Link href="#Services" className="nav-item nav-link text-primary">
              Services{" "}
            </Link>
            <Link href="/" className="nav-item nav-link text-primary">
              View Appointments
            </Link>

            <Link href="#contact" className="nav-item nav-link text-primary">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
