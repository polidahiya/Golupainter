import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center max-w-2xl px-4 sm:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Expert <span className="text-theme">Painting</span>,{" "}
            <span className="text-theme">Wood Polishing</span>, and{" "}
            <span className="text-theme">Furniture Coloring</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            Revive and transform your furniture with our specialized services
            for homes and businesses.
          </p>
          <a
            href="#services"
            className="px-6 py-3 text-lg font-medium text-black bg-theme rounded hover:bg-yellow-600 transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
