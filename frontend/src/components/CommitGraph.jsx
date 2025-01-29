import React from "react";

const getColor = (count) => {
  const colors = {
    0: "bg-gray-300", // No activity
    1: "bg-yellow-200", // Low activity
    2: "bg-yellow-400", // Medium activity
    3: "bg-yellow-600", // High activity
  };
  return colors[count] ?? "bg-yellow-800"; // Very high activity
};

function CommitGraph() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

  // Generate random activity data for a 6x6 grid
  const activityData = Array.from({ length: hours.length }, () =>
    Array.from({ length: days.length }, () => Math.floor(Math.random() * 4))
  );

  return (
    <section className="p-4">
      <div className="grid grid-cols-[auto_repeat(7,_1fr)] gap-1">
        {/* Days Header */}
        <div></div> {/* Empty space for row labels */}
        {days.map((day, index) => (
          <div key={`day-header-${index}`} className="text-center text-sm font-medium text-white">
            {day}
          </div>
        ))}

        {/* Hours and Activity Grid */}
        {activityData.map((hourData, hourIndex) => (
          <React.Fragment key={`row-${hourIndex}`}> {/* Unique Key for Each Row */}
            {/* Hour Labels */}
            <div className="text-right pr-2 text-sm font-medium text-white">
              {hours[hourIndex]}
            </div>
            {/* Activity Squares */}
            {hourData.map((activity, dayIndex) => (
              <div
                key={`hour-${hourIndex}-day-${dayIndex}`} // Unique Key for Each Square
                className={`w-6 h-6 rounded ${getColor(activity)}`}
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default CommitGraph;
