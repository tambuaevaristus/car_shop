import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-map-marker-alt text-primary me-2"></small>
              <small>Great SOPPO Buea, Cameroon</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-3">
              <small class="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-phone-alt text-primary me-2"></small>
              <small>+237 676814364</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center">
              <a class="btn btn-sm-square bg-white text-primary me-1" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-1" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-1" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-0" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="index.html"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 class="m-0 text-danger">
            <i class="fa fa-car me-3"></i>TopBits
          </h2>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" class="nav-item nav-link active">
              Home
            </Link>
            <Link href="#about" class="nav-item nav-link">
              About
            </Link>
            <Link href="#services" class="nav-item nav-link">
              Services
            </Link>
            <Link href="/shop" class="nav-item nav-link">
              Shop
            </Link>
          
            <Link href="/contact" class="nav-item nav-link">
              Contact
            </Link>
          </div>
          <a
            href=""
            class="btn btn-danger py-4 px-lg-5 rounded-0 d-none d-lg-block"
          >
            Register<i class="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}
