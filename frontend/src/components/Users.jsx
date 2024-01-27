import { useNavigate } from "react-router-dom";

export default function Users() {
  return (
    <div className="p-5">
      <div className="mb-5 text-2xl font-semibold">Users</div>
      <input
        className="border border-slate-300 text-gray-500 rounded-md w-full h-15 p-3 mb-10"
        type="text"
        placeholder="Search users..."
      />
      <User name={"Shobhit"} />
      <User name={"Tanisha"} />
      <User name={"John"} />
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
      
      <button className="p-3 bg-black text-white rounded-md" onClick={()=>navigate('/send')}>Send Money</button>
    </div>
  );
}
