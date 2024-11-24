import SignInTodo from "../assets/sign_in_todo.svg";
import SignInForm from '../components/SignInForm';

const SignIn = () => {
    return (
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[8%] lg:top-[20%] left-[17.5%] lg:left-[42%]">WELCOME BACK AGAIN!</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <img src={SignInTodo} alt="Todo Image" className="w-[80%] md:w-[53%] lg:w-[30%]" />
                <SignInForm />
            </div>
        </section>
    )
}

export default SignIn;