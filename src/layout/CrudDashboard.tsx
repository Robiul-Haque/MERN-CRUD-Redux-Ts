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
import { IconButton } from "@mui/material";
import { BiEdit } from "react-icons/bi";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CrudDashboard = () => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const { data, isLoading } = useGetAllCrudQuery({});

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

  console.log(data);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }


  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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
                    <StyledTableCell>Image</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Email</StyledTableCell>
                    <StyledTableCell align="right">Phone</StyledTableCell>
                    <StyledTableCell align="right">Time</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Priority</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton color="primary" size="small">
                          <BiEdit />
                        </IconButton>
                        <IconButton color="secondary" size="small">
                          <DeleteForeverIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CrudDashboard;