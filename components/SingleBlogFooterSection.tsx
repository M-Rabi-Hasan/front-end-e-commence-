import React from "react";

const SingleBlogFooterSection: React.FC = () => {
  const comments = [
    {
      id: 1,
      author: "Sapien ac",
      date: "Jan 09 2020",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ali in vitae rutrum vulputate consectetur.",
      image: "/blogpage-9.png", 
    },
    {
      id: 2,
      author: "Augue conva",
      date: "Aug 18 2020",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ali in vitae rutrum vulputate consectetur.",
      image: "/blogpage-10.png", 
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-16 py-12 space-y-12">
      {/* Previous and Next Post */}
      <div className="flex justify-between items-center text-gray-500">
        <a
          href="#"
          className="hover:text-pink-500 flex items-center space-x-2"
        >
          <span className="text-sm">← Previous Post</span>
        </a>
        <a
          href="#"
          className="hover:text-pink-500 flex items-center space-x-2"
        >
          <span className="text-sm">Next Post →</span>
        </a>
      </div>

      {/* Comments Section */}
      <div className="space-y-8">
        <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <img
              src={comment.image}
              alt={comment.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-gray-800 font-medium">{comment.author}</h4>
              <span className="text-gray-500 text-sm">{comment.date}</span>
              <p className="text-gray-600 mt-2">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">Leave a Reply</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Write Your Email*"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <textarea
          placeholder="Write your comment*"
          rows={4}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="saveInfo" className="focus:ring-pink-500" />
          <label htmlFor="saveInfo" className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
          Continue Shopping
        </button>
      </div>

      {/* Footer Logos */}
      <div className="mt-12 text-center">
        <img
          src="/newbanner-2.png" 
          alt="Logos"
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default SingleBlogFooterSection;
