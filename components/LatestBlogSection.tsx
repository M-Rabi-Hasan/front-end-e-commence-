import React from "react";
import Image from "next/image";

const LatestBlogSection: React.FC = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/Latestblog-1.png", 
      link: "#",
    },
    {
      id: 2,
      author: "Surafuxion",
      date: "21 August, 2020",
      title: "Top essential trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/Latestblog-2.png",
      link: "#",
    },
    {
      id: 3,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top esssential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/Latestblog-3.png",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={300}
              className="w-full object-cover"
            />
            {/* Blog Content */}
            <div className="p-6">
              <div className="text-sm text-gray-500 flex items-center space-x-2 mb-2">
                <span className="text-pink-500 font-medium">{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-pink-500 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogSection;
