import Link from "next/link";
import React from "react";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      date: "Aug 09 2020",
      author: "Sufi Axsion",
      image: "/blogpage-1.png",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      date: "Aug 09 2020",
      author: "Sufi Axsion",
      image: "/blogpage-2.png",
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      date: "Aug 09 2020",
      author: "Sufi Axsion",
      image: "/blogpage-3.png",
    },
  ];

  const sidebarContent = {
    categories: [
      { name: "Hobbies", count: 14 },
      { name: "Women", count: 19 },
      { name: "Men", count: 19 },
    ],
    recentPosts: [
      { title: "A blog embedded font", date: "Aug 09 2020" },
      { title: "A blog embedded font", date: "Aug 09 2020" },
      { title: "A blog embedded font", date: "Aug 09 2020" },
    ],
    saleProducts: [
      { name: "Dolo set geneti", price: "$12.00 - $15.00" },
      { name: "Netus proin", price: "$12.00 - $15.00" },
    ],
    tags: ["General", "Atsani", "Bibassu", "Nulla"],
  };

  return (
    <div className="container mx-auto py-12">
      {/* Page Title */}
      <div className="container bg-purple-50 max-h-48  mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Blog
          </h1>
          <div className="">
            <span>Home.</span>
            <span>Pages.</span>
              <span className="text-pink-600 text-sm">Blog</span>
          </div>
        </div>
        </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:mt-8 mt-3">
        {/* Blog Posts */}
        <div className="flex-1 space-y-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mt-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{post.description}</p>
                  <span className="text-pink-500 hover:underline font-medium mt-4 inline-block">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-8">
          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Search</h3>
            <input
              type="text"
              placeholder="Search for posts"
              className="mt-4 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              {sidebarContent.categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-600 hover:text-pink-500"
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Posts
            </h3>
            <ul className="mt-4 space-y-2">
              {sidebarContent.recentPosts.map((post, index) => (
                <li key={index} className="text-gray-600 hover:text-pink-500">
                  {post.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Sale Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Sale Product
            </h3>
            <ul className="mt-4 space-y-4">
              {sidebarContent.saleProducts.map((product, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-600 hover:text-pink-500"
                >
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
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

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {sidebarContent.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-pink-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-pink-500 hover:text-white transition">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-pink-500 hover:text-white transition">
          3
        </button>
      </div>

      {/* Footer Logos */}
      <div className="mt-12 text-center">
        <img src="/newbanner-2.png" alt="Logos" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default BlogPage;
