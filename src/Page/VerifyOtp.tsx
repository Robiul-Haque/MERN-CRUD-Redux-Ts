import VerifyForm from "../components/VerifyForm";

const VerifyOtp = () => {
    return (
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[8%] lg:top-[30%] left-[20.5%] lg:left-[42%]">VERIFY YOUR OTP</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <VerifyForm />
            </div>
        </section>
    )
}

export default VerifyOtp;
