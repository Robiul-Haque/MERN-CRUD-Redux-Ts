import { toast } from "sonner";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook"

const todoDashboard = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  }

  return (
    <>
      <button onClick={handleLogout} className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md cursor-pointer hover:from-fuchsia-700 hover:to-indigo-700 ease-in duration-1000 m-5">Logout</button>
    </>
  )
}

export default todoDashboard
