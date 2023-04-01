import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function car() {
  return (
    <div>
      <Header />
      <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="card">
              <div class="row">
                <div class="col-md-6">
                  <div class="images p-3">
                    <div class="text-center ">
                      {" "}
                      <img
                        id="main-image"
                        src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?w=740&t=st=1680364469~exp=1680365069~hmac=7b8506b845b030ef94125ce1a7be04e728866b34d48de8af9c6125ba32193c3d"
                        width="500"
                      />
                    </div>
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="product p-4">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center">
                        {" "}
                        <i class="fa fa-long-arrow-left"></i>{" "}
                        <span class="ml-1">Back</span>{" "}
                      </div>{" "}
                      <i class="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div class="mt-4 mb-3">
                      {" "}
                      <span class="text-uppercase text-muted brand">
                        Orianz
                      </span>
                      <h5 class="text-uppercase">Mens slim fit t-shirt</h5>
                      <div class="price d-flex flex-row align-items-center">
                        {" "}
                        <span class="act-price">$20</span>
                        <div class="ml-2">
                          {" "}
                          <small class="dis-price">$59</small>{" "}
                          <span>40% OFF</span>{" "}
                        </div>
                      </div>
                    </div>
                    <p class="about">
                      Shop from a wide range of t-shirt from orianz. Pefect for
                      your everyday use, you could pair it with a stylish pair
                      of jeans or trousers complete the look.
                    </p>
                    <div class="sizes mt-5"></div>
                    <div class="cart mt-4 align-items-center">
                      {" "}
                      <button class="btn btn-danger text-uppercase mr-2 px-4">
                        Add to cart
                      </button>{" "}
                      <i class="fa fa-heart text-muted"></i>{" "}
                      <i class="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
