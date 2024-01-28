import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignUp(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/dashboard");
        }
      }, []);

    async function handleSignUp(){
        const url = "http://localhost:3000/api/v1/user/signup";
        const response = await axios.post(url, {
            firstName : firstName,
            lastName : lastName,
            username: email,
            password : password
        });
        
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard");

    }
    return(
        <div className="bg-neutral-400 h-screen flex justify-center">
            <div className="bg-white mt-20 h-fit p-10 rounded-lg">
                <Heading label={'Sign Up'}/>
                <SubHeading label={'Enter your information to create an account'} />
                <InputBox label={'First Name'} placeholder={'John'} onChange={(e)=>setFirstName(e.target.value)}/>
                <InputBox label={'Last Name'} placeholder={'Doe'} onChange={(e)=>setLastName(e.target.value)}/>
                <InputBox label={'Email'} placeholder={'john@example.com'} onChange={(e)=>setEmail(e.target.value)}/>
                <InputBox label={'Password'} placeholder={''} type={'password'} onChange={(e)=>setPassword(e.target.value)}/>
                <Button label={'Sign Up'} onClick={handleSignUp}/>
                <BottomWarning label={'Already have an account? '} buttonText={'Login'} to={'/signin'}/>
            </div>
        </div>
    )
}