import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4">Our Services,</h2>
        <p className="text-gray-700 mb-10">
          At NeverMinds, we offer a wide range of interactive quizzes designed to entertain and educate. Whether you're looking to test your knowledge, explore new topics, or challenge friends, our quizzes cater to all interests and skill levels. Dive in and discover quizzes that are fun, engaging, and packed with learning opportunities!
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-yellow-400 rounded-md h-48"></div>
            <div className="bg-yellow-400 rounded-md h-24"></div>
          </div>

          {/* Center Grid */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-6">
            <div className="bg-yellow-400 rounded-md h-48"></div>
            <div className="bg-yellow-400 rounded-md h-48"></div>
            <div className="bg-yellow-400 rounded-md h-48 col-span-2"></div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-yellow-400 rounded-md h-48"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
