import React from "react";

const loginpage: React.FC = () => {
  return (
    <section className="py-12">
      {/* Breadcrumb */}
      <div className="container bg-purple-50 max-h-48  mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            My Account
          </h1>
          <div className="">
            <span>Home.</span>
            <span>Pages.</span>
            <span className="text-pink-600 text-sm">My Account</span>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col p-4 justify-center items-center bg-gray-50 px-4">
        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 px-6 py-4 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please login using account detail below.
          </p>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-pink-500 text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
            >
              Sign In
            </button>
          </form>

          {/* Signup Redirect */}
          <p className="text-sm text-gray-600 mt-6">
            Don’t have an Account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Create account
            </a>
          </p>
        </div>

        {/* Footer Logo */}
        <div className="mt-12 flex justify-center">
          <img
            src="/newbanner-2.png"
            alt="Footer Image"
            className="h-16 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default loginpage;
