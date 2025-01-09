import React from "react";

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// BentoGrid Component
const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
const BentoGridItem = ({ className, title, description }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 shadow-lg p-6 bg-[#FFD448] flex flex-col items-center space-y-4",
        className
      )}
    >
      {/* Title */}
      <div className="font-sans font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        {title}
      </div>

      {/* Description */}
      <div className="font-sans font-normal text-neutral-700 text-sm dark:text-neutral-300 text-center">
        {description}
      </div>
    </div>
  );
};

// Services Component
const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          At NeverMinds, we offer a wide range of interactive quizzes designed to entertain and educate. Whether you're looking to test your knowledge, explore new topics, or challenge friends, our quizzes cater to all interests and skill levels.
        </p>

        {/* Services Grid */}
        <BentoGrid>
          {/* Left Column Items */}
          <BentoGridItem
            className="shadow-md"
            title="Quiz Creation"
            description="Easily create interactive quizzes for fun or learning."
          />
          <BentoGridItem
            className="shadow-md"
            title="Analytics"
            description="Analyze performance and gain valuable insights."
          />

          {/* Center Grid Items */}
          <BentoGridItem
            className="shadow-md"
            title="Collaborations"
            description="Work together with friends on shared quizzes."
          />
          <BentoGridItem
            className="shadow-md"
            title="Customization"
            description="Customize quizzes to match your preferences."
          />
          <BentoGridItem
            className="shadow-md col-span-2"
            title="Progress Tracking"
            description="Monitor progress and track your improvement over time."
          />

          {/* Right Column Item */}
          <BentoGridItem
            className="shadow-md"
            title="Quiz Library"
            description="Explore a vast library of quizzes across various topics."
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Services;
