import React from 'react';
import Frontend from "../../assets/hero-BWpWK71c.svg"
// import Web from "../../assets/icons/code.svg"
import Service from "../service.jsx";
import Footer from "../page/footer.jsx";
import Sckils from "./sckils.jsx";
import Portfolio from "./portfolio.jsx";
import Still from "./Still.jsx";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div >
            <div className={"w-full h-screen bg-[#030711] flex  sm:flex-col sm:w-full sm:h-auto sm:pb-6"}>
                <div className={"w-[50%] h-screen   text-white text-star"}>

                    <div className={"mt-64 sm:mt-10"}>

                        <div className={"pl-[150px] sm:pl-10"}>
                            <h3 className="text-[34px] sm:text-[21px] sm:w-[300px]">Meet <span
                                className={"text-[#00AAFF]"}>Kamaldinov M.</span>
                            </h3>
                            <h2 className="text-[48px] w-full sm:text-[25px]">your new <span
                                className={"text-[#00AAFF]"}>Developer</span>!</h2>
                            <p className={"text-gray-400 w-[320px]"}>Start a new project with me or take an existing one
                                to
                                the next
                                level</p>

                        </div>
                    </div>
                    <div className={"flex gap-8 pl-[150px] py-4 sm:flex-col sm:pl-10"}>
                        <Link to="/Contact">
                            <button className={"bg-[#00AAFF] rounded-[8px] w-[120px] h-9 "}>Start now</button>
                        </Link>
                        <Link to="/Portfolio">
                            <button className={"bg-gray-600 rounded-[8px] w-[120px]  h-9 "}>See my work</button>

                        </Link>

                    </div>
                </div>
                <div className={"w-[50%] h-screen sm:h-auto sm:w-full sm:mt-[-350px]"}>
                    <img src={Frontend} alt="" data-aos="fade-down" data-aos-delay="500" className={"mt-[40px]"}/>
                </div>


            </div>
            <Service/>
            <Sckils/>
            <Portfolio/>
            <Still/>
            <Footer/>
        </div>
    );
}

export default Home;