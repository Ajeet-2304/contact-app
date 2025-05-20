import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { LuUserRoundPlus } from "react-icons/lu";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

const Home = () => { 
    const [users, setUsers] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const getUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/getAllUser`);
            setUsers(response.data);
            console.log(response.data, "Data fetched successfully");
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const deleteUser = async(userId,userName)=>{
        window.confirm(`Are you sure you want to delete this user ? { ${userName} }`);
        setDeleteStatus(deleteStatus => !deleteStatus);
        if(deleteStatus) {
            try {
                const response = await axios.delete(`http://localhost:8000/deleteUser/${userId}`);
                console.log(response.data, "User deleted successfully");
                // getUserData();
            } catch (error) {
                console.error("Error deleting user:", error);
            }        
        }else{
            console.log("User not deleted");
        }
    }

    // const handleClick = (e) => {
    //     const userId = e.target.id;
    //     console.log(userId);
    //     localStorage.setItem("userId", userId);

    // }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <main className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-screen block sm:w-80 lg:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-3 py-3">
                            Contact name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                            key={index}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {user.name}
                            </th>
                            <td className="px-6 py-4">{user.userName}</td>
                            <td className="px-6 py-4">{user.phone}</td>
                            <td className="px-6 py-4 text-wrap max-w-50">{user.address}</td>
                            <td className="px-6 py-4">{user.country}</td>
                            <td className="px-6 py-4 flex gap-x-2">
                            <div className="links flex items-center justify-center h-full">
                                <Link
                                    to={`/editUser/${user._id}`}
                                    className="font-extrabold text-3xl text-blue-600 dark:text-blue-500 hover:underline"
                                    id={user._id} 
                                    // onClick={handleEditUser(user._id)}
                                >
                                    <MdEditSquare />
                                </Link>
                                <Link
                                    // to={`/deleteUser/${user._id}`}
                                    to={`/`}
                                    className="font-extrabold text-3xl text-red-600 dark:text-red-500 hover:underline"
                                    id={user._id} 
                                    onClick={()=>deleteUser(user._id,user.name)}
                                >
                                    <MdDelete />
                                </Link>
                                <Link
                                    to={`/showUser/${user._id}`}
                                    className="font-extrabold text-3xl text-green-600 dark:text-green-500 hover:underline"
                                    id={user._id}
                                >
                                    <BiDetail />
                                </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="flex justify-between items-center p-4">
                <a
                    href="/createUser"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-x-3"
                >
                    Create New User <LuUserRoundPlus />
                </a>
            </div>
        </main>
    );
};

export default Home;
