import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Another from "@/components/Another";
import CarList from "@/components/CarList";
import Script from "next/script";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
      <div>
        <Header />
        <Banner />
        <Services />
        <CarList />
        <Another />


        <Footer />
      </div>

      {/* <Script src="https://code.jquery.com/jquery-3.4.1.min.js" /> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
      <Script src="lib/wow/wow.min.js" />
      <Script src="lib/easing/easing.min.js" />
      <Script src="lib/waypoints/waypoints.min.js" />
      <Script src="lib/counterup/counterup.min.js" />
      <Script src="lib/owlcarousel/owl.carousel.min.js" />
      <Script src="lib/tempusdominus/js/moment.min.js" />
      {/* <Script src="lib/tempusdominus/js/moment-timezone.min.js" /> */}
      <Script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" />
    </>
  );
}
