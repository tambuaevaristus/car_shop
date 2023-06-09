import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Bid() {
    const [car, setCar] = useState(null);


    const router = useRouter();
    auth.onAuthStateChanged((user)=>{
        if(user){

        }else{
            router.push("/login")
        }
    })
    const id = router.asPath.split("/cars/")[1];
  
    useEffect(() => {
      (async () => {
        if (!id) return false;
        const carRef = doc(db, "Cars", id);
        const carr = await getDoc(carRef);
        console.log(car);

        if (carr.exists()) {
          const data = carr.data();
          setCar(data);
        } else {
          console.log("no data");
        }
      })();
    }, [id]);

  
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
      <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="">
              <div class="row">
                <div class="col-md-6 my-auto">
                  {/* <div class="images bg-dark"> */}{" "}
                  <img
                    id="main-image"
                    className="w-100 bg-cover"
                    src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?w=740&t=st=1680364469~exp=1680365069~hmac=7b8506b845b030ef94125ce1a7be04e728866b34d48de8af9c6125ba32193c3d"
                    width="400"
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body pb-0 px-4">
                    <div class="d-flex py-4 justify-content-between">
                      <h3>Toyota</h3>
                    </div>

                  
                    {/* <hr class="my-0" /> */}
                    <div class="card-body">
                     
                      <div class="d-flex justify-content-between ">
                        <p className="">V8</p>
                        <p class="text-dark">Hybrid</p>
                        <p class="text-dark">4wheel</p>
                        <p class="text-dark">toyota</p>
                        <p class="text-dark">Dizel</p>

                      </div>
                     
                    </div>
                    <div class="d-flex justify-content-between ">
                      <p className="">Last Bids</p>
                      <p class="text-dark">7000000FCFA </p>
                      <s className="text-danger">6500000FCFA</s>
                    </div>

                   <p className="fw-bold">Place Bid</p>
                    
                    <div class="sizes"></div>
                    <div class="cart d-flex mt-1 align-items-center">
                      <input type="text" className="form-control "  placeholder="Enter Amount"/>
                     
                      <Link href="/success" class="btn btn-danger text-uppercase mx-2 px-4"> Bid</Link>

                    
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
