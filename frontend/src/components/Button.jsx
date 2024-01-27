export default function Button({ label, onClick }) {
  return (
    <button
      className="bg-black text-white w-full h-10 rounded-md p-2 mb-6"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
