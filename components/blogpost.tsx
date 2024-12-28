import React from "react";

const SingleBlogPage1: React.FC = () => {
  return (
    <div className="container mx-auto  py-12 flex flex-col lg:flex-row gap-8">
      {/* Main Blog Content */}
      <div className="w-full lg:w-2/3 space-y-12">
        {/* Paragraph Section */}
        <div className="text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.
          </p>
        </div>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-pink-500 pl-4 text-gray-600 italic text-lg">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat."
        </blockquote>

        {/* Video Section */}
        <div className="relative">
          <img
            src="/vedio-thumb.png" 
            alt="Video Thumbnail"
            className="w-full rounded-lg"
          />
          <a
            href="https://youtu.be/ZlbHdYMWSOA?si=RXXcV9xePwy0L3rU" 
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center">
              ▶
            </div>
          </a>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/blogpage-4.png" 
            alt="Image 1"
            className="w-full rounded-lg"
          />
          <img
            src="/blogpage-4.png" 
            alt="Image 2"
            className="w-full rounded-lg"
          />
        </div>

        {/* Final Paragraph Section */}
        <div className="text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-12">
        {/* Sale Product Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Sale Product</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between items-center text-gray-600 hover:text-pink-500">
              <span>Elit ornare in enim mauris.</span>
              <span>Aug 09 2020</span>
            </li>
            <li className="flex justify-between items-center text-gray-600 hover:text-pink-500">
              <span>Viverra pulvinar et enim.</span>
              <span>Aug 09 2020</span>
            </li>
            <li className="flex justify-between items-center text-gray-600 hover:text-pink-500">
              <span>Mattis varius donec fdsfd</span>
              <span>Aug 09 2020</span>
            </li>
          </ul>
        </div>

        {/* Offer Product Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Offer Product</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src="/blogpage-5.png" 
                alt="Offer 1"
                className="w-full rounded-lg"
              />
              <div className="text-gray-600 text-sm mt-2">
                Duis lectus est.
                <br />
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div>
              <img
                src="/blogpage-6.png" 
                alt="Offer 2"
                className="w-full rounded-lg"
              />
              <div className="text-gray-600 text-sm mt-2">
                Sed placerat.
                <br />
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div>
              <img
                src="/blogpage-7.png" 
                alt="Offer 3"
                className="w-full rounded-lg"
              />
              <div className="text-gray-600 text-sm mt-2">
                Netus proin.
                <br />
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div>
              <img
                src="/blogpage-8.png" 
                alt="Offer 4"
                className="w-full rounded-lg"
              />
              <div className="text-gray-600 text-sm mt-2">
                Platea in.
                <br />
                <span>$12.00 - $15.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Follow</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full"
            >
              F
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-pink-600 text-white flex items-center justify-center rounded-full"
            >
              T
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-yellow-600 text-white flex items-center justify-center rounded-full"
            >
              I
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SingleBlogPage1;
