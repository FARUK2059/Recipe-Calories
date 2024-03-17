
// import React from 'react';

import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Main = () => {
    
    const [item, setItems] = useState([]);
    const [colectdata, setColectedData] = useState([]);
    const [tableCount, setTableCount] = useState(0);
    const [currentCookingList, setCurrentCookingList] = useState([]);

     
    const sumOfCalori = currentCookingList.reduce((prev, currentCalory) => {
        const nextValue = parseInt(currentCalory.calories);
        return prev + nextValue;
    },0);

    const sumMinuts = currentCookingList.reduce((prev, currentMinuts) => {
        const nextValue = parseInt(currentMinuts.preparing_time)
        return prev + nextValue;
    }, 0);
     

    const handlCookCalculet = (Item) =>{
        // console.log(Item)
        if(!colectdata.some(Items => Items.recipe_id === Item.recipe_id)){
            const colectedItem = [...colectdata, Item];
            setColectedData(colectedItem);
            setTableCount(tableCount + 1);
        }
        else{
            toast("Don't try again");
        }
    }

    const handlPreparingButton = (table) => {
        // console.log(table)
        const preparingCooklist = colectdata.filter((items) => items.recipe_id !== table.recipe_id );
        setColectedData(preparingCooklist);
        setCurrentCookingList([...currentCookingList, table]);
        setTableCount(tableCount - 1);
           
    };

    useEffect(() => {
        fetch('Recipi.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    //   console.log(item);

    return (
        //  main section 
        <div className="grid grid-cols-5 gap-8 mb-10 p-8">

            {/* left side section  */}
            <div className="grid c grid-cols-2 col-span-3 border rounded-xl p-4 gap-4">

                {
                    // item.map(Item => console.log(Item))
                    item.map(Item => {
                        // console.log(Item);
                        return (
                            <div key={Item.recipe_id} className="card w-96 bg-base-100 shadow-xl border-slate-500">
                                <div className="card-body ">
                                    <div className="container bg-[#12132D0D] rounded-2xl">
                                        <span> <img className="w-full h-40" src={Item.recipe_img} alt="" /> </span>
                                    </div>
                                    <h2 className="font-extrabold text-xl text-[#12132D]">{Item.recipe_name}</h2>
                                    <p className="text-[#12132D99]">{Item.short_description}</p>
                                    <hr />
                                    <div className="mt-2">
                                        <h1 className="text-[#12132D] font-extrabold">Ingredients: {Item.ingredients.length} </h1>
                                        <div key={Item.recipe_name}>
                                            {
                                                Item.ingredients.map((list) => {
                                                    return (
                                                        <>
                                                            <ul className="list-disc pl-5">
                                                                <li className=" ">{list}</li>
                                                            </ul>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex gap-4">
                                        <div className="flex text-[#12132D99] gap-2 items-center">
                                            <span><CiClock2 /></span>
                                            <p className=""><span>{Item.preparing_time}</span> minutes</p>
                                        </div>
                                        <div className="flex text-[#12132D99] gap-2 items-center">
                                            <span><FaFireFlameCurved /></span>
                                            <p className=""> <span>{Item.calories}</span> calories </p>
                                        </div>
                                    </div>
                                    <div className="grid justify-start">
                                        <button onClick={() => handlCookCalculet(Item)} className="btn  bg-[#0BE58A]  border mx-auto rounded-full text-center font-bold text-[20px] text-[#FFFFFF] ">Want to Cook</button>
                                        <ToastContainer />
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Right side section  */}
            <div className="grid col-span-2 mt-0  border rounded-xl p-4 my-auto ">
                <div className="p-4">
                    <h1 className="font-extrabold text-xl text-[#12132D] text-center mb-4">Want to cook: <span>{tableCount}</span></h1>
                    <hr />
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-4 text-[#878787] font-medium">
                        <h1>Name</h1>
                        <h1>Time</h1>
                        <h1>Calories</h1>
                    </div>
                </div>
                {/* Up table part  */}
                <div className="grid grid-cols-4 gap-1 text-[#878787] font-medium bg-[#28282808] ">

                    {
                        colectdata.map((table) =>
                            // console.log(table)
                            <>
                                <div className="flex item-center gap-2">
                                    <span className="text-black font-bold">{table.recipe_id}</span>
                                    <h1>{table.recipe_name}</h1>   
                                </div>
                                <h1> <span>{table.preparing_time}</span> minutes</h1>
                                <h1> <span>{table.calories}</span> calories</h1>
                                <button onClick={() => handlPreparingButton(table)} className="btn rounded-full btn-accent mx-auto">Preparing</button>
                            </>

                        )
                    }

                </div>

                {/* down part  */}
                <div className="p-4 mt-4">
                    <h1 className="font-extrabold text-xl text-[#12132D] text-center mb-4">Currently cooking: {currentCookingList.length} </h1>
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

                    {
                        currentCookingList.map((current) => 
                            // console.log(current)
                            <>
                                <div className="flex item-center gap-4">
                                    <span className="text-black font-bold">{current.recipe_id}</span>
                                    <h1>{current.recipe_name}</h1>
                                </div>
                                <h1> <span>{current.preparing_time}</span> minutes</h1>
                                <h1> <span>{current.calories}</span> calories</h1>
                            </>
                        )
                    }

                </div>

                {/* Total Calculet  */}
                <div className="">
                    <div className="mt-4 text-black font-medium flex justify-between p-4 ">
                        <h1>Total Time = <span>{sumMinuts}</span> minutes</h1>
                        <h1>Total Calories = <span>{sumOfCalori}</span> calories</h1>
                    </div>
                </div>


            </div>

        </div>
    );
};



export default Main;