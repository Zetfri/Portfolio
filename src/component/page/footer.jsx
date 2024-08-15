import React from 'react';
// import Icon from "../../assets/img.png"
import Gt from "../../assets/icons/github.svg"
import Lin from "../../assets/icons/linkedin.svg"
import Tw from "../../assets/icons/twitter.svg"
import In from "../../assets/icons/instagram.svg"
import {Link} from "react-router-dom";
import Logo from "../../assets/image-removebg-preview.png"
function Footer(props) {
    return (
        <div>
            <div className={"w-full h-auto py-4 flex  pt-20 bg-gray-900 sm:h-auto sm:flex-col"}>
                <div className={"right w-[30%]  h-full flex flex-col gap-8  px-20 sm:w-full"}>
                    <h1 className={"flex  gap-2 text-white items-center"}>
                        <img src={Logo} alt="" className={"w-[100px]"}/>
                        <span className={"text-[28px]"}>ZT</span>
                    </h1>
                    <p className={"text-[18px] text-gray-400"}>I am dedicated to continuous growth and innovation,
                        always pushing the boundaries of what is
                        possible. By embracing new challenges and thinking creatively, I strive to make meaningful
                        contributions that pave the way for a brighter future.</p>
                    <div className={"flex gap-2 text-white items-center"}>
                        <div className={"w-[50px] h-[50px] bg-gray-800 flex justify-center items-center rounded-[25%]"}>
                            <img src={Gt} alt="" className={"w-[35px]"}/>
                        </div>
                        <div className={"w-[50px] h-[50px] bg-gray-800 flex justify-center items-center rounded-[25%]"}>
                            <img src={Lin} alt="" className={"w-[35px]"}/>
                        </div>
                        <div className={"w-[50px] h-[50px] bg-gray-800 flex justify-center items-center rounded-[25%]"}>
                            <img src={Tw} alt="" className={"w-[35px]"}/>
                        </div>
                        <div className={"w-[50px] h-[50px] bg-gray-800 flex justify-center items-center rounded-[25%]"}>
                            <img src={In} alt="" className={"w-[35px]"}/>
                        </div>
                    </div>
                </div>
                <div className={"left w-[70%] h-full  flex justify-center items-center sm:flex-col sm:h-auto sm:pl-10 sm:gap-8 sm:pb-10 sm:mt-10"}>
                    <div className={"flex flex-col w-[23%] h-full gap-2 sm:w-full"} >
                        <h1 className={"text-gray-400 text-[22px] my-2"} data-aos="fade-down">SITES</h1>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="100" >Coffee
                            Shop</a>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="200">Coffee
                            Shop</a>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="300">Coffee
                            Shop</a>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="400">Coffee
                            Shop</a>
                    </div>
                    <div className={"flex flex-col w-[23%] h-full gap-2 sm:w-full mt-[40px]"}>
                        <h1 className={"text-gray-400 text-[22px] my-2"} data-aos="fade-down">SITEMAP</h1>
                        <Link to="/"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down"  data-aos-delay="100">Home
                            Page
                        </Link>
                        <Link to="/About"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down"  data-aos-delay="200">About Me
                        </Link>
                        <Link to="/Portfolio"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down"  data-aos-delay="300">Portfolio
                        </Link>
                        <Link to="/Sckils"

                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="400">Skills

                        </Link>
                        <Link to="/Contact"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="500">Contact
                            With Me
                        </Link>
                    </div>
                    <div className={"flex flex-col w-[23%] h-full mt-[-30px] gap-2 sm:w-full"}>
                        <h1 className={"text-gray-400 text-[22px] my-2"} data-aos="fade-down" >SUPPORT</h1>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="100">Getting
                            started</a>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="200">Report a
                            bug</a>
                        <a href="" className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="300">To
                            feedback</a>
                    </div>
                    <div className={"flex flex-col w-[23%] h-full mt-[-65px] gap-2 sm:w-full"}>
                        <h1 className={"text-gray-400 text-[22px] my-2"} data-aos="fade-down">ABOUT</h1>
                        <Link to="/About"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="100">Bio
                        </Link>
                        <Link to="/Contact"
                              className={"text-gray-400 text-[18px] hover:text-white hover:underline"} data-aos="fade-down" data-aos-delay="200">Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;