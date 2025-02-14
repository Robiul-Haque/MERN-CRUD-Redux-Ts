import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetProfileQuery, useUpdateUserMutation } from "../redux/features/profile/profileApi";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { toast } from "sonner";

const ProfileForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm();
    const { email }: any = useAppSelector((state: RootState) => state.auth.user);
    const { data, isLoading } = useGetProfileQuery(email);
    const [updateUserById, { data: updateData }] = useUpdateUserMutation();

    useEffect(() => {
        if (data) {
            reset({
                name: data?.data?.name || "",
                email: data?.data?.email || "",
                phone: data?.data?.phone || "",
            });
        }
    }, [data, reset]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-500 fill-fuchsia-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (updateData?.success) toast.success(updateData?.message);

    const onSubmit = (data: any) => {
        const formData = new FormData();

        const inputData = {
            name: data.name,
            phone: data.phone,
        }

        formData.append("data", JSON.stringify(inputData));
        formData.append("image", data.image[0]);

        updateUserById({ email, data: formData });
    }

    return (
        <>
            <Avatar alt={data?.data?.name} src={data?.data?.image?.url} sx={{ width: 100, height: 100 }} className="mx-auto mb-10 border-2 border-purple-500" />
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, margin: "5px auto" }} className="px-5">
                <Grid container spacing={2}>
                    {/* Name Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" {...register("name", { required: "Name is required", maxLength: 40 })} error={!!errors.name} helperText={errors?.name?.message?.toString()} />
                    </Grid>
                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" InputProps={{ readOnly: true }} {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email format", } })} error={!!errors.email} className="bg-gray-200" />
                    </Grid>
                    {/* Phone Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Phone" type="tel" {...register("phone")} />
                    </Grid>
                    {/* Image Upload Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth type="file" {...register("image", { required: "Image is required", validate: { fileSize: (files) => files && files[0]?.size <= 2 * 1024 * 1024 || "File size must be less than 2MB", fileType: (files) => files && ["image/jpeg", "image/png"].includes(files[0]?.type) || "Only JPG, JPEG, and PNG files are allowed" } })} error={!!errors.image} />
                        {errors.image && (
                            <Typography color="error" variant="caption">
                                {errors?.image?.message?.toString()}
                            </Typography>
                        )}
                    </Grid>
                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth disabled={!isValid}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default ProfileForm
