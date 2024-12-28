import React from 'react'

const FAQPage = () => {
  const faqs = [
    {
      question: "Eu dictumst cum at sed euismod condimentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Magna bibendum est fermentum eros.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Odio muskana hak eris conseekin sceleton?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Elit id blandit sabara boi velit gua mara?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <div className='mt-8'>
      <div className="container bg-purple-50 max-h-48 mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            FAQ
          </h1>
          <div>
            <span>Home.</span>
            <span>Pages.</span>
              <span className="text-pink-600 text-sm">Faq</span>
          </div>
        </div>
        </div>
        <div className="container mx-auto px-4 lg:px-16 py-12 space-y-12">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">General Information</h1>
      </div>

      {/* FAQ & Ask a Question Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Ask a Question Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Ask a Question</h2>
          <form className="space-y-6 mt-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Type Your Message*"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>

      {/* Footer with Centered Image */}
      <div className="mt-12 flex justify-center">
        <img
          src="/newbanner-2.png" 
          alt="Footer"
          className="h-16 object-contain"
        />
      </div>
    </div>
    </div>
  )
}

export default FAQPage