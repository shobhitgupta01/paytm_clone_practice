export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardContent />
    </div>
  );
}

function Navbar() {
  const name = "User";
  return (
    <div className="w-full h-20 p-5 mb-5 border border-slate-300 flex justify-between items-center">
      <div className="text-3xl font-bold">Payments App</div>
      <div className="text-xl flex justify-between items-center">
        <div className="mr-5">Hello, {name}</div>
        <div className="rounded-full bg-gray-200 h-10 w-10 p-5 flex items-center justify-center">
          {name[0]}
        </div>
      </div>
    </div>
  );
}

function DashboardContent() {
  const balance = 5000;
  return (
    <div className="p-5">
      <div className="flex items-center mb-10">
        <div className="text-2xl font-semibold mr-5">Your Balance</div>
        <span className="text-2xl">&#8377; {balance}</span>
      </div>
      <div className="mb-5 text-2xl font-semibold">Users</div>
      <input
        className="border border-slate-300 text-gray-500 rounded-md w-full h-15 p-3 mb-10"
        type="text"
        placeholder="Search users..."
      />
      <UserListElement name={"Shobhit"} />
      <UserListElement name={"Tanisha"} />
      <UserListElement name={"John"} />
    </div>
  );
}

function UserListElement({ name }) {
  return (
    <div className="mb-5 p-5 flex items-center justify-between shadow-lg shadow-slate-100">
      <div className="flex items-center">
        <div className="rounded-full bg-gray-200 h-10 w-10 p-5 flex items-center justify-center mr-5">
          {name[0]}
        </div>
        <div className="text-xl font-semibold">{name}</div>
      </div>
      <button className="p-3 bg-black text-white rounded-md">Send Money</button>
    </div>
  );
}
