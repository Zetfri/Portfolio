import React from 'react';
import Ni from "../../assets/icons/question.svg"
import { Link } from "react-router-dom";

function Still(props) {
    return (
        <div className="w-full h-[60vh] justify-center flex text-white items-center sm:w-full bg-[#030711] ">
            <div
                className="w-[70%]   hover:bg-gray-900 mx-auto border border-white h-[75%] rounded-[20px] flex flex-col items-center justify-center text-center">
                <div
                    className={"w-[55px] h-[55px] rounded-[50%] bg-[#21252E] border border-gray-700 flex items-center justify-center"}>
                    <img src={Ni} alt="" />
                </div>

                <h2 className={"text-[20px] my-4"}>Still have a question?</h2>
                <p className={"text-gray-400 text-[18px]"}>Can`t find the answer you`re looking for? Simply drop me a message.</p>
                <Link to="/Contact">
                    <button className={"w-[140px] hover:bg-[#2AA4E1] py-[0.7rem] my-4 bg-[#00AAFF] rounded-2xl"}>Get in touch</button>
                </Link>
            </div>
        </div>
    );
}

export default Still;
