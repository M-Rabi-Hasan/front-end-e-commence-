"use client";
import React, { useState, useEffect } from "react";

const ProductDescriptionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [isMobile, setIsMobile] = useState(false);

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 bg-gray-50">
      {/* Tabs */}
      <div className="hidden sm:flex justify-center space-x-8 border-b border-gray-200 pb-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium ${
              activeTab === tab ? "text-blue-800 underline" : "text-gray-500"
            } transition-colors duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdown for Mobile */}
      <div className="sm:hidden mb-8">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      {/* Tab Content */}
      {activeTab === "Description" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Varius tempor.
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat lorem diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverra.
          </p>
        </div>
      )}

      {activeTab === "Additional Info" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Here are some additional details about the product:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="text-gray-600">Material: 100% Hardwood</li>
            <li className="text-gray-600">Dimensions: 40 x 20 x 18 inches</li>
            <li className="text-gray-600">Weight: 15 lbs</li>
            <li className="text-gray-600">Assembly Required: No</li>
          </ul>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Reviews
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-gray-600">
                <strong>John Doe:</strong> Excellent product, very comfortable
                and stylish!
              </p>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Jane Smith:</strong> I love this chair! It fits
                perfectly in my living room.
              </p>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Video" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Video
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            {!isMobile ? (
              <iframe
                src="https://www.youtube.com/embed/YasIiSfxg5w"
                title="Product Video"
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            ) : (
              <a
                href="https://www.youtube.com/embed/YasIiSfxg5w"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600 transition"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDescriptionSection;
