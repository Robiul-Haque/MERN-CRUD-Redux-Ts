import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import sign_up_todo from "../assets/sign-up-todo.svg";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";

const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [signUp, { data, isLoading, isSuccess, isError }] = useSignUpMutation();
    console.log(data);

    const onSubmit = (data: any) => {
        // console.log(data);
        // const tostId = toast.loading("Creating acount...");
        const formData = new FormData();

        if (!data.image || data.image.length === 0) {
            toast.error("Please upload an image.");
            return;
        }

        const inputData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
        }

        formData.append("data", JSON.stringify(inputData));
        formData.append("image", data.image[0]);

        signUp({ data: formData });
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[4%]  lg:top-[4%] left-[30%] md:left-[40%] lg:left-[42%]">SIGNUP NOW!</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <img src={sign_up_todo} alt="Todo Image" className="w-[50%] md:w-[53%] lg:w-[30%]" />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 lg:w-[30%]">
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput type="text" {...register("name", { required: true })} id="component-outlined" label="Name" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput type="email" {...register("email", { required: true })} id="component-outlined" label="Email" />
                    </FormControl>
                    <FormControl>
                        <OutlinedInput type="file" {...register("image", { required: true })} id="component-outlined" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                        <OutlinedInput type="text" {...register("phone", { required: true })} id="component-outlined" label="Phone" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register("password", { required: true })}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
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
