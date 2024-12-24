import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm();

    const onSubmit = (data: any) => {
        const formData = new FormData();

        const inputData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            priority: data.priority,
            description: data.description,
        }

        formData.append("data", JSON.stringify(inputData));
        formData.append("image", data.image[0]);
    }

    return (
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} className="mx-auto mb-10"/>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, margin: "5px auto" }}>
                <Grid container spacing={2}>
                    {/* Name Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" {...register("name", { required: "Name is required", maxLength: 40 })} error={!!errors.name} helperText={errors?.name?.message?.toString()} />
                    </Grid>
                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email format", } })} error={!!errors.email} />
                    </Grid>
                    {/* Phone Field */}
                    <Grid item xs={12}>
                        <TextField fullWidth label="Phone" type="tel" {...register("phone")}
                        />
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
        </div>
    )
}

export default ProfileForm
