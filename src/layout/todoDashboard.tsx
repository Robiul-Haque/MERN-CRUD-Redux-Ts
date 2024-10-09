import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook"
import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const todoDashboard = () => {
  const dispatch = useAppDispatch();

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
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Dashboard</Link></li>
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Profile</Link></li>
        </ul>
        <hr className="mb-8 border border-gray-300" />
        <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
      </aside>
      {/* Mobile nav */}
      <aside className="bg-slate-100 lg:w-[18%] h-auto lg:h-screen p-6 relative block lg:hidden z-50">
        <h2 className="text-3xl font-semibold">Sidebar</h2>
        <hr className="my-6 border border-gray-300" />
        <ul className="flex justify-start flex-col gap-y-6 my-8">
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Dashboard</Link></li>
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Profile</Link></li>
        </ul>
        <hr className="mb-8 border border-gray-300" />
        <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
      </aside>
      <section className="md:flex justify-center items-center lg:w-full bg-white">
        <div className="overflow-x-auto lg:w-11/12">
          <h1 className="text-center font-bold text-2xl mb-8">TODO</h1>
          <table className="table text-black text-center">
            {/* head */}
            <thead>
              <tr className="text-gray-500">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                [1, 2, 3, 4].map((index) => {
                  return (
                    <tr className="hover:bg-slate-100 hover:cursor-pointer">
                      <th>{index}</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                      <td>Quality Control Specialist</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default todoDashboard;
