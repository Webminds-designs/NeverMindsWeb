import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pen from '../assets/pen.svg';
import close from '../assets/close.png';
import toast from 'react-hot-toast';
import { useCreateQuizMutation, useUpdateQuizMutation } from '../redux/slices/quizSlice';
import Questions from './Questions';

const NewQuiz = ({ closeModal, refetch, quizToEdit }) => {

    const [createQuiz] = useCreateQuizMutation();
    const [updateQuiz] = useUpdateQuizMutation();

    const navigate = useNavigate();
    const [title, setTitle] = useState(quizToEdit?.title || '');
    const [description, setDescription] = useState(quizToEdit?.description || '');
    const [subject, setSubject] = useState(quizToEdit?.subject || '');
    const [timer, setTimer] = useState(() => {
        if (quizToEdit?.timeDuration) {
            const [hours, minutes] = quizToEdit.timeDuration.split(':');
            return { hours: parseInt(hours), minutes: parseInt(minutes) };
        }
        return { hours: 0, minutes: 0 };
    });
    const [instructions, setInstructions] = useState(() => {
        try {
            return quizToEdit?.guidlines ? JSON.parse(quizToEdit.guidlines) : [];
        } catch (error) {
            return [];
        }
    });

    const [tags, setTags] = useState(() => {
        try {
            return quizToEdit?.quizTags ? JSON.parse(quizToEdit.quizTags) : [];
        } catch (error) {
            return [];
        }
    });
    const [isPrivate, setIsPrivate] = useState(quizToEdit?.type === 'private');
    const [instructionsInput, setInstructionsInput] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [image, setImage] = useState(quizToEdit?.banner?.url || null);
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [passedMarks, setPassedMarks] = useState(quizToEdit?.passMark || '');

    const user = JSON.parse(localStorage.getItem('user'));

    // drag and drop 
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setImageFile(file);
            const reader = new FileReader();
            setLoading(true);
            reader.onload = () => {
                setImage(reader.result);
                setLoading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    // image handle
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    //instructions add
    const handleInstructionsAdd = () => {
        if (instructionsInput && !instructions.includes(instructionsInput)) {
            if (instructions.length < 5) {
                setInstructions([...instructions, instructionsInput]);
                setInstructionsInput('');
            } else {
                alert('Maximum of 5 instructions allowed');
            }
        }
    };
    //instructions delete
    const handleInstructionsDelete = (instructionToDelete) => {
        setInstructions(
            instructions.filter((instruction) => instruction !== instructionToDelete)
        );
    };
    // tag add
    const handleTagAdd = () => {
        if (tagInput && !tags.includes(tagInput)) {
            setTags([...tags, tagInput]);
            setTagInput('');
        }
    };
    //tag delete
    const handleTagDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    };
    // select subject
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
            const filtered = subjects.filter(sub =>
                sub.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSubjects(filtered);
            setDropdownVisible(filtered.length > 0);
        } else {
            setFilteredSubjects([]);
            setDropdownVisible(false);
        }
    };
    // select subject
    const handleSelect = (selectedSubject) => {
        setSubject(selectedSubject);
        setFilteredSubjects([]);
        setDropdownVisible(false);
    };

    const handleSave = async () => {
        const formattedTimer = `${String(timer.hours).padStart(2, '0')}:${String(timer.minutes).padStart(2, '0')}:00`;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('guidlines', JSON.stringify(instructions));
        formData.append('type', isPrivate ? 'private' : 'public');
        formData.append('imageVector', subject.toLowerCase().replace(' ', '_') + '_vector.png');
        formData.append('tutor', user.id);
        formData.append('quizTags', JSON.stringify(tags));
        formData.append('timeDuration', formattedTimer);
        formData.append('subject', subject);
        formData.append('passMark', passedMarks);

        // Add empty questions array as required by backend
        formData.append('questions', JSON.stringify([]));

        if (imageFile) {
            formData.append('banner', imageFile);
        }

        if (!title || !subject || !timer || !passedMarks) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            let quizId;
            
            if (quizToEdit) {
                /*const result = await updateQuiz({ id: quizToEdit._id, quizData: formData }).unwrap();  
                if (result) {
                    toast.success('Quiz updated successfully!');
                   
                }  */
                 quizId = quizToEdit._id;
            } else {
                const result = await createQuiz(formData).unwrap();
                if (result) {
                    toast.success('Quiz created successfully!');
                    quizId = result._id;
                }
            }
            closeModal();
            refetch();
            // Pass the quizId as state when navigating to the questions page
            navigate('/question', { state: { quizId } });
        } catch (error) {
            console.error('Error saving quiz:', error);
            toast.error(`Failed to ${quizToEdit ? 'update' : 'create'} quiz. Please try again.`);
        }
    };

    //cancel Model
    const handleCancel = () => {
        closeModal();
    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 grid gap-6 max-h-[95vh] overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div
                        className="flex justify-center mb-4"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="relative">
                            <div className="rounded-lg w-36 h-36 bg-yellow-400 overflow-hidden">
                                {loading ? (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <svg
                                            className="animate-spin h-8 w-8 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                    </div>
                                ) : image ? (
                                    <img
                                        src={image}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-700">

                                    </div>
                                )}
                            </div>
                            <label
                                htmlFor="fileInput"
                                className="absolute bottom-0 right-0 bg-yellow-400 rounded-full -m-1 cursor-pointer"
                            >
                                <img src={pen} alt="pen" width="30" height="30" />
                            </label>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="grid gap-4">
                    {/* Title Input */}
                    <input
                        className="w-full border border-gray-800 rounded-xl p-2"
                        type="text"
                        placeholder="Enter Quiz Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* Description Input */}
                    <input
                        className="w-full border border-gray-800 rounded-xl p-2"
                        type="text"
                        placeholder="Enter Quiz Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="relative w-full">
                        {/* Subject Input */}
                        <input
                            className="w-full border border-gray-800 rounded-xl p-2"
                            type="text"
                            placeholder="Enter Quiz Subject"
                            value={subject}
                            onChange={handleInputChange}
                            onFocus={() => setDropdownVisible(true)}
                            onBlur={() => setTimeout(() => setDropdownVisible(false), 150)}
                        />

                        {/* Dropdown Menu */}
                        {dropdownVisible && (
                            <ul className="w-full bg-white border border-gray-800 rounded-xl mt-1 overflow-y-auto shadow-lg z-10">
                                {filteredSubjects.length > 0 ? (
                                    filteredSubjects.map((sub, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelect(sub)} // Handle selection
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
                                className="w-full border border-gray-800 rounded-xl p-2"
                                type="text"
                                placeholder="Add instruction"
                                value={instructionsInput}
                                onChange={(e) => setInstructionsInput(e.target.value)}
                            />
                            <button
                                onClick={handleInstructionsAdd}
                                className="bg-yellow-300  rounded-2xl px-4 py-2"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {(instructions.length > 0 ? instructions : []).map((instruction, index) => (
                                <div
                                    key={index}
                                    className="bg-yellow-200 px-1 text-gray-700 rounded-full flex items-center space-x-2"
                                >
                                    <div className="px-4 py-2">
                                        <span>{instruction || ''}</span>
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
                            <div className="flex flex-row">
                                <label className="text-gray-700 mr-2 content-center" htmlFor="hours">
                                    Hours
                                </label>
                                <input
                                    className="w-16 border border-gray-800 rounded-xl p-2"
                                    id="hours"
                                    type="number"
                                    value={timer.hours || '0'}
                                    onChange={(e) =>
                                        setTimer({ ...timer, hours: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                            <div className="flex flex-row">
                                <label className="text-gray-700 mr-2 content-center" htmlFor="minutes">
                                    Minutes
                                </label>
                                <input
                                    className="w-16 border border-gray-800 rounded-xl p-2"
                                    id="minutes"
                                    type="number"
                                    value={timer.minutes || '0'}
                                    onChange={(e) =>
                                        setTimer({ ...timer, minutes: parseInt(e.target.value) })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="flex flex-row items-center">
                                <label className="text-gray-700 mr-2" htmlFor="passedMarks">
                                    Passed Marks
                                </label>
                                <input
                                    className="w-16 border border-gray-800 rounded-xl p-2"
                                    id="passedMarks"
                                    type="number"
                                    value={passedMarks || '0'}
                                    onChange={(e) =>
                                        setPassedMarks(parseInt(e.target.value, 10) || 0)
                                    }
                                />
                            </div>

                            <label className="text-gray-700 m-3" htmlFor="private">
                                Private
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    id="private"
                                    type="checkbox"
                                    checked={isPrivate || ''}
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
                                className="w-full border border-gray-800 rounded-xl p-2"
                                type="text"
                                placeholder="Add tag"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                            />
                            <button
                                onClick={handleTagAdd}
                                className="bg-yellow-300  rounded-xl px-4 py-2"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {(tags.length > 0 ? tags : []).map((tag, index) => (
                                <div
                                    key={index}
                                    className="bg-yellow-200 px-2 text-gray-700 rounded-full flex items-center space-x-2"
                                >
                                    <span>{tag || ''}</span>
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

                    {/* Create and Cancel Buttons */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleSave}
                            className="bg-yellow-300 mr-3 text-lg font-semibold  rounded-lg px-6  "
                        >
                            {quizToEdit ? 'Edit' : 'Create'}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-yellow-100 text-xl font-semibold rounded-lg px-6 py-2"
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
