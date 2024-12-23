import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { Link, Outlet } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RootState } from "../redux/store";
import { setToggle } from "../redux/features/crud/crudSlice";

const CrudDashboard = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state: RootState) => state.crud.toggle);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  }

  return (
    <main className="md:flex">
      <aside className="bg-slate-100 lg:w-[18%] h-auto lg:h-screen p-6 relative hidden lg:block">
        <h2 className="text-3xl font-semibold">Sidebar</h2>
        <hr className="my-6 border border-gray-300" />
        <ul className="flex justify-start flex-col gap-y-6 my-8">
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to="/dashboard" className="font-semibold">Dashboard</Link></li>
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to="/dashboard/profile" className="font-semibold">Profile</Link></li>
        </ul>
        <hr className="mb-8 border border-gray-300" />
        <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
      </aside>
      {/* Mobile nav */}
      {
        toggle && <aside className="bg-slate-100 w-[55%] mx-auto h-auto lg:h-screen p-6 absolute top-[2%] left-[20%] block lg:hidden z-50">
          <ul className="flex justify-start flex-col gap-y-6 my-8">
            <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to="/dashboard" onClick={() => dispatch(setToggle(false))} className="font-semibold">Dashboard</Link></li>
            <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to="/dashboard/profile" onClick={() => dispatch(setToggle(false))} className="font-semibold">Profile</Link></li>
          </ul>
          <hr className="mb-8 border border-gray-300" />
          <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
        </aside>
      }
      <Outlet />
      {/* <section className="md:flex justify-center items-center lg:w-full bg-white h-screen">
        <div className="overflow-x-auto lg:w-full lg:mx-5">
          <div className="flex lg:block justify-between items-center mx-10 my-8">
            <div className="flex">
              <span className="w-6/12"></span>
              <div className="flex justify-between w-6/12">
                <h1 className="text-center font-bold text-2xl">TODO</h1>
                <AddCrud />
              </div>
            </div>
            <span className="block lg:hidden">
              {
                toggle ? <i onClick={() => setToggle(false)}><IoClose className="size-10" /></i> : <i onClick={() => setToggle(true)}><IoMenu className="size-10" /></i>
              }
            </span>
          </div>
          <CrudTable />
        </div>
      </section> */}
    </main>
  )
}

export default CrudDashboard;