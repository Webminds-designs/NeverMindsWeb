import React from "react";
import DashboardNavigater from "../components/DashboardNavigater";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardNavigater />
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold m-8">Statistics</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <div className=" p-6 rounded-2xl shadow-md border-dashed border-2 border-black">
            <h2 className="text-3xl font-medium ">Total Users</h2>
            <div className="text-7xl font-medium ">300K</div>
            <div className="text-gray-400 font-medium mb-8 ">As of 15/03/2025</div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className=" bg-yellow-400  border-gray-100 border-2 absolute w-8 h-8 rounded-full "
                  style={{ marginLeft: `${i * 24}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Total Quizzes */}
          <div className=" p-6 rounded-2xl shadow-md border-dashed border-2 border-black">
            <h2 className="text-3xl font-medium ">Total Quizzes</h2>
            <div className="text-7xl font-medium ">210</div>
            <div className="text-gray-400 font-medium mb-8 ">As of 15/03/2025</div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className=" bg-yellow-400  border-gray-100 border-2 absolute w-8 h-8 rounded-full "
                  style={{ marginLeft: `${i * 24}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">New Users</h2>
        <div className="flex space-x-4 mb-8">
          {["Jananga Yasith", "Deneth Kavindu", "Pawara Hasamal", ].map(
            (user, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl  flex items-center justify-between w-1/3"
              >
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
                  <div>{user}</div>
                </div>
                <div className="text-gray-500">Feb 9</div>
              </div>
            )
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {["Pawara Hasamal", "Jananga Yasith", "Deneth Kavindu"].map(
            (user, idx) => (
                <div>
              <div key={idx} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
                  <div>{user}</div>
                  
                </div>
                <div className="flex items-center">
                  <div className="text-gray-500 mr-6">Feb 9, 2025</div>
                  
                </div>
                <div className="flex items-center">
                 
                  <button className=" text-gray-600 px-2 py-1 rounded-md border border-gray-600">
                    Details
                  </button>
                </div>
               
              </div>
              <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-400" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
