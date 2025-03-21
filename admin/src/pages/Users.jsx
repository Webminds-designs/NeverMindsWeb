import React, { useState } from 'react';
import Search from '../assets/magnifier.png';
import edit from '../assets/edit.svg';
import pen from '../assets/pen.svg';

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
   

    const users = [
        { name: "Jananga Yasith", date: "Feb 9", email: "jananga@.com", age: 22, gender: "Male", phone: "0771234567", address: "Colombo" },
        { name: "Deneth Kavindu", date: "Feb 9", email: "deneth@.com", age: 21, gender: "Male", phone: "0772345678", address: "Galle" },
        { name: "Pawara Hasamal", date: "Feb 9", email: "pawara@.com", age: 22, gender: "Male", phone: "0773456789", address: "Kandy" },
        { name: "Jananga Yasith", date: "Feb 9", email: "jananga@.com", age: 22, gender: "Male", phone: "0771234567", address: "Colombo" },
        { name: "Deneth Kavindu", date: "Feb 9", email: "deneth@.com", age: 21, gender: "Male", phone: "0772345678", address: "Galle" },
        { name: "Pawara Hasamal", date: "Feb 9", email: "pawara@.com", age: 22, gender: "Male", phone: "0773456789", address: "Kandy" },
    ];
    //search users
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // open modal 
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // close  modal 
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="flex-1 ml-64 p-8">
            <h2 className="text-xl font-semibold mb-4">New Users</h2>
            <div className="flex space-x-4 mb-8">
                {users.slice(0, 3).map((user, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl flex items-center justify-between w-1/3">
                        <div className="flex items-center">
                            <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
                            <div>{user.name}</div>
                        </div>
                        <div className="text-gray-500">{user.date}</div>
                    </div>
                ))}

            </div>

            {/* Search Users */}
            <div className="relative w-1/2 mb-6">
                <input
                    type="text"
                    placeholder="Search for Users"
                    className="w-full pl-12 pr-4 py-2 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={Search} alt="Search" className="absolute left-4 top-2.5 w-5 h-5" />
            </div>

            {/* All Users */}
            <h2 className="text-xl font-semibold mb-4">All Users</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
            {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, idx) => (
                    <div key={idx}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-yellow-400 w-8 h-8 rounded-lg mr-3"></div>
                                <div>{user.name}</div>
                            </div>
                            <div className="flex space-x-40">
                                <div className="flex items-center">
                                    <div className="text-gray-500 mr-6">{user.date}</div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                    className='cursor-pointer'
                                        src={edit}
                                        alt="edit"
                                        width="25"
                                        height="25"
                                        onClick={() => handleOpenModal(user)} // Open the model
                                    />
                                </div>
                                <div className="flex items-center">
                                    <button  onClick={() => handleOpenModal(user)}  className="text-gray-600 px-2 py-1 rounded-md border border-gray-600">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-200 border-2 dark:bg-gray-400" />
                    </div>
                ))
            ) : (
                <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                        No users found.
                    </td>
                </tr>
            )}
            </div>

            {/* Modal for editing user details */}
            {isModalOpen && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="rounded-full w-36 h-36 bg-yellow-400" height="100" width="100" />
                                <div className="absolute bottom-0  right-0 bg-yellow-400 rounded-full m-1">
                                    <img src={pen} alt="pen" width="30" height="30" />
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="mb-4">
                                <input
                                    className="w-full border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="text"
                                    value={selectedUser.name}
                                />
                            </div>
                            <div className="flex space-x-2 mb-4">
                                <input
                                    className="w-1/3 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="text"
                                    value={selectedUser.age}
                                />
                                <input
                                    className="w-1/3 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="text"
                                    value={selectedUser.gender}
                                />
                                <input
                                    className="w-1/3 border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="text"
                                    value={selectedUser.phone}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="text"
                                    value={selectedUser.address}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full border border-black rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    readOnly
                                    type="email"
                                    value={selectedUser.email}
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    className="bg-yellow-500 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="button"
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-gray-200 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    type="button"
                                    onClick={handleCloseModal} // Close the modal
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
