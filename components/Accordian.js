"use client"
import React, { useState } from 'react'
import { AiOutlineDown,AiOutlineUp } from 'react-icons/ai';
import "aos/dist/aos.css";

const Accordion = ({ buttonsData }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const toggleAccordion = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };

    return (
        <div className="accordion-container max-w-[1440px] mx-auto  py-2 font-sans mb-5 ">
           
            {buttonsData.map((button) => (
                <div key={button.id} className="accordion-item ">
                    <button
                        className={`accordion flex items-center pl-[5%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  mt-2 rounded-full sm:h-16 lg:h-14 py-4 text-left w-full bg-white text-black hover:bg-[#FFF5EE] transition-all duration-300 ease-in-out ${selectedButton === button.id ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => toggleAccordion(button.id)}
                    >
                        <h1 className="flex-grow px-2 text-[14px] xl:text-[20px] md:text-[16px]  duration-500">{button.text}</h1>
                        <h1 className='mr-[5%]'>{selectedButton === button.id ? <AiOutlineUp className="text-lg sm:text-2xl" /> : <AiOutlineDown className="text-lg sm:text-2xl" />}</h1>
                    </button>
                    {selectedButton === button.id && (
                        <div
                            className={`accordion-content pb-6 bg-[#F9F6F4] p-4  rounded-xl mb-2 transition-all duration-1000 delay-75 ease-in-out max-h-96 overflow-y-hidden`}
                        >
                            <p className="accordion-text-with-border text-sm lg:text-base transition-all duration-1000 delay-75	 ease-in-out max-h-96 text-[#50535C]">{button.data}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


export default Accordion;