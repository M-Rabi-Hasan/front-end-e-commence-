import React from "react";
import SingleBlogPage1 from "../../../../components/blogpost";
import SingleBlogFooterSection from "../../../../components/SingleBlogFooterSection";

const BlogPost = ({ params }) => {
  const { id } = params;

  const blogPosts = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "Aug 09 2020",
      author: "Sufi Axsion",
      image: "/blogpage-1.png",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "Aug 10 2020",
      author: "Jane Doe",
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

  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-800">Blog post not found</h1>
        <p className="text-gray-500">
          The blog post you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Page Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-500">
          Home . Pages . <span className="text-pink-500">Blog</span>
        </p>
      </div>

      {/* Blog Content */}
      <div className="lg:flex gap-12">
        <div className="flex-1">
          <img src={post.image} alt={post.title} className="w-full rounded-lg mb-8" />
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="text-pink-500">{post.author}</span>
              <span>{post.date}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{post.description}</p>
          </div>
        </div>
      </div>

      {/* Additional Blog Content */}
      <SingleBlogPage1 />

      {/* Footer Section */}
      <SingleBlogFooterSection />
    </div>
  );
};

export default BlogPost;
