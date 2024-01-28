import { useNavigate } from "react-router-dom";
import Balance from "../components/Balance";
import Navbar from "../components/NavBar";
import Users from "../components/Users";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('token')){
      navigate('/');
    }
  },[])
  
  return (
    <div>
      <Navbar />
      <Balance value={5000}/>
      <Users/>
    </div>
  );
}




