import { FaRegUser } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { Link, useParams } from "react-router"
import axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const ShowUser = () => {
  const [userData, setUserData] = useState({});
  const {id} = useParams();
    const getUserById = async() =>{
      try {
        const response = await axios.get(`http://localhost:8000/getUser/${id}`)
        console.log('Id send successfully:', response.data);
        setUserData(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
  }

  const deleteUser = async(userId,userName)=>{
        const confirmStatus = window.confirm(`Are you sure you want to delete this user ? { ${userName} }`);
        // console.log(confirmStatus);
        if(confirmStatus) {    
          try {
              const response = await axios.delete(`http://localhost:8000/deleteUser/${userId}`);
              console.log(response.data, "User deleted successfully");
              // getUserData();
          } catch (error) {
              console.error("Error deleting user:", error);
          }        
        }
        else{
          console.log("User not deleted");
        }
    }

  useEffect(() => {
    getUserById();
  },[]);

  
  return (
    <main>
      <div class="max-w-lg lg:w-[60vw]  p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="name items-center justify-items-center-safe pb-5 ">
          <FaRegUser size={45} color={'white'} />
          <div className="userData pt-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Name : {userData.name}</h5>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Username : {userData.userName}</h5>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Phone : {userData.phone}</h5>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Address : {userData.address}</h5>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Country : {userData.country}</h5>
          </div>
        </div>
        <div className="links flex justify-center gap-x-10 pt-5">
          <Link
            to={`/editUser/${userData._id}`}
            className="font-extrabold text-4xl text-blue-600 dark:text-blue-500 hover:underline"
            id={userData._id} 
            // onClick={handleEditUser(user._id)}
          >
              <MdEditSquare />
          </Link>
          <Link
              // to={`/deleteUser/${user._id}`}
              to={`/`}
              className="font-extrabold text-4xl text-red-600 dark:text-red-500 hover:underline"
              id={userData._id} 
              onClick={()=>deleteUser(userData._id,userData.name)}
          >
              <MdDelete />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ShowUser