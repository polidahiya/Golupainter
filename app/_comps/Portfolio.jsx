import React from "react";

const Portfolio = () => {
  const projects = [
    { id: 1, image: "https://urbanfryhomes.com/wp-content/uploads/2021/07/URBANFRY-HOMES-DINING-6-SEATS-37S-6-815.webp", title: "Modern Dining Table" },
    { id: 2, image: "https://kuberfurniture.com/wp-content/uploads/2024/08/2-Door-Solid-Sheesham-Wood-Wardrobe-6-1.png", title: "Vintage Wardrobe" },
    { id: 3, image: "https://urbanfryhomes.com/wp-content/uploads/2022/08/Urban-Chair.jpg", title: "Elegant Chair Set" },
  ];

  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold  text-center mb-8">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
