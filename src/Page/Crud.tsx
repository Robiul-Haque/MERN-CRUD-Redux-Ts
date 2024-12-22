import { IoClose, IoMenu } from "react-icons/io5";
import AddCrud from "../components/AddCrud";
import CrudTable from "../components/CrudTable";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setToggle } from "../redux/features/crud/crudSlice";

const Crud = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.crud.toggle);

    return (
        <section className="md:flex justify-center items-center lg:w-full bg-white h-screen">
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
                            toggle ? <i onClick={() => dispatch(setToggle(false))}><IoClose className="size-10" /></i> : <i onClick={() => dispatch(setToggle(true))}><IoMenu className="size-10" /></i>
                        }
                    </span>
                </div>
                <CrudTable />
            </div>
        </section>
    )
}

export default Crud;
