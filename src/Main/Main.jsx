import { CiClock2 } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";

const Main = () => {
    return (
        <section className="mx-auto">
            {/* main section  */}
            <section className="container  mt-4 mb-8 font-lexend p-10 ">
                <div className="grid lg:grid-cols-5 gap-8 ">
                    <div className="grid col-span-3">
                        <div className="grid lg:grid-cols-2 border rounded-xl p-4">

                            {/* Left Side section  */}
                            <div className="card w-96 bg-base-100 shadow-xl border-slate-500">
                                <div className="card-body ">
                                    <div className="container bg-[#12132D0D] rounded-2xl">
                                        <span> img </span>
                                    </div>
                                    <h2 className="font-extrabold text-xl text-[#12132D]">Spaghetti Bolognese</h2>
                                    <p className="text-[#12132D99]">Classic Italian pasta dish with savory meat sauce. </p>
                                    <hr />
                                    <div className="mt-2">
                                        <h1 className="text-[#12132D] font-extrabold">Ingredients: 6</h1>
                                        <li>500g ground beef</li>
                                        <li>1 onion, chopped</li>
                                        <li>2 cloves garlic, minced</li>
                                    </div>
                                    <hr />
                                    <div className="flex gap-4">
                                        <div className="flex text-[#12132D99] gap-2 items-center">
                                            <span><CiClock2 /></span>
                                            <p className=""> <span>30</span> munites </p>
                                        </div>
                                        <div className="flex text-[#12132D99] gap-2 items-center">
                                            <span><FaFireFlameCurved /></span>
                                            <p className=""> <span>600</span> calories </p>
                                        </div>
                                    </div>
                                    <div className="grid justify-start">
                                    <button className="btn  bg-[#0BE58A]  border mx-auto rounded-full text-center font-bold text-[20px] text-[#FFFFFF] ">Want to Cook</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right side section  */}
                    <div className="grid col-span-2 border rounded-xl p-4">
                        <div className="p-4">
                        <h1 className="font-extrabold text-xl text-[#12132D] text-center mb-4">Want to cook: 01</h1>
                        <hr />
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-4 text-[#878787] font-medium">
                                <h1>Name</h1>
                                <h1>Time</h1>
                                <h1>Calories</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-1 text-[#878787] font-medium bg-[#28282808]">
                            <div className="flex item-center gap-2">
                                <span className="text-black font-bold">1</span>
                                <h1>Chicken Caesar Salad</h1>
                            </div>
                            <h1> <span>20</span> minutes</h1> 
                            <h1> <span>400</span> calories</h1> 
                            <button className="btn rounded-full btn-accent mx-auto">Preparing</button>
                            

                        </div>

                        {/* down part  */}
                        <div className="p-4 mt-4">
                        <h1 className="font-extrabold text-xl text-[#12132D] text-center mb-4">Currently cooking: 02</h1>
                        <hr />
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-3 text-[#878787] font-medium">
                                <h1>Name</h1>
                                <h1>Time</h1>
                                <h1>Calories</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-1 text-[#878787] font-medium bg-[#28282808]">
                            <div className="flex item-center gap-4">
                                <span className="text-black font-bold">1</span>
                                <h1>Spaghetti Bolognese</h1>
                            </div>
                            <h1> <span>30</span> minutes</h1> 
                            <h1> <span>600</span> calories</h1> 
                        </div>

                        {/* Total Calculet  */}
                        <div className="">
                            <div className="mt-4 text-black font-medium flex justify-between p-8">
                                <h1>Total Time = <span>45</span> minutes</h1>
                                <h1>Total Calories = <span>1050</span> calories</h1>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </section>
    );
};

export default Main;