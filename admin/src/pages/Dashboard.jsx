import React from "react";
import DashboardNavigater from "../components/DashboardNavigater";
import {
  useGetAllTeachersQuery,
  useGetAllStudentsQuery,
  useUpdateStudentProfileMutation,
  useUpdateTeacherProfileMutation,
} from "../redux/slices/userSlice";

const Dashboard = () => {
  const { data: teachers = [], isLoading: loadingTeachers } = useGetAllTeachersQuery();
  const { data: students = [], isLoading: loadingStudents } = useGetAllStudentsQuery();

  const [updateStudentProfile] = useUpdateStudentProfileMutation();
  const [updateTeacherProfile] = useUpdateTeacherProfileMutation();

  const users = [...teachers, ...students];

  return (
    <div className="flex-1 ml-64 p-8">
      <h1 className="text-2xl font-semibold m-8">Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="p-6 rounded-2xl shadow-md border-dashed border-2 border-black">
          <h2 className="text-3xl font-medium">Total Users</h2>
          <div className="text-7xl font-medium">{users.length}</div>
          <div className="text-gray-400 font-medium mb-8">
            As of {new Date().toLocaleDateString("en-GB")}
          </div>
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-yellow-400 border-gray-100 border-2 absolute w-8 h-8 rounded-full"
                style={{ marginLeft: `${i * 24}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Total Quizzes - Placeholder value */}
        <div className="p-6 rounded-2xl shadow-md border-dashed border-2 border-black">
          <h2 className="text-3xl font-medium">Total Quizzes</h2>
          <div className="text-7xl font-medium">210</div>
          <div className="text-gray-400 font-medium mb-8">
            As of {new Date().toLocaleDateString("en-GB")}
          </div>
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-yellow-400 border-gray-100 border-2 absolute w-8 h-8 rounded-full"
                style={{ marginLeft: `${i * 24}px` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* New Users */}
      <h2 className="text-xl font-semibold mb-4">New Users</h2>
      <div className="flex space-x-4 mb-8">
        {users.slice(0, 3).map((user, idx) => (
          <div
            key={user._id || idx}
            className="bg-white p-4 rounded-2xl flex items-center justify-between w-1/3"
          >
            <div className="flex items-center">
              <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
              <div>{user.name}</div>
            </div>
            <div className="text-gray-500">
              {new Date(user.createdAt).toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
     {/* All Users */}
<h2 className="text-xl font-semibold mb-4">All Users</h2>
<div className="bg-white p-4 rounded-lg shadow-md">
  {users.map((user, idx) => (
    <div key={user._id || idx}>
      <div className="flex items-center justify-between mb-4">
      
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-400 w-8 h-8 rounded-lg"></div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-medium leading-none">{user.name}</span>
          
          </div>
        </div>

        {/* Date */}
        <div className="text-sm text-gray-500 whitespace-nowrap">
          {new Date(user.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>

        {/* Details Button */}
        <div>
          <button className="text-gray-600 px-3 py-1 rounded-md border border-gray-600">
            Details
          </button>
        </div>
      </div>
      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400" />
    </div>
  ))}
</div>

    </div>
  );
};

export default Dashboard;
