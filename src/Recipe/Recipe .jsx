import { FaRegUserCircle } from "react-icons/fa";
import Rectangle from './Rectangle.png';

const Recipe  = () => {
    return (
        
        <section className="container mx-auto mt-4 mb-8 font-lexend p-10">

            {/* header section  */}
            <header className=" ">
    
                <div className="navbar bg-base-100">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e4e4e7] rounded-box w-52 ">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-4xl font-extrabold text-[#030712]">Recipe Calories</a>
                    </div>
                    <div className="navbar-center  lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#030712b3] text-lg font-medium">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <label className="input input-bordered flex items-center gap-2 rounded-full border-none bg-[#d1d5db] ">
                        <input type="text" className="grow-full" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <a className="btn rounded-full bg-[#1DD1001A] font-semibold text-xl "><FaRegUserCircle /></a>
                    </div>
                </div>

            </header>

            {/* banner section  */}
            <section className="mt-10">
                <div className=" card w-auto bg-base-100  image-full flex flex-col items-center  ">
                    <figure><img src={Rectangle} alt="" /></figure>
                    <div className="text-center ">
                        <h2 className="text-6xl font-extrabold text-white">Discover an exceptional cooking <br /> class tailored for you!</h2>
                        <p className="text-[18px] font-normal text-white lg:mt-7"> Recipe calories refer to the total energy content of a dish or meal, typically measured in kilocalories (kcal) or calories. It's the sum of the calories contributed <br /> by each ingredient used in the recipe. Knowing the calorie content of a recipe </p>
                        <div className="card-actions justify-center mt-7 ">
                        <button className="btn bg-[#0BE58A] border-none rounded-full text-center font-bold text-[20px] text-[#030712] ">Explore Now</button>
                        <button className="btn bg-inherit border rounded-full text-center font-bold text-[20px] text-[#FFFFFF] ">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* titel section  */}
            <section className="mt-10 m-8">
                <div className="grid text-center items-center justify-center ">
                    <h1 className="text-4xl text-[#12132D] font-black ">Our Recipes</h1>
                    <p className="text-[#12132D99] font-normal mt-2">Our Recipes" could refer to a collection of recipes owned or curated by a particular entity, such as a website, cooking platform, cookbook, or individual. <br /> A cookbook might feature a chapter titled "Our Recipes," showcasing dishes developed or chosen by the author.</p>
                </div>
            </section>

            


        </section>
       
    );
};

export default Recipe ;