import React from 'react';
import { Link } from 'react-router-dom';

function About() {
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
        <h1 className="text-4xl font-bold mb-8">About Popcorn Box</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Popcorn Box, we're passionate about bringing you the best streaming experience. 
              Our mission is to provide a platform where you can discover, watch, and enjoy your favorite 
              movies and TV shows with ease.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Started as a project to showcase React development skills, Netflix Clone has grown into 
              a fully functional streaming platform. We're committed to continuous improvement and 
              bringing you the latest features.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2d2d32] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">John Doe</h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>
            <div className="bg-[#2d2d32] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Jane Smith</h3>
              <p className="text-gray-300">UI/UX Designer</p>
            </div>
            <div className="bg-[#2d2d32] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Mike Johnson</h3>
              <p className="text-gray-300">Content Curator</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest features and content updates
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
