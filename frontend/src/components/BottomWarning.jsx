import { useNavigate } from "react-router-dom";

export default function BottomWarning({ label, buttonText, to }) {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      {label}
      <span
        className="underline cursor-pointer"
        onClick={() => navigate(to)}
      >
        {buttonText}
      </span>
    </div>
  );
}
