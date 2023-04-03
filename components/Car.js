import Link from "next/link";
import React from "react";

export default function Car({bidding, engineType, fuelType, image, mileage, model , highest}) {
  return (
    // <div className="col-lg-4 p-3 py-4 col-md-4 col-12">

    <div class="col-md-8 col-lg-4 col-xl-4 my-3">
        <div
          class="bg-image border rounded hover-overlay ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img
            src={image[0]}
            width="100%"
            height="300px"
            className="border"
            alt="Laptop"
          />
          {/* <a href="#!">
                    <div class="mask"></div>
                  </a> */}
        
        <div class="card-body pb-0 px-5">
          <div class="d-flex py-4 justify-content-between">
            <h3>{model}</h3>
          </div>

          <div class="d-flex justify-content-between ">
            <p className="">Model</p>
            <p class="text-dark">{model}</p>
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
              <p class="text-dark">{highest}FCFA</p>
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
