import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for React Router v6
import pen from '../assets/pen.svg';
import close from '../assets/close.png';
import Questions from './Questions';

const NewQuiz = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');
    const [timer, setTimer] = useState({ hours: 0, minutes: 0 });
    const [isPrivate, setIsPrivate] = useState(false);
    const [instructions, setInstructions] = useState([]);
    const [instructionsInput, setInstructionsInput] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [quizSaved, setQuizSaved] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleInstructionsAdd = () => {
        if (instructionsInput && !instructions.includes(instructionsInput)) {
            setInstructions([...instructions, instructionsInput]);
            setInstructionsInput('');
        }
    };

    const handleInstructionsDelete = (instructionToDelete) => {
        setInstructions(
            instructions.filter((instruction) => instruction !== instructionToDelete)
        );
    };

    const handleTagAdd = () => {
        if (tagInput && !tags.includes(tagInput)) {
            setTags([...tags, tagInput]);
            setTagInput('');
        }
    };

    const handleTagDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };

    const subjects = [
        'Biology',
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
        'English',
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSubject(value);

        if (value.trim()) {
            setFilteredSubjects(
                subjects.filter((sub) =>
                    sub.toLowerCase().includes(value.toLowerCase())
                )
            );
            setDropdownVisible(true);
        } else {
            setFilteredSubjects([]);
            setDropdownVisible(false);
        }
    };

    const handleSelect = (selectedSubject) => {
        setSubject(selectedSubject);
        setDropdownVisible(false);
    };

    const handleSave = () => {
        const quizDetails = {
            title,
            description,
            subject,
            timer,
            isPrivate,
            instructions,
            tags,
        };
        setQuizData(quizDetails);
        setQuizSaved(true);

      
        navigate('/question',{ state: { quizDetails } });
    };

    const handleCancel = () => {
        closeModal();
    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 grid gap-6 max-h-[95vh] overflow-y-auto">
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <div className="rounded-lg w-36 h-36 bg-yellow-400" />
                        <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full -m-1">
                            <img src={pen} alt="pen" width="30" height="30" />
                        </div>
                    </div>
                </div>

                <div className="grid gap-4">
                    {/* Title Input */}
                    <input
                        className="w-full border border-gray-300 rounded-lg p-2"
                        type="text"
                        placeholder="Enter Quiz Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* Description Input */}
                    <input
                        className="w-full border border-gray-300 rounded-lg p-2"
                        type="text"
                        placeholder="Enter Quiz Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="relative w-full">
                        {/* Subject Input */}
                        <input
                            className="w-full border border-gray-300 rounded-lg p-2"
                            type="text"
                            placeholder="Enter Quiz Subject"
                            value={subject}
                            onChange={handleInputChange}
                            onFocus={() => setDropdownVisible(true)}
                            onBlur={() => setTimeout(() => setDropdownVisible(false), 150)} // Delay to allow selection click
                        />

                        {/* Dropdown Menu */}
                        {dropdownVisible && (
                            <ul className=" w-full bg-white border border-gray-300 rounded-lg mt-1  overflow-y-auto shadow-lg z-10">
                                {filteredSubjects.length > 0 ? (
                                    filteredSubjects.map((sub, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelect(sub)}
                                        >
                                            {sub}
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-gray-500">No matching subjects found</li>
                                )}
                            </ul>
                        )}
                    </div>
                    {/* Instructions Generator */}
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2 mb-4">
                            <input
                                className="w-full border border-gray-300 rounded-lg p-2"
                                type="text"
                                placeholder="Add instruction"
                                value={instructionsInput}
                                onChange={(e) => setInstructionsInput(e.target.value)}
                            />
                            <button
                                onClick={handleInstructionsAdd}
                                className="bg-yellow-500 text-white rounded-lg px-4 py-2"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {instructions.map((instruction, index) => (
                                <div
                                    key={index}
                                    className="bg-yellow-200 px-1 text-gray-700 rounded-full flex items-center space-x-2"
                                >
                                    <div className="px-4 py-2">
                                        <span>{instruction}</span>
                                    </div>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleInstructionsDelete(instruction)}
                                    >
                                        <img
                                            className="bg-yellow-100 rounded-full"
                                            src={close}
                                            alt="close"
                                            width="20"
                                            height="20"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timer & Privacy Options */}
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700" htmlFor="hours">
                                    Hours
                                </label>
                                <input
                                    className="w-16 border border-gray-300 rounded-lg p-2"
                                    id="hours"
                                    type="number"
                                    value={timer.hours}
                                    onChange={(e) =>
                                        setTimer({ ...timer, hours: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700" htmlFor="minutes">
                                    Minutes
                                </label>
                                <input
                                    className="w-16 border border-gray-300 rounded-lg p-2"
                                    id="minutes"
                                    type="number"
                                    value={timer.minutes}
                                    onChange={(e) =>
                                        setTimer({ ...timer, minutes: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <label className="text-gray-700 m-3" htmlFor="private">
                                Private
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    id="private"
                                    type="checkbox"
                                    checked={isPrivate}
                                    onChange={() => setIsPrivate(!isPrivate)}
                                    className="sr-only peer"
                                />
                                <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></span>
                            </label>
                        </div>
                    </div>

                    {/* Tag Generator */}
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2 mb-4">
                            <input
                                className="w-full border border-gray-300 rounded-lg p-2"
                                type="text"
                                placeholder="Add tag"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                            />
                            <button
                                onClick={handleTagAdd}
                                className="bg-yellow-500 text-white rounded-lg px-4 py-2"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="bg-yellow-200 px-2 text-gray-700 rounded-full flex items-center space-x-2"
                                >
                                    <span>{tag}</span>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleTagDelete(tag)}
                                    >
                                        <img
                                            className="bg-yellow-100 rounded-full"
                                            src={close}
                                            alt="close"
                                            width="20"
                                            height="20"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Save and Cancel Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={handleSave}
                            className="bg-yellow-500 text-white rounded-lg px-6 py-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white rounded-lg px-6 py-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewQuiz;
