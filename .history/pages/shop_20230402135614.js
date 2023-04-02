import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/Shop";
import React from "react";

export default function shop() {
  const usersCollectionRef = collection(db, 'users')

  return (
    <div>
      <Header />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Footer />
    </div>
  );
}
