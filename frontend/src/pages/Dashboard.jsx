import { useNavigate } from "react-router-dom";
import Balance from "../components/Balance";
import Navbar from "../components/NavBar";
import Users from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate()
  const [balance, setBalance] = useState(0);

  async function fetchBalance(){
    const url = "http://localhost:3000/api/v1/account/balance";
    const response = await axios.get(url, {
      "headers":{
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBalance(response.data.balance);
  }

  useEffect(()=>{
    if (!localStorage.getItem('token')){
      navigate('/');
    }
    fetchBalance();
  },[])
  
  return (
    <div>
      <Navbar />
      <Balance value={balance}/>
      <Users/>
    </div>
  );
}




