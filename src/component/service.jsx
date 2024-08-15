import React from 'react';
import Web from "../assets/icons/code.svg";
import Web2 from "../assets/icons/design.svg";
import Web3 from "../assets/icons/ui.svg";

function Service(props) {
    return (

        <div className={"w-full h-[80vh] bg-[#030711] text-white flex-col flex items-center  gap-20  sm:h-[160vh]"}>
            <div className="text-center ">
                <h2 className={"text-[25px] sm:text-[20px]"}>Awesome   <span   className={"text-[#00AAFF]"}>Services</span></h2>

                <p className={"w-[500px] mt-2 text-gray-400 sm:w-[350px] text-[18px] "}>I offer personalized services, covering planning and execution, to meet your unique needs</p>

            </div>

            <div className={"w-full h-auto text-center flex flex-wrap gap-10  justify-center items-center ]"}>
                <div className={"w-[400px] sm:w-[90%] hover:bg-gray-900 h-[270px] gap-4 border rounded-[30px] border-gray-700 items-center justify-center flex flex-col"} data-aos="zoom-in-down" data-aos-delay="100">
                    <div className={"w-[55px] h-[55px] rounded-[50%]  bg-[#21252E]  border border-gray-700  flex  items-center justify-center"}>
                        <img src={Web} alt=""/>
                    </div>

                    <h2>Web Development</h2>
                    <p className={"w-[370px] sm:w-[87%] text-gray-400"}>Creating functional and interactive websites with seamless navigation to help your online
                        presence thrive</p>


                </div>
                <div className={"w-[400px] sm:w-[90%] hover:bg-gray-900 h-[270px] gap-4 border rounded-[30px] border-gray-700 items-center justify-center flex flex-col"} data-aos="zoom-in-down" data-aos-delay="200">
                    <div className={"w-[55px] h-[55px] rounded-[50%]  bg-[#21252E]  border border-gray-700  flex  items-center justify-center"}>
                        <img src={Web2} alt=""/>
                    </div>

                    <h2>Web Design</h2>
                    <p className={"w-[370px] sm:w-[87%] text-gray-400"}>Crafting visually appealing and user-friendly website layouts to make a strong online impression.</p>


                </div>
                <div className={"w-[400px] sm:w-[90%] h-[270px] gap-4 hover:bg-gray-900  border rounded-[30px] border-gray-700 items-center justify-center flex flex-col"} data-aos="zoom-in-down" data-aos-delay="300">
                    <div className={"w-[55px]  h-[55px] rounded-[50%]  bg-[#21252E]  border border-gray-700  flex  items-center justify-center"}>
                        <img src={Web3} alt=""/>
                    </div>

                    <h2>UI/UX Design</h2>
                    <p className={"w-[370px] sm:w-[87%] text-gray-400"}>Designing intuitive and engaging user interfaces to enhance user experiences, resulting in higher customer satisfaction.</p>


                </div>
            </div>
        </div>
    );

}

export default Service;