import AddCrud from "../components/AddCrud";
import CrudTable from "../components/CrudTable";
import MobileNavToggleIcon from "../components/MobileNavToggleIcon";
import Title from "../PageTitle/Title";

const Crud = () => {
    return (
        <>
            <Title title="Crud"></Title>
            <section className="md:flex justify-center lg:w-full bg-white h-screen">
                <div className="overflow-x-auto lg:w-full lg:mx-5">
                    <div className="flex lg:block justify-between items-center mx-10 my-8">
                        <div className="flex">
                            <span className="lg:w-6/12"></span>
                            <div className="flex gap-x-10 lg:gap-x-0 md:justify-between items-center lg:w-6/12">
                                <h1 className="text-center font-bold text-2xl">TODO</h1>
                                <AddCrud />
                            </div>
                        </div>
                        <MobileNavToggleIcon />
                    </div>
                    <CrudTable />
                </div>
            </section>
        </>
    )
}

export default Crud;