import forgotPassword from "../assets/forgot_password.svg";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Title from "../PageTitle/Title";

const ForgotPassword = () => {
    return (
        <>
            <Title title="Forgot Password"></Title>
            <section className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[8%] lg:top-[20%] left-[20.5%] lg:left-[42%]">FORGOT PASSWORD!</h1>
                <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                    <img src={forgotPassword} alt="Todo Image" className="w-[70%] md:w-[53%] lg:w-[30%]" />
                    <ForgotPasswordForm />
                </div>
            </section>
        </>
    )
}

export default ForgotPassword;
