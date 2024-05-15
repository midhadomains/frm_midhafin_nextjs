"use client"
import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterUpPage() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='ml-auto grid grid-cols-2 gap-[35px] sm:gap-[38px] lg:gap-[50px] place-content-end  ml-auto   mx-auto md:max-w-[500px] max-w-[350px]'>
                <div className='text-center'>
                    <h1 className='text-[35px] md:text-[50px] xl:text-[70px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={76} duration={2} delay={0} />}%</h1>
                    <h3 className='lg:text-[20px] md:text-[16px] text-[14px] md:font-bold'>NOV 2022</h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#50535C]'>Success rate for <br />FRM Level-I</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[35px] md:text-[50px] xl:text-[70px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={78} duration={2} delay={0} />}%</h1>
                    <h3 className='lg:text-[20px] md:text-[16px] text-[14px] md:font-bold'>NOV 2022</h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#50535C]'>Success rate for <br /> FRM Level-II</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[35px] md:text-[50px] xl:text-[70px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={86} duration={2} delay={0} />}%</h1>
                    <h3 className='lg:text-[20px] md:text-[16px] text-[14px] md:font-bold'>MAY 2023</h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#50535C]'>Success rate for <br /> FRM Level-I</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[35px] md:text-[50px] xl:text-[70px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={88} duration={2} delay={0} />}%</h1>
                    <h3 className='lg:text-[20px] md:text-[16px] text-[14px] md:font-bold'>NOV 2023</h3>
                    <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#50535C]'>Success rate for <br /> FRM Level-II</p>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default CounterUpPage;