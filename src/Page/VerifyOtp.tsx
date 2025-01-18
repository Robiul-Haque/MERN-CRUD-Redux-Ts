import VerifyForm from "../components/VerifyForm";
import Title from "../PageTitle/Title";

const VerifyOtp = () => {
    return (
        <>
        <Title title="Verify OTP"></Title>
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[38%] lg:top-[30%] left-[26%] lg:left-[42%]">VERIFY YOUR OTP</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <VerifyForm />
            </div>
        </section>
        </>
    )
}

export default VerifyOtp;
