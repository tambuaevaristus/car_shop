import React, { useState } from "react";

export default function Form() {
  const  [show, setShow]=useState(false)
  return (
    <div className="row container p-5" id="form">
      <div className="col-lg-6">
        <img
          src="https://img.freepik.com/free-photo/young-african-american-man-visiting-barbershop_1157-47689.jpg?w=740&t=st=1682089774~exp=1682090374~hmac=4e317721f1816650043e6ac8d66750d5c80f1fd453e11479f4f55a1837c692ff"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="container col-lg-6">
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Name
            </label>
            <input type="text" id="form4Example1" class="form-control" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Phone
            </label>
            <input type="text" id="form4Example1" class="form-control" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Select date
            </label>
            <input type="date" id="form4Example1" class="form-control" />
          </div>

          <label class="form-label" for="form4Example1">
            Available Slots
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Available Slots</option>
            <option value="1">8am - 9am</option>
            <option value="2">1pm-2pm</option>
            <option value="3">3pm-4pm</option>
          </select>
          <br />
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">
              Hair Style
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Low cut</option>
              <option value="1">Push Back</option>
              <option value="2">Ponk</option>
              <option value="3">Boo Zero</option>
            </select>
          </div>


          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label class="form-check-label" for="form4Example4">
              Send me a copy of this message
            </label>
          </div>

          <button type="submit" onClick={()=>setShow(true)} class="btn btn-primary btn-block mb-4">
            Book Appointment
          </button>
         { show? <h1 className="">
            Appointment successfully Booked
          </h1>:<></>}
        </form>
      </div>


      
    </div>
  );
}
