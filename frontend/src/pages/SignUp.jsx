import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

export default function SignUp(){
    return(
        <div className="bg-neutral-400 h-screen flex justify-center">
            <div className="bg-white mt-20 h-fit p-10 rounded-lg">
                <Heading label={'Sign Up'}/>
                <SubHeading label={'Enter your information to create an account'} />
                <InputBox label={'First Name'} placeholder={'John'}/>
                <InputBox label={'Last Name'} placeholder={'Doe'}/>
                <InputBox label={'Email'} placeholder={'john@example.com'}/>
                <InputBox label={'Password'} placeholder={''} type={'password'}/>
                <Button label={'Sign Up'}/>
                <BottomWarning label={'Already have an account? '} buttonText={'Login'} to={'/signin'}/>
            </div>
        </div>
    )
}