import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../redux/features/auth/authApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { removeAccountEmail, useGetEmail } from "../redux/features/auth/authSlice";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast } from "sonner";

const ResetPasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const [resetPassword] = useResetPasswordMutation();
  const [showPassword, setShowPassword] = useState(false);
  const getEmail = useSelector(useGetEmail);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Updating Password...");

    resetPassword({ email: getEmail, password: data?.password })
      .unwrap()
      .then((res) => {
        dispatch(removeAccountEmail());
        if (res?.success) navigate("/sign-in");
        toast.success(res?.message, { id: toastId });
      })
      .catch((err) => toast.error(err?.message, { id: toastId }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-[80%] lg:w-[30%]">
      <span className="flex justify-center items-end gap-x-2"></span>
      <FormControl>
        <InputLabel htmlFor="component-outlined">New Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          {...register("password", { required: true })}
          id="outlined-adornment-password"
          label="Password"
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
        />
      </FormControl>
      <input type="submit" value={"Search"} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000" />
    </form >
  )
}

export default ResetPasswordForm;
