import React from "react";
import { auth } from "/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const provider = new GoogleAuthProvider();

  const googleAuth = () => {
    console.log("in func");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("user =>", user);
        router.back();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error =>", errorMessage);
      });
  };

  return (
    <div>
      <section className="h-100 gradient-form bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row">
                  <div className="col-lg-6 d-flex d-none d-lg-flex align-items-center gradient-custom-2">
                    <img
                      src="https://img.freepik.com/free-photo/automobile-details-close-up-new-car_1303-26484.jpg?w=1380&t=st=1680446446~exp=1680447046~hmac=027e379754ca3f6fcd2a927b34f31c9baeab6b32a44428b4f7d57074f4bd6825"
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <Link href="/">
                        <div className="text-center">
                          <img
                            src="/img/Topbid logo 3ai.png"
                            width="150px"
                            alt="logo"
                          />
                        </div>
                      </Link>

                      <form className="pt-5">
                        <p className="fw-bold mt-3">
                          Please login to your account
                        </p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Enter email address"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-danger fa-lg mb-3 form-control"
                            type="button"
                          >
                            Log in
                          </button>

                          <button
                            className="btn btn-danger fa-lg mb-3 form-control"
                            type="button"
                            onClick={googleAuth}
                          >
                            Signin with Google
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Dont have an account?</p>
                          <button type="button" className="btn btn-outline-danger">
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
