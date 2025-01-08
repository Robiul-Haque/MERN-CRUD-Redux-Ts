import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "../redux/features/auth/authApi";

const ForgotPasswordForm = () => {
    const { register, handleSubmit } = useForm();
    const [forgotPassword, { data }] = useForgotPasswordMutation();
    console.log(data);

    const onSubmit = async (data: any) => {
        forgotPassword(data?.email);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 lg:w-[30%]">
            <FormControl>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput type="email" {...register("email", { required: true })} id="component-outlined" label="Email" />
            </FormControl>
            <input type="submit" value={"Submit"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
        </form>
    )
}

export default ForgotPasswordForm;
