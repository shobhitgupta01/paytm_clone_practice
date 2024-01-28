import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/letter_p.svg';
import axios from 'axios';

export default function Navbar() {
  const navigate = useNavigate();
  const [userFirstName, setUserFirstName] = useState('user');

  const fetchUserData = async () =>{
    const url = "http://localhost:3000/api/v1/user/details";
    const response = await axios.get(url, {
      headers:{
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
      }
    });
    setUserFirstName(response.data.firstName);
  }
  useEffect(()=>{
    fetchUserData();
  },[])

  function handleLogout(){
    localStorage.removeItem('token');
    console.log('logged out')
    navigate('/');
  }

  return (
    <div className="w-full h-20 p-5 mb-5 border border-slate-300 flex justify-between items-center">
      <div className="flex">
        <img src={logo} className="h-10 w-10 mr-5"/>
      <div className="text-3xl font-bold">Payments App</div>
      </div>
      <div className="text-xl flex justify-between items-center">
        <div className="mr-5">Hello, {userFirstName}</div>
        <div className="rounded-full bg-gray-200 h-10 w-10 p-5 flex items-center justify-center">
          {userFirstName[0].toUpperCase()}
        </div>
        <button className="ml-5 bg-black text-base text-white h-10 rounded-md p-2" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
