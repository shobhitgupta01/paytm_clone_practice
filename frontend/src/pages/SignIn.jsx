import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

export default function SignIn(){
    return(
        <div className="bg-neutral-400 h-screen flex justify-center">
            <div className="bg-white mt-20 h-fit p-10 rounded-lg ">
                <Heading label={'Sign In'}/>
                <SubHeading label={'Enter your credentials to access your account'}/>
                <InputBox label={'Email'} placeholder={'John'}/>
                <InputBox label={'Password'} placeholder={''} type={'password'}/>
                <Button label={'Sign In'}/>
                <BottomWarning label={'Dont have an account? '} buttonText={'Sign Up'} to={'/signup'}/>
            </div>
            
        </div>
    )
}