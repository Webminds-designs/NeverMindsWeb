import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid"; // Import the BentoGrid and BentoGridItem components
import { IconBook, IconChartBar, IconUsers, IconPalette, IconTrendingUp, IconArchive } from "@tabler/icons-react"; // Import icons

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
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
            className="bg-gradient-to-r from-yellow-200 to-yellow-100 shadow-md"
            title="Quiz Creation"
            description="Easily create interactive quizzes for fun or learning."
            icon={<IconBook size={32} />}
          />
          <BentoGridItem
            className="bg-gradient-to-r from-blue-200 to-blue-100 shadow-md"
            title="Analytics"
            description="Analyze performance and gain valuable insights."
            icon={<IconChartBar size={32} />}
          />

          {/* Center Grid Items */}
          <BentoGridItem
            className="bg-gradient-to-r from-green-200 to-green-100 shadow-md"
            title="Collaborations"
            description="Work together with friends on shared quizzes."
            icon={<IconUsers size={32} />}
          />
          <BentoGridItem
            className="bg-gradient-to-r from-pink-200 to-pink-100 shadow-md"
            title="Customization"
            description="Customize quizzes to match your preferences."
            icon={<IconPalette size={32} />}
          />
          <BentoGridItem
            className="bg-gradient-to-r from-purple-200 to-purple-100 shadow-md col-span-2"
            title="Progress Tracking"
            description="Monitor progress and track your improvement over time."
            icon={<IconTrendingUp size={32} />}
          />

          {/* Right Column Item */}
          <BentoGridItem
            className="bg-gradient-to-r from-teal-200 to-teal-100 shadow-md"
            title="Quiz Library"
            description="Explore a vast library of quizzes across various topics."
            icon={<IconArchive size={32} />}
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Services;
