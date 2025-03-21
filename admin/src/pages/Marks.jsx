import React ,{useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2pdf from 'html2pdf.js';
import file from "../assets/file-y.png";
import back from "../assets/back.png";
import * as XLSX from "xlsx"; 

const students = [
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "68", grade: "Average", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" },
    { name: "Deneth kavindu", status: "Failed", score: "28", grade: "Poor", time: "22 MIN" },
    { name: "Jananga yasith", status: "Passed", score: "85", grade: "Excellent", time: "22 MIN" },
    { name: "Pawara Hansamal", status: "Passed", score: "63", grade: "Average", time: "22 MIN" }
];

const Marks = () => {
     const [isReport, setIsReport] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    const quizDetails = location.state?.quizDetails;
    const reportRef = useRef(null);

    if (!quizDetails) {
        return <div>No quiz details found.</div>;
    }
    const handleBack = () => {
        navigate(-1); // This will navigate to the previous page
    };
    /* 
    const generatePDF = async () => {
        if (!reportRef.current) {
            console.error("Report element not found!");
            return;
        }
    
        try {
            const html2pdf = (await import("html2pdf.js")).default;
    
            const options = {
                margin: 10, // Add space to avoid cutting edges
                filename: "Report.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: {
                    scale: 3, 
                    dpi: 300,  
                    letterRendering: true,
                    useCORS: true, // Fixes external assets issue
                    backgroundColor: "#fff",
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: "portrait",
                },
                pagebreak: { mode: ["css", "legacy"] }, 
            };
    
            html2pdf().from(reportRef.current).set(options).save();
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };
    */
    
    const generateExcel = () => {
        if (!quizDetails || !students || students.length === 0) {
            console.error("Quiz details or student data not found!");
            return;
        }
    
        const workbook = XLSX.utils.book_new();
    
        // Quiz Details Sheet
        const quizInfo = [
            ["Quiz ID", quizDetails.id],
            ["Title", quizDetails.title],
            ["Subject", quizDetails.subject],
            ["Type", quizDetails.type],
            ["Date", quizDetails.date],
            ["Total Questions", quizDetails.questions],
            ["Total Marks", quizDetails.marks],
            ["Pass Marks", quizDetails.passMarks],
            ["Duration", `${quizDetails.timer.hours}h ${quizDetails.timer.minutes}m`]
        ];
        const quizSheet = XLSX.utils.aoa_to_sheet(quizInfo);
        XLSX.utils.book_append_sheet(workbook, quizSheet, "Quiz Details");
    
        // Student Report Sheet
        const studentHeader = [["Name", "Email", "Status", "Score", "Grade", "Time Taken"]];
        const studentData = students.map((student) => [
            student.name,
            student.email,
            student.status,
            student.score,
            student.grade,
            student.time
        ]);
        const studentSheetData = [...studentHeader, ...studentData];
        const studentSheet = XLSX.utils.aoa_to_sheet(studentSheetData);
        XLSX.utils.book_append_sheet(workbook, studentSheet, "Student Report");
    
        // Write file
        XLSX.writeFile(workbook, "Quiz_Report.xlsx");
    };
    
    return (
        <div className="flex-1 ml-64 ">
            {/* Header */}
            <header className=" mx-8 m-2 flex items-center justify-between p-4 ">
                <button onClick={handleBack} className="bg-yellow-400 p-2 rounded-md">
                    <img src={back} alt="Back" width="25" height="25" />
                </button>

                <button  onClick={() => setIsReport(true)}  className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
                    Get Report
                </button>
            </header>
            <div className="report" ref={reportRef}>
            <div className="bg-white p-6 mx-12  rounded-3xl shadow-md  mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="flex text-2xl font-semibold p-2">
                            <img
                                className="mr-3"
                                src={file}
                                alt="quiz"
                                width="30"
                                height="20"
                            />
                            {quizDetails.title}
                        </h1>
                        <p className="text-gray-600 ml-12">Subject: {quizDetails.subject}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-600">Date : {quizDetails.date}</p>
                        <p className="text-gray-600">Teacher : Bodini de Silva</p>
                        <div className="flex space-x-2 mt-2">
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                🕒 {quizDetails.timer?.hours} h : {quizDetails.timer?.minutes} min
                            </span>
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                📊 {quizDetails.marks} Marks (Pass Marks: {quizDetails.passMarks})
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
                        <div>
                            <p className="text-gray-600">
                                <span className="bg-green-500 w-3 h-3 rounded-full inline-block"></span>{" "}
                                Total Students
                            </p>
                            <p className="text-2xl font-semibold">65</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
                        <div>
                            <p className="text-gray-600">
                                <span className="bg-yellow-500 w-3 h-3 rounded-full inline-block"></span>
                                Average Score
                            </p>
                            <p className="text-2xl font-semibold">67</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
                        <div>
                            <p className="text-gray-600">
                                <span className="bg-orange-500 w-3 h-3 rounded-full inline-block"></span>
                                Total Passed Students
                            </p>
                            <p className="text-2xl font-semibold">54</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="my-6 p-4">
                <div className="bg-white mx-8 shadow-md rounded-3xl p-4 overflow-hidden">
                    <table className="min-w-full bg-white">
                        <thead className=" text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Student Name</th>
                                <th className="py-3 px-6 text-left">Result</th>
                                <th className="py-3 px-6 text-left">Score</th>
                                <th className="py-3 px-6 text-left">Grade</th>
                                <th className="py-3 px-6 text-left">Time Spent</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-base font-medium">
                            {students.map((student, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
                                            <span>{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <span
                                            className={`py-1 px-3 rounded-full text-xs ${student.status === "Passed" ? "text-green-600" : "text-red-600"
                                                }`}
                                        >
                                            {student.status}
                                        </span>

                                    </td>
                                    <td className={`py-3 px-6 text-left `}>{student.score}</td>
                                    <td className={'py-3 px-6 text-left '}>{student.grade}</td>
                                    <td className="py-3 px-6 text-left">{student.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            {/* Report Model */}
            {isReport && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-yellow-50 rounded-xl shadow-2xl p-8 w-[28rem]">
                      {/* Header */}
                      <h2 className="flex justify-center text-2xl font-bold text-gray-900 mb-4 text-center">
                        Download Report    
                        <img
                          className="ml-3"
                          src={file}
                          alt="quiz"
                          width="30"
                          height="20"
                        />
                      </h2>
                      <p className="text-gray-700 text-center mb-6">
                        Choose the format you want to download the report in.
                      </p>
                  
                      {/* Buttons */}
                    
                    <div className="flex justify-center gap-4">
                     {/*     <button
                          onClick={generatePDF}
                          className="bg-yellow-500  px-6 py-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition"
                        >
                          Download PDF
                        </button>
                        */} 
                        <button
                          onClick={generateExcel}
                          className="bg-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition"
                        >
                          Download Excel
                        </button>
                      </div>
                  
                      {/* Close Button */}
                      <div className="flex justify-end mt-6">
                        <button
                          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 transition"
                          onClick={() => setIsReport(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
         )}
        </div>
    );
};

export default Marks;
