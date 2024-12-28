import React from "react";
import Image from "next/image";

const OurFeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "/about-1.png", 
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      icon: "/about-2.png", 
      title: "100% Cash Back",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      icon: "/about-3.png", 
      title: "Quality Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      icon: "/about-4.png", 
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Features</h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeaturesSection;
