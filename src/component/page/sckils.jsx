import React, { useState, useEffect } from 'react';
import Css from"../../assets/icons/css.svg"
import JavaScript from"../../assets/icons/javaScript.svg"
import Responsive from"../../assets/icons/responsive.svg"
import Version from"../../assets/icons/git.svg"
import Frontend1 from"../../assets/icons/html.svg"
import Firebase from"../../assets/icons/api.svg"
import Frontend from"../../assets/icons/redux.svg"
import State from"../../assets/icons/firebase.svg"
import Conflict from"../../assets/icons/problemSolving.svg"
import Problem from"../../assets/icons/conflict.svg"
import Responsives from"../../assets/icons/testing.svg"
import Code from"../../assets/icons/codeQuality.svg"
const skills = [
    { id: 1, name: 'CSS', image:`${Css}`, description: 'Strong knowledge of CSS for styling and layout of web pages.' },
    { id: 2, name: 'JavaScript', image:` ${JavaScript}`, description: 'Proficiency in JavaScript for adding interactivity and functionality to web applications.' },
    { id: 3, name: 'Responsive Web Design', image: `${Responsive}`, description: 'Ability to create web layouts that adapt to different screen sizes and devices.' },
    { id: 4, name: 'Version Control/Git', image:` ${Version}`, description: 'Familiarity with version control systems like Git for tracking changes in code.' },
    { id: 5, name: 'HTML', image: `${Frontend1}`, description: 'Proficiency in creating the structure and content of web pages.' },
    { id: 6, name: 'Firebase', image: `${State}`, description: 'Proficiency in state management libraries and patterns (e.g., Redux, Mobx) for handling complex data and application states in frontend frameworks.'},
    { id: 7, name: 'Frontend APIs', image: `${Firebase}`, description: 'Using Googles Firebase platform for building web and mobile applications with features like authentication, real-time databases, cloud storage, and hosting.' },
    { id: 8, name: 'State Management', image: `${Frontend}`, description: 'Proficiency in state management libraries and patterns (e.g., Redux, Mobx) for handling complex data and application states in frontend frameworks.' },
    { id: 9, name: 'Conflict Resolution', image: `${Problem}`, description: 'Handling conflicts and challenges within the team, promoting a positive work environment, and finding solutions to issues that arise.'},
    { id: 10, name: 'Problem Solving Skills', image: `${Conflict}`, description: 'Ability to troubleshoot and debug frontend issues efficiently.' },
    { id: 11, name: 'Responsive Design Testing', image: `${Responsives}`, description: 'Proficiency in testing web applications across various devices and screen sizes to ensure they adapt and function correctly, promoting a consistent user experience.' },
    { id: 12, name: 'Code Review and Quality Assurance', image: `${Code}`, description: 'Conducting code reviews to ensure coding standards, best practices, and quality standards are met within the team.' },
];

function TechnicalSkills() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [isGridView, setIsGridView] = useState(true);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        const results = skills.filter(skill =>
            skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSkills(results);
    }, [searchTerm]);

    return (
        <div className="bg-[#030711] text-white min-h-screen p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Technical Skills</h1>
                <p className="mb-6">As a web developer, I`ve honed a variety of skills that allow me to create beautiful and functional web interfaces.</p>

               

                <div className={'w-full flex  flex-wrap gap-5'}>
                    {filteredSkills.map((skill) => (
                        <div key={skill.id} onClick={() => setSelectedSkill(skill)} className={`bg-gray-800 rounded-lg p-4 cursor-pointer w-[160px] h-[140px]`} data-aos="fade-up"
                             data-aos-anchor-placement="bottom-bottom">
                            <div className={`text-4xl mb-2 ${isGridView ? '' : 'mb-0'}`}>
                                <div className="w-12 h-12 overflow-hidden ">
                                    <img src={skill.image} alt={skill.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <p className="text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for displaying skill details */}
            {selectedSkill && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-lg w-11/12 max-w-md">
                        <h2 className="text-2xl font-bold mb-4">{selectedSkill.name}</h2>
                        <div className="text-4xl mb-4">
                            <div className="w-12 h-12 overflow-hidden ">
                                <img src={selectedSkill.image} alt={selectedSkill.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p>{selectedSkill.description}</p>
                        <button
                            onClick={() => setSelectedSkill(null)}
                            className="mt-4 bg-blue-500 p-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TechnicalSkills;
