import { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import SignInTodo from "../assets/sign_in_todo.svg";
import { useLoginMutation } from '../redux/features/auth/authApi';

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [login, { data, error }] = useLoginMutation();

    console.log("Data ", data);
    console.log("Error ", error);

    const onSubmit = (data: any) => {
        console.log("Form data", data);
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        login(userInfo);
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <section className="relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent absolute top-[8%] lg:top-[20%] left-[17.5%] lg:left-[42%]">WELCOME BACK AGAIN!</h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-12 lg:gap-x-14 h-screen bg-slate-50">
                <img src={SignInTodo} alt="Todo Image" className="w-[80%] md:w-[53%] lg:w-[30%]" />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 lg:w-[30%]">
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput type="email" {...register("email", { required: true })} id="component-outlined" label="Email" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", { required: true })}
                            id="outlined-adornment-password"
                            label="Password"
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
                        />
                    </FormControl>
                    <div className="flex justify-between gap-x-12 md:gap-x-28 lg:gap-x-0.5">
                        <small>Don,t have an account <span className="underline decoration-slate-950 text-gray-500 hover:text-gray-900 ease-in duration-300"><a href="#">Sign Up</a></span> here</small>
                        <small className="underline decoration-slate-950 text-gray-500 hover:text-gray-900 ease-in duration-300"><a href="#">Forgot Password</a></small>
                    </div>
                    <input type="submit" value={"Sign In"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
                </form >
            </div>
        </section>
    )
}

export default SignInForm;
