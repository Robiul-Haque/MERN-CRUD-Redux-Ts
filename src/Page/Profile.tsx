import MobileNavToggleIcon from "../components/MobileNavToggleIcon"

const Profile = () => {
    return (
        <div>
            <section className="md:flex justify-center lg:w-full bg-white h-screen">
                <div className="overflow-x-auto lg:w-full lg:mx-5">
                    <div className="flex lg:block justify-between items-center mx-10 my-8">
                        <div className="flex">
                            <span className="w-6/12"></span>
                            <div className="flex justify-between w-6/12">
                                <h1 className="text-center font-bold text-2xl">TODO</h1>
                            </div>
                        </div>
                        <MobileNavToggleIcon />
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Profile
