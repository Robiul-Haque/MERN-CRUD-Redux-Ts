import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { useAddCrudMutation } from "../redux/features/crud/crudApi";
import { toast } from "sonner";

const AddCrud = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm();
    const [AddCrud, { data: responseData }] = useAddCrudMutation();

    if (responseData?.success) toast.success(responseData?.message);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

        AddCrud(formData);
    }

    return (
        <>
            <Button onClick={handleClickOpen} variant="contained"><AddIcon /> Create</Button>

            {/* Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className="flex justify-between items-center" id="alert-dialog-title">
                    {"Create crud data..."}
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" size="small" aria-label="close"><CloseIcon /> Close</Button>
                    </DialogActions>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
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
                                {/* Priority Field */}
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Priority</InputLabel>
                                        <Controller name="priority" control={control} defaultValue="" rules={{ required: "Priority is required" }} render={({ field }) => (
                                            <Select {...field} error={!!errors.priority}>
                                                <MenuItem value="High">High</MenuItem>
                                                <MenuItem value="Medium">Medium</MenuItem>
                                                <MenuItem value="Low">Low</MenuItem>
                                            </Select>
                                        )}
                                        />
                                        {errors.priority && (
                                            <Typography color="error" variant="caption">
                                                {errors?.priority?.message?.toString()}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Grid>
                                {/* Description Field */}
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Description" multiline rows={2} {...register("description", { maxLength: { value: 225, message: "Description cannot exceed 225 characters", } })} error={!!errors.description} />
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
                                    <Button variant="contained" color="primary" type="submit" fullWidth disabled={!isValid} onClick={handleClose}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddCrud
