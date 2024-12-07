import React from "react";
import Navbar from "./_comps/Navbar";
import ContactForm from "./_comps/Contactform";
import Footer from "./_comps/Footer";
import HeroSection from "./_comps/Herosection";
import Portfolio from "./_comps/Portfolio";
import Services from "./_comps/Services";

function page() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default page;
