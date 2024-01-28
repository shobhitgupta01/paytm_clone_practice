import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const url = "http://localhost:3000/api/v1/user/login";
    const response = await axios.post(url, {
      username: username,
      password: password,
    });

    localStorage.setItem("token", response.data.jwt);
    navigate("/dashboard");
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="bg-neutral-400 h-screen flex justify-center">
      <div className="bg-white mt-20 h-fit p-10 rounded-lg ">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox
          label={"Email"}
          placeholder={"John"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          label={"Password"}
          placeholder={""}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label={"Sign In"} onClick={handleLogin} />
        <BottomWarning
          label={"Dont have an account? "}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}
