import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { db } from "@/firebase";
import { doc, getDoc } from "@firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Car() {
  const [car, setCar] = useState(null);
  const router = useRouter();
  const id = router.asPath.split("/cars/")[1];

  useEffect(() => {
    (async () => {
      if (!id) return false;
      const carRef = doc(db, "Cars", id);
      const carr = await getDoc(carRef);

      if (carr.exists()) {
        const data = carr.data();
        setCar(data);


      } else {
        console.log("no data")
      }
    })();
  }, [id]);

    var end = new Date('04/10/2023 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
      let now = new Date();
      var distance = end - now;
      if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown').innerHTML = days + 'days ';
      document.getElementById('countdown').innerHTML += hours + 'hrs ';
      document.getElementById('countdown').innerHTML += minutes + 'mins ';
      document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

// timer = setInterval(showRemaining,_second)
    return (
      <div>
        <Head>
          <title>Car Shop</title>
          <meta name="deScription" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&family=Ubuntu:wght@400;500&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
            rel="stylesheet"
          />

          <link href="lib/animate/animate.min.css" rel="stylesheet" />
          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />
          <link
            href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
            rel="stylesheet"
          />
        </Head>
        <Header />
        {car &&<div class="container mt-5 mb-5">
          <div id="countdown" className="w-100 text-center text-danger"></div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="">
                <div class="row">
                  <div class="col-md-6 my-auto">
                    {/* <div class="images bg-dark">{" "} */}
                    <img
                      id="main-image"
                      className="w-100 bg-cover"
                      src={car?.images[0]}
                      width="400"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body pb-0 px-4">
                      <div class="d-flex py-4 justify-content-between">
                        <h3>{car.model}</h3>
                      </div>

                      <div class="d-flex justify-content-between ">
                        <p className="">Model</p>
                        <p class="text-dark">
                          {car.model}
                          {car.maufacture_date}
                        </p>
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
                          <p class="text-dark">{car.highest}</p>
                        </div>
                        <div class="d-flex justify-content-between ">
                          <p className="">Engine Type</p>
                          <p class="text-dark">{car.engine_type}</p>
                        </div>
                        <div class="d-flex justify-content-between ">
                          <p className="">Fuel Type</p>
                          <p class="text-dark">{car.fuel_type}</p>
                        </div>
                        <div class="d-flex justify-content-between ">
                          <p className="">Mileage</p>
                          <p class="text-dark">{car.mileage}</p>
                        </div>
                      </div>

                      <p className="fw-bold">Description</p>

                      <p class="about">
                        Shop from a wide range of t-shirt from orianz. Pefect for
                        your everyday use, you could pair it with a stylish pair
                        of jeans or trousers complete the look.
                      </p>
                      <div class="sizes mt-5"></div>
                      <div class="cart mt-4 align-items-center">
                        {" "}
                        <Link
                          href="/bid/xx"
                          class="btn btn-danger text-uppercase mr-2 px-4"
                        >
                          Place a Bid
                        </Link>

                        <button
                          href="/bid/xx"
                          class="btn text-uppercase mr-2 px-4"
                          onClick={router.back}
                        >
                          Go Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

        <Footer />
      </div>
    );
  }
