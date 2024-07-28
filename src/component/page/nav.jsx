import React from 'react';
import {Link} from "react-router-dom";
import Logo from"../../assets/image-removebg-preview.png"
function Nav(props) {
    return (
        <div className="pt-8 bg-[#030711] ">
            <div
                className="w-[75%] px-20 flex h-[60px]  mx-auto bg-[#011624] justify-between items-center  rounded-[25px] sm:justify-center sm:gap-[180px] sm:px-1 sm:w-[90%]"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1300">
                <div className={"ml-[-20px"}>
                    <Link to="/">
                        <img className={"w-[80px] rounded-[25px] "} src={Logo} alt=""/>
                    </Link>

                </div>
                <div className={"text-white flex gap-10 ml-[80px] sm:hidden"}>

                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Sckils">Sckils</Link>


                </div>
                <div className="hidden sm:block">
                    <img src={Logo} alt="" className={"w-[352px] rounded-[25px] "}/>
                </div>
            </div>
        </div>
    );
}

export default Nav;




