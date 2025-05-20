// import axios from "axios"
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
const EditUser = () => {
  const {id} = useParams();
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/editUser/${id}`, userData);
      console.log('Id send successfully:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  navigate('/');
  }

  const getUserById = async() =>{
      try {
        const response = await axios.get(`http://localhost:8000/getUser/${id}`)
        console.log('Id send successfully:', response.data);
        setUserData(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
  }

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center  bg-gray-800 pl-10 pr-10 pt-1 pb-1 rounded-2xl  sm:w-80 h-full w-85 lg:w-100 lg:mt-10 lg:mb-10 lg:h-[75vh]">
      <h2 className="text-white text-2xl font-bold pt-1 pb-1 lg:pt-5 lg:pb-5">Create New User</h2>
      <form className="max-w-sm mx-auto" >
        
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" value={userData.name} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Ajeet Vishwakarma" required />
        </div>
        <div className="mb-2">
          <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> User Name</label>
          <input type="text" id="userName" value={userData.userName} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone</label>
          <input type="text" id="phone" value={userData.phone} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Address</label>
          <input type="text" id="address" value={userData.address} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-2">
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Country</label>
          <input type="text" id="country" value={userData.country} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={handleSubmit}>Register new account</button>
      </form>
    </main>
  )
}

export default EditUser