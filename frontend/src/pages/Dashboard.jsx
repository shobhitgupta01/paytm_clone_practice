import Balance from "../components/Balance";
import Navbar from "../components/NavBar";
import Users from "../components/Users";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Balance value={5000}/>
      <Users/>
    </div>
  );
}




