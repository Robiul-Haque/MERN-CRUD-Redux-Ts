import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "../redux/features/auth/authApi";
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const ForgotPasswordForm = () => {
    const { register, handleSubmit } = useForm();
    const [forgotPassword, { data }] = useForgotPasswordMutation();
    console.log(data);

    const onSubmit = async (data: any) => {
        forgotPassword(data?.email);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-[80%] lg:w-[30%]">
            <span className="flex justify-center items-baseline gap-x-2"><TransferWithinAStationIcon /> <p className="text-center text-xl font-bold text-slate-400">Find your account...</p></span>
            <FormControl>
                <InputLabel htmlFor="component-outlined">Your Email</InputLabel>
                <OutlinedInput type="email" {...register("email", { required: true })} id="component-outlined" label="Email" />
            </FormControl>
            <span className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000"><PersonSearchIcon /> <input type="submit" value={"Search"} /></span>
        </form >
    )
}

export default ForgotPasswordForm;
