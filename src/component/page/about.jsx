import React from 'react';
import May from "../../assets/images/shootBg3.jpg"
import Tw from "../..//assets/icons/twitter.svg"
import Gt from "../..//assets/icons/github.svg"
import In from "../..//assets/icons/linkedin.svg"
import ins from "../..//assets/icons/instagram.svg"

function About(props) {
    return (
        <div className="w-full pb-10  sm:h-[150vh]  bg-[#030711] h-auto">
            <div className={"w-full h-auto flex flex-col items-center justify-center text-gray-300"}>
                <div className={"w-200px h-[200px] mt-20 rounded-[50%] border-[10px] border-gray-800 mb-10  flex justify-center items-center"}>
                    <img src={May} alt="" className={" w-[200px] h-full rounded-[50%] "}/>
                </div>
                <div className={"w-[300px] gap-8 flex mt-10  items-center justify-center"}>
                    <a href="https://x.com/home?lang=en"> <img src={Tw} alt=""/></a>
                    <a href="https://github.com/">
                        <img src={Gt} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={ins} alt=""/>

                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={In} alt=""/>

                    </a>
                </div>
                <div className={"w-[40%] mt-8 text-center gap-10 flex-col flex sm:w-[95%] "}>
                <p>My name is Akhmedov Kamron, and I am a dedicated junior front-end developer based in Tashkent,
                    Uzbekistan. With a solid foundation in JavaScript and React, I have spent the past year honing my
                    skills and working on various projects that demonstrate my capabilities in web development.</p>
                <p>Born on July 7, 2005, I have always been passionate about technology and coding. My journey in the
                    tech world began early, and I have continuously sought to improve my knowledge and expertise. My
                    ultimate career goal is to become a full-stack developer, contributing to innovative and impactful
                    projects.</p>


                    <p>Outside of my professional pursuits, I enjoy playing Dota 2 and engaging in meaningful conversations with friends. These activities not only provide a balance to my life but also inspire creativity and strategic thinking.</p>

<p>I invite you to explore my portfolio and witness the dedication and hard work I have put into my projects.</p>
            </div></div>


        </div>
    );
}

export default About;