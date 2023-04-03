import Link from "next/link";
import React, { useState } from "react";
import amount from "amount";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Shop({ cars }) {
  const [carStore, setCarsStore] = useState(cars);

  async function sortByManufactureDate(date) {
    if (date != "Manufacture Date") {
      const fiteredCars = cars.filter((car) => car.manufacture_date == date);
      setCarsStore(fiteredCars);
    } else {
      setCarsStore(cars);
    }
  }
  async function sortByModel(model) {
    if (model != "By Model") {
      const fiteredCars = cars.filter((car) => car.model == model);
      setCarsStore(fiteredCars);
    } else {
      setCarsStore(cars);
    }
  }
  async function sortByFuelType(fuel_type) {
    if (fuel_type != "By Fuel Type") {
      const fiteredCars = cars.filter((car) => car.fuel_type == fuel_type);
      setCarsStore(fiteredCars);
    } else {
      setCarsStore(cars);
    }
  }
  async function sortByMileage(mileage) {
    if (mileage != "By Mileage") {
      const fiteredCars = cars.filter((car) => car.mileage == mileage);
      setCarsStore(fiteredCars);
    } else {
      setCarsStore(cars);
    }
  }

  function secondHighest(car) {
    const max = Math.max(...car.bidding.map((elem) => +elem.amount));
    if (car.bidding.length == 1) {
      return max;
    } else if (car.bidding.length > 1) {
      const amts = car.bidding.map((elem) => +elem.amount);
      return amts.sort((a, b) => b - a)[1];
    } else {
      return max;
    }
  }
  return (
    <section>
      <div className="py-5"></div>
      <div className="py-3"></div>
      <div className="advance-search col-10 px-5 container mx-auto py-5 border ">
        <form action="#" className="">
          <div className="row mx-auto">
            <div className="col-lg-3 col-md-3">
              <div className="block d-flex">
                <select className="form-select" onChange={(e) => {

                  sortByManufactureDate(e.target.value)

                }} aria-label="Default select example">
                  <option selected>Manufacture Date</option>
                  {cars.map((car) => (
                    <option key={car.id}>{car.manufacture_date}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="block d-flex">
                <select className="form-select" onChange={(e)=>{
                  sortByModel(e.target.value)
                }} aria-label="Default select example">
                  <option >By Model</option>
                  {cars.map((car) => <option key={car.id} >{car.model}</option>)}
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="block d-flex">
                <select className="form-select" onChange={(e)=>{
                  sortByFuelType(e.target.value)
                }} aria-label="Default select example">
                  <option selected>By Fuel Type</option>
                  {cars.map((car) => (
                    <option key={car.id}>{car.fuel_type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="block d-flex">
                <select className="form-select" onChange={(e)=>{
                  sortByMileage(e.target.value)
                }} aria-label="Default select example">
                  <option selected>By Mileage</option>
                  {cars.map((car) => (
                    <option key={car.id}>{car.mileage}</option>
                  ))}
                </select>
                <button className="btn btn-danger mx-2">SEARCH</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container py-5">
        <div className="row justify-conten ">
          {carStore.map((car) => (
            <div key={car.id} className="col-lg-6 " >
              <div className="row border my-4 m-1">
                <div className="  col-6">
                  <img src={car.images[0]} height="100%" width="100%" className="w-100" />
                </div>
                <div className="col-5 py-3">
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
                    
                  </div>

                  <div className="col-md-12">
                    <div className=" align-items-center mb-1">
                      <h6 className="text-secondary">highest bid</h6>

                      <h4 className="mb-1 me-1">
                        {amount(
                          Math.max(...car.bidding.map((elem) => +elem.amount)),
                          ",",
                          ","
                        )}
                        XFA
                      </h4>
                      <span className="text-danger">
                        <s>{amount(secondHighest(car), ",", ",")}XFA</s>
                      </span>
                    </div>
                    <div className=" mt-4">
                      <Link
                        href={"/cars/"+car.id}
                        className="btn btn-danger w-100 btn-block"
                        type="button"
                      >
                        Details
                      </Link>
                      <br />
                      <Link
                        href={"/bid/"+car.id}
                        className="btn btn-outline-danger w-100 btn-block mt-2"
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
