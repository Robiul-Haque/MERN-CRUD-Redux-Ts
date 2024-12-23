import { IoClose, IoMenu } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setToggle } from "../redux/features/crud/crudSlice";
import { RootState } from "../redux/store";

const MobileNavToggleIcon = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector((state: RootState) => state.crud.toggle);

    return (
        <span className="block lg:hidden">
            {
                toggle ? <i onClick={() => dispatch(setToggle(false))}><IoClose className="size-10" /></i> : <i onClick={() => dispatch(setToggle(true))}><IoMenu className="size-10" /></i>
            }
        </span>
    )
}

export default MobileNavToggleIcon;
