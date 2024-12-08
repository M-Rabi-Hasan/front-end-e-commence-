import React from "react";
import { FaTruck, FaRegMoneyBillAlt, FaMedal, FaRegClock } from "react-icons/fa";

const ShopexOfferSection: React.FC = () => {
  // Feature data
  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-3xl text-pink-500" />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      icon: <FaRegMoneyBillAlt className="text-3xl text-pink-500" />,
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      icon: <FaMedal className="text-3xl text-pink-500" />,
      title: "Quality Assurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      icon: <FaRegClock className="text-3xl text-pink-500" />,
      title: "Quick Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        What Shopex Offer!
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            {/* Icon */}
            <div className="mb-4">{feature.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800">{feature.title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopexOfferSection;
