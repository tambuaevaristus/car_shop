import Link from "next/link";
import React from "react";
import ShopPage from "./ShopPage";

export default function Shop() {
  return (
    <section>
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://images.cars.com/cldstatic/wp-content/uploads/bmw-x1-2023-01-exterior-front-angle-scaled.jpg"
                        class="w-100"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>4Runner Budox</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>toyota 2015</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>Dizeil Engine</span>
                      <span class="text-primary"> • </span>
                      <span>5km /h</span>
                      <span class="text-primary"> • </span>
                      <span>
                        V8
                        <br />
                      </span>
                    </div>

                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class=" align-items-center mb-1">
                      <h6 class="text-success">highest bid</h6>

                      <h4 class="mb-1 me-1">7000,000FCFA</h4>
                      <span class="text-danger">
                        <s>6500,000FCFA</s>
                      </span>
                    </div>
                    <div class="d-flex flex-column mt-4">
                      <Link
                        href="/car/x"
                        class="btn btn-primary btn-sm"
                        type="button"
                      >
                        Details
                      </Link>
                      <Link
                        href="/bid/xx"
                        class="btn btn-outline-primary btn-sm mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://images.cars.com/cldstatic/wp-content/uploads/audi-q8-etron-2024-exterior-oem-05.jpg"
                        class="w-100"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>TOYOTA Camry 2015</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>289</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span class="text-primary"> • </span>
                      <span>For men</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">$14.99</h4>
                      <span class="text-danger">
                        <s>$21.99</s>
                      </span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <Link
                        href="/bid/xx"
                        class="btn btn-outline-primary btn-sm mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src="https://www.topgear.com/sites/default/files/news-listicle/image/buyers_guide_-_rolls_royce_wraith_2014_-_front_quarter_2.jpg"
                        class="w-100"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>Lambogini</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>145</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span class="text-primary"> • </span>
                      <span>For women</span>
                      <span class="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">$17.99</h4>
                      <span class="text-danger">
                        <s>$25.99</s>
                      </span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <Link
                        href="/bid/xx"
                        class="btn btn-outline-primary btn-sm mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ShopPage />
        </div>
      </div>
    </section>
  );
}
