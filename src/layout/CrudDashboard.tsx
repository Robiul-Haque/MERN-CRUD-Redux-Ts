import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook"
import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGetAllCrudQuery } from "../redux/features/crud/crudApi";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Grid2, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { BiEdit } from "react-icons/bi";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Controller, useForm } from 'react-hook-form';

const CrudDashboard = () => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const { data, isLoading } = useGetAllCrudQuery({});
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  type TTodoTable = {
    createdAt: string;
    description: string;
    email: string;
    image: string
    name: string
    phone: number;
    priority: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }

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

  console.log(data.data);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  }

  const StyledTableCell = styled(TableCell)<{ component?: string }>(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <main className="md:flex">
      <aside className="bg-slate-100 lg:w-[18%] h-auto lg:h-screen p-6 relative hidden lg:block">
        <h2 className="text-3xl font-semibold">Sidebar</h2>
        <hr className="my-6 border border-gray-300" />
        <ul className="flex justify-start flex-col gap-y-6 my-8">
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Dashboard</Link></li>
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Profile</Link></li>
        </ul>
        <hr className="mb-8 border border-gray-300" />
        <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
      </aside>
      {/* Mobile nav */}
      {
        toggle && <aside className="bg-slate-100 w-[55%] mx-auto h-auto lg:h-screen p-6 absolute top-[2%] left-[20%] block lg:hidden z-50">
          <ul className="flex justify-start flex-col gap-y-6 my-8">
            <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Dashboard</Link></li>
            <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Profile</Link></li>
          </ul>
          <hr className="mb-8 border border-gray-300" />
          <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
        </aside>
      }
      <section className="md:flex justify-center items-center lg:w-full bg-white h-screen">
        <div className="overflow-x-auto lg:w-11/12">
          <div className="flex lg:block justify-between items-center mx-10 my-8">
            <h1 className="text-center font-bold text-2xl">TODO</h1>
            <span className="block lg:hidden">
              {
                toggle ? <i onClick={() => setToggle(false)}><IoClose className="size-10" /></i> : <i onClick={() => setToggle(true)}><IoMenu className="size-10" /></i>
              }
            </span>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Image</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Priority</StyledTableCell>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data?.data?.map((row: TTodoTable) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {row.image}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">0{row.phone}</StyledTableCell>
                      <StyledTableCell align="center">{row.description}</StyledTableCell>
                      <StyledTableCell align="center">{row.priority}</StyledTableCell>
                      <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton color="primary" size="medium">
                          <Button variant="contained" onClick={handleClickOpen}>
                            <BiEdit />
                          </Button>
                        </IconButton>
                        <IconButton color="secondary" size="medium">
                          <DeleteForeverIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, margin: "0 auto" }}>
                    <Grid container spacing={2}>
                      {/* Name Field */}
                      <Grid item xs={12}>
                        <TextField fullWidth label="Name" {...register("name", { required: "Name is required", maxLength: 40 })} error={!!errors.name} helperText={errors?.name?.message?.toString()} />
                      </Grid>
                      {/* Email Field */}
                      <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email format", } })} error={!!errors.email} helperText={errors?.name?.message?.toString()} />
                      </Grid>
                      {/* Phone Field */}
                      <Grid item xs={12}>
                        <TextField fullWidth label="Phone" type="tel" {...register("phone")}
                        />
                      </Grid>
                      {/* Description Field */}
                      <Grid item xs={12}>
                        <TextField fullWidth label="Description" multiline rows={4} {...register("description", { maxLength: { value: 225, message: "Description cannot exceed 225 characters", } })} error={!!errors.description} helperText={errors?.name?.message?.toString()} />
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
                      {/* Image Upload Field */}
                      <Grid item xs={12}>
                        <input type="file" accept="image/jpeg, image/png" {...register("image", { required: "Image is required", validate: { fileSize: (files) => files && files[0]?.size <= 2 * 1024 * 1024 || "File size must be less than 2MB", fileType: (files) => files && ["image/jpeg", "image/png"].includes(files[0]?.type) || "Only JPG, JPEG, and PNG files are allowed" } })} />
                        {errors.image && (
                          <Typography color="error" variant="caption">
                            {errors?.image?.message?.toString()}
                          </Typography>
                        )}
                      </Grid>
                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose} autoFocus>
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CrudDashboard;