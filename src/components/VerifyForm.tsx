import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../redux/features/auth/authApi";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { toast } from "sonner";

const VerifyForm = () => {
  const { register, handleSubmit } = useForm();
  const { email } = useAppSelector(state => state.auth);
  const [verifyOtp] = useVerifyOtpMutation();
  const navigate = useNavigate();

  // Verify OTP
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Verifying OTP...");

    verifyOtp({ email, otp: data?.otp_code })
      .unwrap()
      .then((res) => {
        if (res?.success) navigate("/reset-password");
        toast.success(res?.message, { id: toastId });
      })
      .catch((err) => {
        toast.error(err?.data?.message, { id: toastId })
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-[80%] lg:w-[30%]">
      <span className="flex justify-center items-end gap-x-2"></span>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Your Otp</InputLabel>
        <OutlinedInput type="number" {...register("otp_code", { required: true })} id="component-outlined" label="Email" />
      </FormControl>
      <input type="submit" value={"Verify"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
    </form >
  )
}

export default VerifyForm;
