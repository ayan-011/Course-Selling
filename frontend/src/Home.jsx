import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Popular from "./components/Popular"; 
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer"; 
import Features from "./components/Features";

  
const Home = () => (
  <div className="min-h-dvh bg-cream text-neutral-900">
    <Nav />
    <Hero />
    <Popular />
    <Features />
    <Banner />
    <Stats />
    <Testimonial />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

export default Home;
