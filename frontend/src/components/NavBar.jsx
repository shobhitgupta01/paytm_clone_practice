export default function Navbar({ userName = "User" }) {
  return (
    <div className="w-full h-20 p-5 mb-5 border border-slate-300 flex justify-between items-center">
      <div className="text-3xl font-bold">Payments App</div>
      <div className="text-xl flex justify-between items-center">
        <div className="mr-5">Hello, {userName}</div>
        <div className="rounded-full bg-gray-200 h-10 w-10 p-5 flex items-center justify-center">
          {userName[0]}
        </div>
      </div>
    </div>
  );
}
