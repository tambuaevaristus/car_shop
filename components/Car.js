import React from "react";

export default function Car() {
  return (
    // <div className="col-lg-4 p-3 py-4 col-md-4 col-12">
     
            <div class="col-md-8 col-lg-6 col-xl-4 my-3">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://img.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg?w=2000&t=st=1680368855~exp=1680369455~hmac=6256e9391f6a7c65245f0f538e0d4fbbd2a02cc457adf30d65d64b89f91ffde0"
                    class="img-fluid"
                    alt="Laptop"
                  />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" class="text-dark">
                          Dell Xtreme 270
                        </a>
                      </p>
                      <p class="small text-muted">Laptops</p>
                    </div>
                    <div>
                      <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p class="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <p>
                      <a href="#!" class="text-dark">
                        $3,999
                      </a>
                    </p>
                    <p class="text-dark">#### 8787</p>
                  </div>
                  <p class="small text-muted">VISA Platinum</p>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  
                    <button type="button" class="btn btn-primary">
                      Place a Bit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
  );
}
