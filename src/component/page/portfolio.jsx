import React from 'react';
import May from "../../assets/vpnPresent.png"

function Portfolio(props) {
    return (
        <div>
            <div className={"w-full h-screen py-6  bg-[#030711]  flex flex-col gap-16 sm:h-auto"}>
                <div className={"w-full h-auto flex justify-center items-center flex-col gap-6 sm:text-center"}>
                    <h1 className={"text-[30px] text-white"}>Portfolio <span className={"text-[#00AAFF]"}>Gallery</span>
                    </h1>
                    <p className={"text-gray-400 text-[18px]"}>Explore a visual journey through my Portfolio Gallery</p>
                </div>
                <div className={"cards w-full h-auto flex justify-center items-center gap-6 flex-wrap sm:flex-col"}>
                    <div
                        className={"w-[30%] h-[300px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"}>
                        <img src={May} alt="" className={"rounded-[10px] w-full border-[1px] border-gray-400"}/>
                        <p className={"text-[22px] text-white"}>Coffee page</p>
                    </div>
                    <div
                        className={"w-[30%] h-[300px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"}>
                        <img src={May} alt="" className={"rounded-[10px] w-full border-[1px] border-gray-400"}/>
                        <p className={"text-[22px] text-white"}>Coffee page</p>
                    </div>
                    <div
                        className={"w-[30%] h-[300px] rounded-[10px] flex flex-col gap-[15px] p-[10px] hover:bg-gray-800 hover:cursor-pointer sm:w-full"}>
                        <img src={May} alt="" className={"rounded-[10px] w-full border-[1px] border-gray-400"}/>
                        <p className={"text-[22px] text-white"}>Coffee page</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;