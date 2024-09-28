import { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import Todo from "../assets/todo.svg";

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <section className="relative">
            <div className="flex flex-col items-center w-[50%] absolute top-[20%] left-[26%]">
                <h1 className="text-2xl font-bold leading-10 bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Welcome Back Again!</h1>
            </div>
            <div className="flex justify-center items-center gap-x-14 h-screen bg-slate-50">
                <img src={Todo} alt="Todo Image" className="w-[30%]" />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-3/12">
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Email</InputLabel>
                        <OutlinedInput type="email" {...register("Email", { required: true })} id="component-outlined" label="Email" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
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
                    <div className="flex justify-between">
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
