import React from "react";
import ServiceCard from "./Servicecard";

const Services = () => {
  const services = [
    {
      title: "Furniture Painting",
      description: "Give your furniture a fresh, modern look with our premium painting services.",
      image: "https://cdn.apartmenttherapy.info/image/upload/v1711034975/at/art/photo/2024/2024-03/2024-03-how-to-paint-furniture/how-to-paint-furniture-218.jpg",
    },
    {
      title: "Wood Polishing",
      description: "Enhance the natural beauty of your solid wood furniture with expert polishing.",
      image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/1/wood-polishing_0_1200.jpg",
    },
    {
      title: "Furniture Coloring",
      description: "Add vibrant, durable colors to your furniture that suit your style.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwtylU6SDi9wd3XlzQkj1mAneG8SJkMW9tkm2_xEJnfXEveOSC15Npi77e0GRWK3K0Qw&usqp=CAU",
    },
  ];

  return (
    <section id="services" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
