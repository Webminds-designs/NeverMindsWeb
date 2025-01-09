import React from "react";

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// BentoGrid Component
const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        // Define grid layout for different screen sizes
        "grid gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        // Responsive grid configuration
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "auto-rows-auto lg:auto-rows-[18rem]",
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
      <div className="font-sans font-bold text-xl text-[#1B191C] mb-2 text-center">
        {title}
      </div>

      {/* Description */}
      <div className="font-sans font-normal text-[#1B191C] text-sm text-center">
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
        <h2 className="text-[48px] font-medium text-[#1B191C] mb-6">
          Our Services
        </h2>
        <p className="text-[#1B191C] text-[20px] mb-12 max-w-2xl mx-auto leading-relaxed text-center">
          At NeverMinds, we offer a wide range of interactive quizzes designed
          to entertain and educate. Whether you're looking to test your
          knowledge, explore new topics, or challenge friends, our quizzes
          cater to all interests and skill levels. Dive in and discover quizzes
          that are fun, engaging, and packed with learning opportunities!
        </p>

        {/* Services Grid */}
        <BentoGrid>
          <BentoGridItem
            title="Quiz Creation"
            description="Easily create interactive quizzes for fun or learning."
          />
          <BentoGridItem
            title="Analytics"
            description="Analyze performance and gain valuable insights."
          />
          <BentoGridItem
            title="Collaborations"
            description="Work together with friends on shared quizzes."
          />
          <BentoGridItem
            title="Customization"
            description="Customize quizzes to match your preferences."
          />
          <BentoGridItem
            title="Progress Tracking"
            description="Monitor progress and track your improvement over time."
          />
          <BentoGridItem
            title="Quiz Library"
            description="Explore a vast library of quizzes across various topics."
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Services;
