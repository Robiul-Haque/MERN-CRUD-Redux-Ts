import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import sign_up_todo from "../assets/sign-up-todo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";

const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [signUp] = useSignUpMutation();
    const navigate = useNavigate();

    // Create a new user
    const onSubmit = (data: any) => {
        const toastId = toast.loading("Creating account...");
        const formData = new FormData();

        const inputData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
        }

        formData.append("data", JSON.stringify(inputData));
        formData.append("image", data.image[0]);

        signUp(formData)
            .unwrap()
            .then((res) => {
                toast.success(res?.message, { id: toastId });
                navigate("/sign-in");
            })
            .catch((err) => {
                toast.error(err?.data?.message, { id: toastId });
            });
    };

    return (
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[4%]  lg:top-[4%] left-[30%] md:left-[40%] lg:left-[42%]">SIGNUP NOW!</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <img src={sign_up_todo} alt="Todo Image" className="w-[55%] md:w-[53%] lg:w-[30%]" />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 w-[85%] md:w-[55%] lg:w-[30%]">
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput type="text" {...register("name", { required: true })} label="Name" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput type="email" {...register("email", { required: true })} label="Email" />
                    </FormControl>
                    <FormControl>
                        <OutlinedInput type="file" {...register("image", { required: true })} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                        <OutlinedInput type="text" {...register("phone", { required: true })} label="Phone" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register("password", { required: true })}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <small>You already have an account please <span className="underline decoration-slate-950 text-gray-500 hover:text-gray-900 ease-in duration-300"><Link to="/sign-in">Sign In</Link></span> here</small>
                    <input type="submit" value={"Sign In"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
                </form >
            </div>
        </section>
    )
}

export default SignUpForm;
