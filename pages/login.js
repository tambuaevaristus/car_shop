import React from "react";

export default function login() {
  return (
    <div>
      <section class="h-100 gradient-form bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row">
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <img
                      src="https://img.freepik.com/free-photo/automobile-details-close-up-new-car_1303-26484.jpg?w=1380&t=st=1680446446~exp=1680447046~hmac=027e379754ca3f6fcd2a927b34f31c9baeab6b32a44428b4f7d57074f4bd6825"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="/img/Topbid logo 3ai.png"
                          width="100px"
                          alt="logo"
                        />
                      </div>

                      <form className="pt-5">
                        <p className="fw-bold mt-3">
                          Please login to your account
                        </p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Enter email address"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                          />
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-danger fa-lg mb-3 form-control"
                            type="button"
                          >
                            Log in
                          </button>

                          <button
                            class="btn btn-danger fa-lg mb-3 form-control"
                            type="button"
                          >
                            Signin with Google
                          </button>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Dont have an account?</p>
                          <button type="button" class="btn btn-outline-danger">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
