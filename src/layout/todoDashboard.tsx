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
    <main className="flex">
      <aside className="bg-slate-100 lg:w-[18%] lg:h-screen p-6 rounded-2xl relative">
        <h2 className="text-3xl font-semibold">Sidebar</h2>
        <hr className="my-6 border border-gray-300" />
        <ul className="flex justify-start flex-col gap-y-6 my-8">
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><LuListTodo className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Dashboard</Link></li>
          <li className="flex justify-start items-center gap-x-3 cursor-pointer bg-black hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-indigo-700 bg-clip-text text-transparent transition-all"><FaRegUserCircle className="size-1/12 text-black" /><Link to={"#"} className="font-semibold">Profile</Link></li>
        </ul>
        <hr className="mb-8 border border-gray-300" />
        <button onClick={handleLogout} className="flex justify-center items-center gap-x-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 w-full"><FiLogOut /> Logout</button>
      </aside>
      <section className="flex justify-center items-center w-full">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default todoDashboard;
