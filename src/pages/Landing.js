import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Landing() {
  return (
    <div className="gradient-bg-welcome w-full h-screen">
      <Header />
      <h1 className="md:text-9xl text-5xl  pt-60 text-center heading text-white">
        BLOCK TICKET
      </h1>
      <p className="text-white md:text-2xl text-lg opacity-50 text-center mt-5 desc">
        Revolutionizing event management and decentralized ticketing with NFTs
      </p>
      <Footer />
    </div>
  );
}
