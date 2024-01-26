export default function SignIn(){
    return(
        <div className="bg-neutral-400 h-screen flex justify-center">
            <div className="bg-white mt-20 h-fit p-10 rounded-lg ">
                <div className="text-3xl font-bold text-center mb-3">Sign In</div>
                <div className="text-base text-gray-500 mb-8">Enter your credentials to access your account</div>
                
                <div className="text-lg font-semibold mb-2">Email</div>
                <div className="mb-6"><input className="border border-slate-300 text-gray-500 rounded-md w-full h-9 p-3" type="text"/></div>
                <div className="text-lg font-semibold mb-2">Password</div>
                <div className="mb-6"><input className="border border-slate-300 text-gray-500 rounded-md w-full h-9 p-3" type="password"/></div>
                <button className="bg-black text-white w-full h-10 rounded-md p-2 mb-6">Sign In</button>
                <div className="text-center">Dont have an account? <span className="underline cursor-pointer">Sign Up</span></div>

            </div>
            
        </div>
    )
}