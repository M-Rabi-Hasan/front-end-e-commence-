import React from "react";
import Image from "next/image";

const ClientSaySection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Selina Gomez",
      position: "CEO At Webecy Digital",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
      images: [
        "/aboutuus-1.png", 
        "/aboutus-2.png",
        "/aboutus-3.png",
      ],
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 ">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Client Say!</h2>

      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="text-center bg-white rounded-lg shadow-lg py-8 px-6 max-w-4xl mx-auto"
        >
          {/* Client Images */}
          <div className="flex justify-center space-x-4 mb-6">
            {testimonial.images.map((image, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500"
              >
                <Image
                  src={image}
                  alt={`Client ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Client Name and Position */}
          <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{testimonial.position}</p>

          {/* Client Feedback */}
          <p className="text-gray-600 leading-relaxed">{testimonial.feedback}</p>

          {/* Dotted Line Navigation */}
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`h-2 w-6 rounded-full ${
                  index === 0 ? "bg-pink-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClientSaySection;
