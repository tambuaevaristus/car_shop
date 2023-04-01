import Link from "next/link";
import React from "react";

export default function Car() {
  return (
    // <div className="col-lg-4 p-3 py-4 col-md-4 col-12">

    <div class="col-md-8 col-lg-4 col-xl-4 my-3">
        <div
          class="bg-image border rounded hover-overlay ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://img.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg?w=2000&t=st=1680368855~exp=1680369455~hmac=6256e9391f6a7c65245f0f538e0d4fbbd2a02cc457adf30d65d64b89f91ffde0"
            class="img-fluid"
            alt="Laptop"
          />
          {/* <a href="#!">
                    <div class="mask"></div>
                  </a> */}
        
        <div class="card-body pb-0 px-5">
          <div class="d-flex py-4 justify-content-between">
            <h3>Toyota Corola</h3>
          </div>

          <div class="d-flex justify-content-between ">
            <p className="">Model</p>
            <p class="text-dark">Toyota 2015</p>
          </div>

          {/* <hr class="my-0" /> */}
          <div class="card-body">
            <div class="d-flex justify-content-between ">
              <p className="">Rating</p>
              <div class="d-flex flex-row justify-content-end mt-1 text-danger">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>{" "}
            </div>
            <div class="d-flex justify-content-between ">
              <p className="">Highest bid</p>
              <p class="text-dark">2000,000XAF</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <Link href="/cars/x" class="btn mx-auto text-danger ">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
