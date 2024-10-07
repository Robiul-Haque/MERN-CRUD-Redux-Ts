import { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { MdOutlineLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hook';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignInForm = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        const tostId = toast.loading("Logging in");
        try {
            const userInfo = {
                email: data.email,
                password: data.password,
            }
            const res = await login(userInfo).unwrap();
            // Verify token and return user info if valid
            const decodedUserData = verifyToken(res.data.accessToken);
            dispatch(setUser({ user: decodedUserData, token: res.data.accessToken }));
            if (res?.success) navigate("/dashboard");
            toast.success("Logged in", { id: tostId });
        } catch (err) {
            toast.error("Something went wrong try again!", { id: tostId });
        }
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
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
                <small>Don,t have an account <span className="underline decoration-slate-950 text-gray-500 hover:text-gray-900 ease-in duration-300"><a href="/sign-up">Sign Up</a></span> here</small>
                <a href="#" className="flex justify-center items-center gap-x-2 underline decoration-slate-950 text-gray-500 hover:text-gray-900 ease-in duration-300 cursor-pointer">
                    <MdOutlineLock />
                    <small><p>Forgot Password</p></small>
                </a>
            </div>
            <input type="submit" value={"Sign In"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
        </form >
    )
}

export default SignInForm;
