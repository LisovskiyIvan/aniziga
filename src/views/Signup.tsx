import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";


export default function Signup() {
    return (
        <>
        
        <div className="min-h-[100dvh] bg-dblue w-[100%] text-xl flex flex-col items-center">
        <Navbar /> 
        <SignupForm />
        </div>
        </>
    )
}