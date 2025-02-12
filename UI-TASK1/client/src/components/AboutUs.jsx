import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-screen flex flex-wrap items-center justify-between p-6 bg-gray-100">
      {/* Left side: Heading and Company Description */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to our company! We are committed to providing the best services to our customers. Our team is dedicated to ensuring your satisfaction with every interaction. Thank you for choosing us!
        </p>
      </div>
      
      {/* Right side: Image */}
      <div className="w-full md:w-1/2 p-4">
        <img src="/public/image/About-us[Img].jpg" alt="Company" className="rounded-3xl shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
