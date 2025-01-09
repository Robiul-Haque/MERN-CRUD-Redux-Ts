import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "../redux/features/auth/authApi";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { toast } from "sonner";

const ForgotPasswordForm = () => {
    const { register, handleSubmit } = useForm();
    const [forgotPassword] = useForgotPasswordMutation();

    const onSubmit = async (data: any) => {
        const tostId = toast.loading("We find your account");

        forgotPassword(data?.email)
            .unwrap()
            .then((res) => {
                toast.success(res?.message, { id: tostId });
            })
            .catch((err) => {
                toast.error(err?.data?.message, { id: tostId });
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-[80%] lg:w-[30%]">
            <span className="flex justify-center items-end gap-x-2"><PersonSearchIcon /> <p className="text-center text-xl font-bold text-slate-400">Find your account...</p></span>
            <FormControl>
                <InputLabel htmlFor="component-outlined">Your Email</InputLabel>
                <OutlinedInput type="email" {...register("email", { required: true })} id="component-outlined" label="Email" />
            </FormControl>
            <input type="submit" value={"Search"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
        </form >
    )
}

export default ForgotPasswordForm;
