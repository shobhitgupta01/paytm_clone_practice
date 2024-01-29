import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../customHooks/useDebounce";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([{
    username: "",
    firstName: "",
    lastName: "",
    _id: "",
  }]);

  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const fetchUsers = async () => {
    const url =
      "http://localhost:3000/api/v1/user/bulk?filter=" + debouncedFilter;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUsers(response.data.users);
  };


  useEffect(() => {
    fetchUsers();
  }, [debouncedFilter]);


  return (
    <div className="p-5">
      <div className="mb-5 text-2xl font-semibold">Users</div>
      <input
        className="border border-slate-300 text-gray-500 rounded-md w-full h-15 p-3 mb-10"
        type="text"
        placeholder="Search users..."
        onChange={(e) => setFilter(e.target.value)}
      />
      {users.map((user) => (
        <User key={user._id} name={user.firstName} />
      ))}
    </div>
  );
}

function User({ name }) {
  const navigate = useNavigate();
  return (
    <div className="mb-5 p-5 flex items-center justify-between shadow-lg shadow-slate-100">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-200 h-10 w-10 p-5 flex items-center justify-center mr-5">
          {name[0]}
        </div>
        <div className="text-xl font-semibold">{name}</div>
      </div>

      <button
        className="p-3 bg-black text-white rounded-md"
        onClick={() => navigate("/send")}
      >
        Send Money
      </button>
    </div>
  );
}
