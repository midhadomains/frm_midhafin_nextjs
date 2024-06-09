"use client"
import React, { useState } from 'react';
import { PiVideoDuotone } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import TabsComponent from '@/components/Tabs/TabsComponent';



export default function Study_plan() {
    const [activeOverview, setActiveOverview] = useState("overview");
  
    const handleOverviewClick = (overview) => {
        setActiveOverview(overview);
    };


    return (
        <div className=''>
            <div className='bg-[#6A1C1A] p-7'>
                <h1 className='text-[20px]  sm:text-[40px] text-white text-center'>FRM Part 1 - <span className='font-semibold'>STUDY PLAN 2024</span></h1>
            </div>
            <div className='max-w-[1300px] mx-auto'>
                <div className='flex justify-start'>
                    <div className='w-[25%] text-center'>
                        <ul className='m-2 sm:m-1 py-8 sm:py-10 bg-gradient-to-b from-[#FFF6E5] to-[#FFFFFF]'>
                            <li onClick={() => handleOverviewClick("overview")} className={`cursor-pointer mb-[55px] sm:my-9 ${activeOverview === "overview" ? 'text-[#de6446]' : ''} ${activeOverview === null ? 'text-[#de6446]' : ''}`}>
                                <CgNotes className='mx-auto text-[25px] sm:text-[40px]' />
                                <h1 className='text-[12px] sm:text-[20px]'>Overview</h1>
                            </li>
                            <li onClick={() => handleOverviewClick("Instructor's Notes")} className={`cursor-pointer my-[48px] sm:my-9 ${activeOverview === "Instructor's Notes" ? 'text-[#d55d4f]' : ''}`}>
                                <GrNotes className='mx-auto text-[25px] sm:text-[40px]' />
                                <h1 className='text-[12px] sm:text-[20px]'>Instructor&apos;s Notes</h1>
                            </li>
                            <li onClick={() => handleOverviewClick("Video Explanation")} className={`cursor-pointer mt-[55px] sm:my-9 ${activeOverview === "Video Explanation" ? 'text-[#d5584a]' : ''}`}>
                                <PiVideoDuotone className='mx-auto text-[14px]text-[25px] sm:text-[40px]' />
                                <h1 className='text-[12px] sm:text-[20px]'>Video Explanation</h1>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[75%] my-5 mx-3 sm:p-5 rounded-xl text-[12px] sm:text-[18px] md:text-[22px] m-1'>
                        {activeOverview === "overview" && (
                            <div>
                                The study plan has been structured after very careful analysis & the topics have been sequenced in such a way so as to systematically link one topic after the other.
                            </div>
                        )}
                        {activeOverview === "Instructor's Notes" && (
                            <div className='text-[12px] sm:text-[18px] md:text-[22px]'><span className='text-[#691D1C] font-medium'>It&apos;s not a wise strategy to prepare for the exam on a module by module basis. There are some concepts which are used in an earlier topic but discussed in detail in a later topic in another module. For example - Beta is introduced in CAPM in the Foundations of Risk Management Module, but the quantitative aspect of beta is discussed in Linear Regression in the Quantitative Methods Module. Hence, the sequence of topics to prepare for the exams becomes very important.</span>
                                <br /> The study plan has taken care of the sequence in the best possible way. Also, unrelated theory portions have been scattered in the timeline so as to get a good blend of theoretical and numerical based topics. We strongly advice to follow this sequence and the schedule.
                            </div>
                        )}
                        {activeOverview === "Video Explanation" && (
                            <iframe className='aspect-video w-[100%] max-w-[660px] mx-auto my-auto' src="https://www.youtube.com/embed/6sTEUkR40uI?si=74k44yBnyTMT9zvZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        )}
                    </div>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto p-[20px]'>
                <h1 className=' text-[20px] md:text-[32px] lg:text-[40px] font-bold text-center text-[#6A1C1A]'>KEY used to represent the four modules:</h1>
                <div className='grid grid-cols-2 text-center'>
                    <div className='border-r border-b p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>FRM</h1>
                        <p className='text-[12px] sm:text-[24px]'>Foundations of Risk Management</p>
                    </div>
                    <div className='border-l border-b p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>QTA</h1>
                        <p className='text-[12px] sm:text-[24px]'>Quantitative Analysis</p>
                    </div>
                    <div className='border-t border-r p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>FMP</h1>
                        <p className='text-[12px] sm:text-[24px]'>Financial Markets and Products</p>
                    </div>
                    <div className='border-t border-l p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>VRM</h1>
                        <p className='text-[12px] sm:text-[24px]'>Valuations and Risk Models</p>
                    </div>
                </div>
            </div>
            <h1 className='text-[32px] text-[#6A1C1A] md:my-5 text-center font-bold'>Schedule</h1>
            <TabsComponent items={items} />
        </div >
    );
}

const items = [
    {
        title: 'Week 1-4',
        content: (
            <div className='grid  sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFFDE8] px-2  rounded-xl border border-[#E4BFAF] py-9'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>01</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4 pb-0 w-[60px] text-center mb-[60px] mx-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>QTA</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Fundamentals of Probability <span className='text-[#BE4E1E]'>[QTA&#8209;1]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Random Variables <span className='text-[#BE4E1E]'>[QTA&#8209;2]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Common Univariate Random Variables <span className='text-[#BE4E1E]'>[QTA&#8209;3]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF] '>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>02</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4 pb-0  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>QTA</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Multivariate Random Variables<span className='text-[#BE4E1E]'>[QTA&#8209;4]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Sample Moments<span className='text-[#BE4E1E]'>[QTA&#8209;5]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Hypothesis Testing<span className='text-[#BE4E1E]'>[QTA&#8209;6]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>03</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>QTA</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Linear Regression <span className='text-[#BE4E1E]'>[QTA&#8209;7]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Regression with Multiple Explanatory Variables <span className='text-[#BE4E1E]'>[QTA&#8209;8]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Regression Diagnostics <span className='text-[#BE4E1E]'>[QTA&#8209;9]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>04</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] leading-6 text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>QTA</div>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>FRM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Modern Portfolio Theory (MPT) and the Capital Asset Pricing Model (CAPM) <span className='text-[#BE4E1E]'>[QTA&#8209;5]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>The Arbitrage Pricing Theory and Multi factor Models of Risk and Return  <span className='text-[#BE4E1E]'>[FRM&#8209;6]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Machine Learning Methods <span className='text-[#BE4E1E]'>[QTA&#8209;14]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Machine Learning and Prediction <span className='text-[#BE4E1E]'>[QTA&#8209;15]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 5-8',
        content: (
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>05</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>QTA</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Stationary Time Series <span className='text-[#BE4E1E]'>[QTA&#8209;10]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Non-stationary Time Series  <span className='text-[#BE4E1E]'>[QTA&#8209;11]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Insurance Companies and Pension Plans <span className='text-[#BE4E1E]'>[FMP&#8209;2]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>06</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4 w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FMP</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Introduction to Derivatives <span className='text-[#BE4E1E]'>[FMP&#8209;4]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Exchanges and OTC Markets <span className='text-[#BE4E1E]'>[FMP&#8209;5]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Central Clearing <span className='text-[#BE4E1E]'>[FMP&#8209;6]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Properties of Interest Rates (Part 1) <span className='text-[#BE4E1E]'>[FMP&#8209;16]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Futures Markets  <span className='text-[#BE4E1E]'>[FMP&#8209;7]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>07</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FMP</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Using Futures for Hedging  <span className='text-[#BE4E1E]'>[FMP&#8209;8]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Pricing Financial Forwards and Futures  <span className='text-[#BE4E1E]'>[FMP&#8209;10]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Commodity Forwards and Futures <span className='text-[#BE4E1E]'>[FMP&#8209;11]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Foreign Exchange Markets <span className='text-[#BE4E1E]'>[FMP&#8209;9]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>08</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] leading-6 text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>FMP</div>
                            <div className='text-[#FFFFFF] sm:text-[22px]'>VRM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Properties of Interest Rates (Part 2)  <span className='text-[#BE4E1E]'>[FMP&#8209;16]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Pricing Conventions, Discounting and Arbitrage  <span className='text-[#BE4E1E]'>[VRM&#8209;9]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Interest Rates  <span className='text-[#BE4E1E]'>[VRM&#8209;10]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Bond Yields and Return Calculations <span className='text-[#BE4E1E]'>[VRM&#8209;11]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Corporate bonds  <span className='text-[#BE4E1E]'>[FMP&#8209;17]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 9-12',
        content: (
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFF3E5] px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>09</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center leading-6 mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FRM</div>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>VRM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Applying Duration, Convexity and DV 01  <span className='text-[#BE4E1E]'>[VRM&#8209;12]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Modelling Non-Parallel Term Structure Shifts and Hedging <span className='text-[#BE4E1E]'>[VRM&#8209;13]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Mortgages and Mortgage-Backed Securities  <span className='text-[#BE4E1E]'>[FMP&#8209;18]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Anatomy of Great Financial Crisis  <span className='text-[#BE4E1E]'>[FRM&#8209;10]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>10</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FMP</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Options Markets <span className='text-[#BE4E1E]'>[FMP&#8209;12]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Properties of Options <span className='text-[#BE4E1E]'>[FMP&#8209;13]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Trading Strategies  <span className='text-[#BE4E1E]'>[FMP&#8209;14]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Exotic Options <span className='text-[#BE4E1E]'>[FMP&#8209;15]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Banks  <span className='text-[#BE4E1E]'>[FMP&#8209;1]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>11</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] leading-6 text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>VRM</div>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>QTA</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Binomial Trees <span className='text-[#BE4E1E]'>[VRM&#8209;14]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>The Black-Scholes-Merton Model <span className='text-[#BE4E1E]'>[VRM&#8209;15] </span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Option Sensitivity Measures: The “Greeks”  <span className='text-[#BE4E1E]'>[VRM&#8209;16]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'> Simulation and Bootstrapping <span className='text-[#BE4E1E]'>[QTA&#8209;13]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>12</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] leading-6 text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>QTA</div>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>VRM</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Measuring Returns, Volatility and Correlation <span className='text-[#BE4E1E]'>[QTA&#8209;12]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Measures of Financial Risk  <span className='text-[#BE4E1E]'>[VRM&#8209;1]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Calculating and Applying VaR  <span className='text-[#BE4E1E]'>[VRM&#8209;2]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Measuring and Monitoring Volatility  <span className='text-[#BE4E1E]'>[VRM&#8209;3]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 13-18',
        content: (
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>13</h1>
                        </div>
                        <div className='bg-[#BE4E1E] py-2  w-[60px] text-center leading-5 mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[18px]'>QTA</div>
                            <div className='text-[#FFFFFF]  sm:text-[18px]'>VRM</div>
                            <div className='text-[#FFFFFF]  sm:text-[18px]'>FMP</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>External and Internal Credit Ratings [VRM&#8209;4] <span className='text-[#BE4E1E]'>[QTA&#8209;10]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Country Risk: Determinants, Measures, and Implications [VRM&#8209;5] <span className='text-[#BE4E1E]'>[QTA&#8209;11]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Operational Risk [VRM&#8209;7] <span className='text-[#BE4E1E]'>[FMP&#8209;2]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Stress Testing [VRM&#8209;8] <span className='text-[#BE4E1E]'>[FMP&#8209;2]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>14</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FMP</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Interest Rate Futures [FMP&#8209;19]<span className='text-[#BE4E1E]'>[FMP&#8209;4]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Swaps [FMP&#8209;20] <span className='text-[#BE4E1E]'>[FMP&#8209;5]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Credit Risk TransferMechanisms [FRM&#8209;4] <span className='text-[#BE4E1E]'>[FMP&#8209;6]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Measuring Credit Risk [VRM&#8209;6] <span className='text-[#BE4E1E]'>[FMP&#8209;16]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>15</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[60px] text-center mb-[60px] px-1 rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FRM</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px]'>The Building Blocks of Risk Management  <span className='text-[#BE4E1E]'>[FRM&#8209;1]</span></li>
                        <li className='text-[11px] sm:text-[18px]'>How Do Firms Manage Financial Risk?  <span className='text-[#BE4E1E]'>[FRM&#8209;2]</span></li>
                        <li className='text-[11px] sm:text-[18px]'>The Governance of Risk Management  <span className='text-[#BE4E1E]'>[FRM&#8209;3]</span></li>
                        <li className='text-[11px] sm:text-[18px]'>Risk Data Aggregation and Reporting Principles <span className='text-[#BE4E1E]'>[FRM&#8209;7]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2  py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div className='ml-4'>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>16</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-4  w-[50px] text-center mb-[60px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FRM</div>
                            <div className='text-[#FFFFFF]  sm:text-[22px]'>FMP</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Learning from Financial Disasters   <span className='text-[#BE4E1E]'>[FRM&#8209;9]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>GARP Code of Conduct  <span className='text-[#BE4E1E]'>[FRM&#8209;11]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Enterprise Risk Management and Future Trends  <span className='text-[#BE4E1E]'>[FRM&#8209;8]</span></li>
                        <li className='text-[11px] sm:text-[18px] lg:text-[20px]'>Fund Management  <span className='text-[#BE4E1E]'>[FMP&#8209;3]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
];
