import Link from "next/link";
import React from "react";
import amount from "amount";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export default function Shop({ cars }) {
  const carsRef = collection(db, "Cars");

   async function sortByManufactureDate(date) {
    const q = query(carsRef, where("manufacture_date", "==", date));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc);
    });

  }

  function secondHighest(car) {
    const max = Math.max(...car.bidding.map((elem) => +elem.amount))
    if (car.bidding.length == 1) {
      return max
    } else if (car.bidding.length > 1) {
      const amts = car.bidding.map((elem) => +elem.amount)
      return amts.sort((a, b) => b - a)[1]
    } else {
      return max
    }
  }
  return (
    <section>
      <div className="py-5"></div>
      <div className="py-3"></div>
      <div class="advance-search col-10 px-5 container mx-auto py-5 border ">
        <form action="#" className="">
          <div class="row mx-auto">
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" onChange={(e)=>{
                  if(e.target.value != "Manufacture Date"){
                    sortByManufactureDate(e.target.value)
                  }
                }} aria-label="Default select example">
                  <option selected>Manufacture Date</option>
                  {cars.map((car) => <option value="1">{car.manufacture_date}</option>)}
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  {cars.map((car) => <option value="1">{car.model}</option>)}
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Fuel Type</option>
                  {cars.map((car) => <option value="1">{car.fuel_type}</option>)}
                </select>
              </div>
            </div>

            <div class="col-lg-3 col-md-3">
              <div class="block d-flex">
                <select class="form-select" aria-label="Default select example">
                  <option selected>By Mileage</option>
                  {cars.map((car) => <option value="1">{car.mileage}</option>)}
                </select>
                <button class="btn btn-danger mx-2">SEARCH</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container py-5">
        {cars.map((car) =>
          <div key={car.id} className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body" />
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src={car.images[0]}
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{car.model}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>{car.manufacture_date}</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>{car.engine_type}</span>
                      <span className="text-primary"> • </span>
                      <span>{car.mileage}</span>
                      <span className="text-primary"> • </span>
                      <br />
                    </div>

                    <p className="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className=" align-items-center mb-1">
                      <h6 className="text-success">highest bid</h6>

                      <h4 className="mb-1 me-1">{amount(Math.max(...car.bidding.map((elem) => +elem.amount)), ",", ",")}XFA</h4>
                      <span className="text-danger">
                        <s>{amount(secondHighest(car), ",", ",")}XFA</s>
                      </span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link
                        href="/car/x"
                        className="btn btn-primary btn-sm"
                        type="button"
                      >
                        Details
                      </Link>
                      <Link
                        href="/bid/xx"
                        className="btn btn-outline-primary btn-sm mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section >
  );
}
