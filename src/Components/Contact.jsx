import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-[#1f1e24] text-white p-8">
      <div className="mb-8">
        <Link 
          to="/" 
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#2d2d32] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#2d2d32] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Message</label>
                <textarea
                  className="w-full bg-[#2d2d32] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="bg-[#2d2d32] p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-xl font-medium">Address</h3>
                <p className="text-gray-300">
                  123 Streaming Street<br />
                  Movie City, MC 12345
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Phone</h3>
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Email</h3>
                <p className="text-gray-300">info@PopcornBox.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-red-600">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-red-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
