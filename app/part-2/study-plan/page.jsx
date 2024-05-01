"use client"
import React, { useState } from 'react';
import Footer from '@/components/SiteFooter';
import Navbar from '@/components/SiteHeader';
import { PiVideoDuotone } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import TabsComponent from '@/components/Tabs/TabsComponent';

export default function Page() {
    const [activeOverview, setActiveOverview] = useState(null);
    // const [activeOverview1, setActiveOverview1] = useState(null);

    const handleOverviewClick = (overview) => {
        setActiveOverview(overview);
    };
    // const handleOverviewClick1 = (overview) => {
    //     setActiveOverview1(overview);
    // };



    return (
        <div className=''>
            <Navbar />
            <div className='bg-[#6A1C1A] p-7'>
                <h1 className='text-[20px]  sm:text-[40px] text-white text-center'>FRM Part 2 - <span className='font-semibold'>STUDY PLAN 2024</span></h1>
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
                        {activeOverview === null && (
                            <div>
                                The study plan has been structured after very careful analysis & the topics have been sequenced in such a way so as to systematically link one topic after the other.
                            </div>
                        )}
                        {activeOverview === "overview" && (
                            <div>The study plan has been structured after very careful analysis & the topics have been sequenced in such a way so as to systematically link one topic after the other.</div>
                        )}
                        {activeOverview === "Instructor's Notes" && (
                            <div className='text-[12px] sm:text-[18px] md:text-[22px]'><span className='text-[#691D1C] font-medium'>“It’s not a wise strategy to prepare for the exam on a module by module basis. There are some concepts which are used in an earlier topic but discussed in detail in a later topic in another module. For example – Beta is introduced in CAPM in the Foundations of Risk Management Module, but the quantitative aspect of beta is discussed in Linear Regression in the Quantitative Methods Module. Hence, the sequence of topics to prepare for the exams becomes very important.”</span>
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
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>MR</h1>
                        <p className='text-[12px] sm:text-[24px]'>Market Risk Measurement and Management</p>
                    </div>
                    <div className='border-l border-b p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>CR</h1>
                        <p className='text-[12px] sm:text-[24px]'>Credit Risk Measurement and Management</p>
                    </div>
                    <div className='border-t border-r border-b p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>OR</h1>
                        <p className='text-[12px] sm:text-[24px]'>Operational Risk and Resiliency</p>
                    </div>
                    <div className='border-t border-l border-b p-4'>
                        <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>LR</h1>
                        <p className='text-[12px] sm:text-[24px]'>Liquidity and Treasury Risk Management</p>
                    </div>
                </div>
                <div className=' w-[50%] mx-auto border-b p-4 text-center'>
                    <h1 className='text-[#BE4E1E] font-bold text-[20px] sm:text-[35px]'>IM</h1>
                    <p className='text-[12px] sm:text-[24px]'>Risk Management & Investment Management</p>
                </div>
            </div>
            {/* <div className='max-w-[1300px] mx-auto p-[20px]'>
                <h1 className='text-[32px] text-[#6A1C1A] md:my-5 text-center font-bold'>Schedule</h1>
                <div className=''>
                    <div className='w-[100%] text-center'>
                        <ul className='flex justify-around sm:m-1 lg:hidden py-1 '>
                            <h1>-</h1>
                            <li onClick={() => handleOverviewClick1("Week 1-4")} className={`cursor-pointer ${activeOverview1 === "Week 1-4" ? 'text-[#de6446]' : ''} ${activeOverview1 === null ? 'text-[#de6446]' : ''}`}>
                                <h1 className='text-[12px] sm:text-[20px]'>Week 1-4</h1>
                            </li>
                            <li onClick={() => handleOverviewClick1("Week 5-8")} className={`cursor-pointer ${activeOverview1 === "Week 5-8" ? 'text-[#d55d4f]' : ''}`}>
                                <h1 className='text-[12px] sm:text-[20px]'>Week 5-8</h1>
                            </li>
                            <li onClick={() => handleOverviewClick1("Week 9-12")} className={`cursor-pointer  ${activeOverview1 === "Week 9-12" ? 'text-[#d5584a]' : ''}`}>
                                <h1 className='text-[12px] sm:text-[20px]'>Week 9-12</h1>
                            </li>
                            <li onClick={() => handleOverviewClick1("Week 13-16")} className={`cursor-pointer ${activeOverview1 === "Week 13-16" ? 'text-[#d5584a]' : ''}`}>
                                <h1 className='text-[12px] sm:text-[20px]'>Week 13-18</h1>
                            </li>
                            <h1>+</h1>
                        </ul>
                    </div>
                    <div className='w-[100%] lg:hidden my-5 rounded-xl text-[14px] sm:text-[18px] md:text-[22px] m-1'>
                        {(activeOverview1 === "Week 1-4" || activeOverview1 === null) && (
                            <div className='grid  grid-cols-2 lg:grid-cols-4 gap-4'>
                                <div className='bg-[#FFFDE8] px-2 sm:px-6 rounded-xl border border-[#E4BFAF] py-9'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>01</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF] sm:text-[25px]'>MR</div>
                                        </div>
                                    </div>0
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Estimating Market Risk Measure – An Introduction and Overview <span className='text-[#BE4E1E]'>[MR-1]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Non-Parametric Approaches  <span className='text-[#BE4E1E]'>[MR-2]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Parametric Approaches (II): Extreme Value  <span className='text-[#BE4E1E]'>[MR-3]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Back testing VaR   <span className='text-[#BE4E1E]'>[MR-4]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>VaR Mapping    <span className='text-[#BE4E1E]'>[MR-5]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF] '>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>02</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF] sm:text-[25px]'>IM</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Portfolio Risk – Analytical Methods <span className='text-[#BE4E1E]'>[IM-5]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>VaR and Risk Budgeting in Investment Management <span className='text-[#BE4E1E]'>[im-6]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[im-7]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Portfolio Performance Evaluation  <span className='text-[#BE4E1E]'>[iM-8]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>03</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF] sm:text-[25px]'>MR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Some Correlation Basics – Properties, Motivation, Terminology <span className='text-[#BE4E1E]'>[MR-7]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Financial Correlation Modeling—Bottom-Up Approaches  <span className='text-[#BE4E1E]'>[MR-9]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[IM-7]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Volatility Smiles  <span className='text-[#BE4E1E]'>[MR-15]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>04</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>MR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Empirical Approaches to Risk Metrics & Hedging <span className='text-[#BE4E1E]'>[MR-10]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Science of Term Structure Models  <span className='text-[#BE4E1E]'>[MR-11] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Evolution of Short Rates & the Shape of the Term Structure  <span className='text-[#BE4E1E]'>[MR-12]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Art of Term Structure Models – Drift  <span className='text-[#BE4E1E]'>[MR-13]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Art of Term Structure Models – Volatility and Distribution  <span className='text-[#BE4E1E]'>[MR-14]</span></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeOverview1 === "Week 5-8" && (
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>05</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>IM</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Factor Theory <span className='text-[#BE4E1E]'>[IM-1]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Factors  <span className='text-[#BE4E1E]'>[IM-2]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Alpha (and the low-risk Anomaly)  <span className='text-[#BE4E1E]'>[IM-3]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Portfolio Construction <span className='text-[#BE4E1E]'>[IM-4]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Hedge Funds <span className='text-[#BE4E1E]'>[IM-9]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>06</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>The Credit Decision <span className='text-[#BE4E1E]'>[CR-1]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Credit Analyst  <span className='text-[#BE4E1E]'>[CR-2]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Classifications and Key Concepts of Credit Risk <span className='text-[#BE4E1E]'>[CR-3]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Rating Assignment Methodologies  <span className='text-[#BE4E1E]'>[CR-4]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Credit Scoring and Retail Credit Risk Management <span className='text-[#BE4E1E]'>[CR-15]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>07</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Credit Risk and Credit Derivatives  <span className='text-[#BE4E1E]'>[CR-5]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Spread Risk and Default Intensity Models <span className='text-[#BE4E1E]'>[CR-6] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Portfolio Credit Risk <span className='text-[#BE4E1E]'>[CR-7]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Structured Credit Risk  <span className='text-[#BE4E1E]'>[CR-8]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Credit Transfer Markets-and Their Implications <span className='text-[#BE4E1E]'>[CR-16]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>08</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF] sm:text-[25px]'>CR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Counterparty Risk and Beyond  <span className='text-[#BE4E1E]'>[CR-9]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Netting, Close-out and Related Aspects   <span className='text-[#BE4E1E]'>[CR-10]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Margin (Collateral) and Settlement <span className='text-[#BE4E1E]'>[CR-11]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Future Value and Exposure <span className='text-[#BE4E1E]'>[CR-12]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>CVA  <span className='text-[#BE4E1E]'>[CR-13]</span></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeOverview1 === "Week 9-12" && (
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                                <div className='bg-[#FFF3E5] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>09</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                                            <div className='text-[#FFFFFF] sm:text-[25px]'>IM</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>The Evolution of Stress Testing Counterparty Exposures <span className='text-[#BE4E1E]'>[CR-14]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>An Introduction to Securitization  <span className='text-[#BE4E1E]'>[CR-17]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Understanding the Securitization of Subprime Mortgage Credit   <span className='text-[#BE4E1E]'>[CR-18]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Performing Due Diligence on Specific Managers & Funds  <span className='text-[#BE4E1E]'>[IM-10]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Predicting Fraud by Investment Managers  <span className='text-[#BE4E1E]'>[IM-11]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>10</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity Risk  <span className='text-[#BE4E1E]'>[LR-1]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity and Leverage  <span className='text-[#BE4E1E]'>[LR-2]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Illiquid Assets <span className='text-[#BE4E1E]'>[LR-19]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity and Reserves Management: Strategies and Policies <span className='text-[#BE4E1E]'>[LR-5]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Monitoring Liquidity  <span className='text-[#BE4E1E]'>[LR-7]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>11</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Early Warning Indicators <span className='text-[#BE4E1E]'>[LR-3]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Intraday Liquidity Risk Management  <span className='text-[#BE4E1E]'>[LR-6] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity Stress Testing   <span className='text-[#BE4E1E]'>[LR-9]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity Risk Reporting and Stress Testing  <span className='text-[#BE4E1E]'>[LR-10]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Contingency Funding Planning  <span className='text-[#BE4E1E]'>[LR-11]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>12</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Managing and Pricing Deposit Services <span className='text-[#BE4E1E]'>[LR-12]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Managing Non-deposit Liabilities  <span className='text-[#BE4E1E]'>[LR-13]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity Stress Testing  <span className='text-[#BE4E1E]'>[LR-14]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Failure Mechanics of Dealer Banks  <span className='text-[#BE4E1E]'>[LR-8]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Management for Changing Interest Rates: Asset-Liability Management & Duration Techniques  <span className='text-[#BE4E1E]'>[LR-18]</span></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeOverview1 === "Week 13-16" && (
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>13</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Liquidity Transfer Pricing: A Guide to Better Practice <span className='text-[#BE4E1E]'>[LR-15]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The Investment Function in Financial-Services Management  <span className='text-[#BE4E1E]'>[LR-4]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>The US Dollar Shortage in Global Banking & the International Policy Response <span className='text-[#BE4E1E]'>[LR-16]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Covered Interest Parity Lost: Understanding the Cross-Currency Basis <span className='text-[#BE4E1E]'>[LR-17]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>14</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Introduction to Operational Risk and Resilience  <span className='text-[#BE4E1E]'>[OR-1]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Governance  <span className='text-[#BE4E1E]'>[OR-2]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Identification  <span className='text-[#BE4E1E]'>[OR-3] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Measurement and Assessment <span className='text-[#BE4E1E]'>[OR-4]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Mitigation <span className='text-[#BE4E1E]'>[OR-5]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>15</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Reporting  <span className='text-[#BE4E1E]'>[OR-6]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Integrated Risk Management  <span className='text-[#BE4E1E]'>[OR-7] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Supervisory Guidance on Model Risk Management <span className='text-[#BE4E1E]'>[OR-15]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Case Study: Model Risk and Model Validation <span className='text-[#BE4E1E]'>[OR-16]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Risk Capital Attribution and Risk-Adjusted Performance Measurement <span className='text-[#BE4E1E]'>[OR-18]</span></li>
                                    </ul>0
                                </div>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>16</h1>0
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Cyber-Resilience: Range and Practices  <span className='text-[#BE4E1E]'>[OR-8]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Case Study: Cyber Threats & Information Security Risks <span className='text-[#BE4E1E]'>[OR-9]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Sound Management of Risks Related to Money Laundering & Financing of Terrorism <span className='text-[#BE4E1E]'>[OR-10]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Case Study: Financial Crime and Fraud  <span className='text-[#BE4E1E]'>[OR-11]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Guidance on Managing Outsourcing Risk <span className='text-[#BE4E1E]'>[OR-12]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Case Study: Third-Party Risk Management <span className='text-[#BE4E1E]'>[OR-13]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Case Study: Investor Protection & Compliance Risks in Investment Activities  <span className='text-[#BE4E1E]'>[OR-14]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>17</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>
                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Capital Regulation Before the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-21]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Solvency, Liquidity, and Other Regulation After the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-22] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>High-Level Summary of Basel III Reforms  <span className='text-[#BE4E1E]'>[OR-23]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Basel III: Finalizing Post-Crisis Reforms <span className='text-[#BE4E1E]'>[OR-24]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Fundamental Review of the Trading Book (FRTB) <span className='text-[#BE4E1E]'>[MR-16]</span></li>
                                    </ul>
                                </div>
                                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>18</h1>
                                        </div>
                                        <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                                        </div>
                                    </div>
                                    <ul className='list-disc list-outside mx-5'>
                                        <li className='text-[10px] sm:text-[18px]'>Range of practices and issues in economic capital frameworks  <span className='text-[#BE4E1E]'>[OR-19]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Capital Planning at Large Bank Holding Companies: Supervisory Expectations and Range of Current Practice  <span className='text-[#BE4E1E]'>[OR-20] </span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Stress Testing Banks  <span className='text-[#BE4E1E]'>[OR-17]</span></li>
                                        <li className='text-[10px] sm:text-[18px]'>Messages from the Academic Literature on Risk Measurement for the Trading Book <span className='text-[#BE4E1E]'>[MR-6]</span></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='hidden lg:block'>
                        <div className='grid  my-4 lg:grid-cols-4 gap-4'>
                            <div className='bg-[#FEFFF5] px-6 rounded-xl border border-[#E4BFAF] py-9 '>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>01</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF] text-[25px]'>MR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Estimating Market Risk Measure – An Introduction and Overview <span className='text-[#BE4E1E]'>[MR-1]</span></li>
                                    <li className='text-[20px]'>Non-Parametric Approaches  <span className='text-[#BE4E1E]'>[MR-2]</span></li>
                                    <li className='text-[20px]'>Parametric Approaches (II): Extreme Value  <span className='text-[#BE4E1E]'>[MR-3]</span></li>
                                    <li className='text-[20px]'>Back testing VaR   <span className='text-[#BE4E1E]'>[MR-4]</span></li>
                                    <li className='text-[20px]'>VaR Mapping    <span className='text-[#BE4E1E]'>[MR-5]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF] '>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>02</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>IM</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Portfolio Risk – Analytical Methods <span className='text-[#BE4E1E]'>[IM-5]</span></li>
                                    <li className='text-[20px]'>VaR and Risk Budgeting in Investment Management <span className='text-[#BE4E1E]'>[im-6]</span></li>
                                    <li className='text-[20px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[im-7]</span></li>
                                    <li className='text-[20px]'>Portfolio Performance Evaluation  <span className='text-[#BE4E1E]'>[iM-8]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>03</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>MR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Some Correlation Basics – Properties, Motivation, Terminology <span className='text-[#BE4E1E]'>[MR-7]</span></li>
                                    <li className='text-[20px]'>Financial Correlation Modeling—Bottom-Up Approaches  <span className='text-[#BE4E1E]'>[MR-9]</span></li>
                                    <li className='text-[20px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[IM-7]</span></li>
                                    <li className='text-[20px]'>Volatility Smiles  <span className='text-[#BE4E1E]'>[MR-15]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>04</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>MR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Empirical Approaches to Risk Metrics & Hedging <span className='text-[#BE4E1E]'>[MR-10]</span></li>
                                    <li className='text-[20px]'>The Science of Term Structure Models  <span className='text-[#BE4E1E]'>[MR-11] </span></li>
                                    <li className='text-[20px]'>The Evolution of Short Rates & the Shape of the Term Structure  <span className='text-[#BE4E1E]'>[MR-12]</span></li>
                                    <li className='text-[20px]'>The Art of Term Structure Models – Drift  <span className='text-[#BE4E1E]'>[MR-13]</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid  my-4 lg:grid-cols-4 gap-4'>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>05</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>IM</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Factor Theory <span className='text-[#BE4E1E]'>[IM-1]</span></li>
                                    <li className='text-[20px]'>Factors  <span className='text-[#BE4E1E]'>[IM-2]</span></li>
                                    <li className='text-[20px]'>Alpha (and the low-risk Anomaly)  <span className='text-[#BE4E1E]'>[IM-3]</span></li>
                                    <li className='text-[20px]'>Portfolio Construction <span className='text-[#BE4E1E]'>[IM-4]</span></li>
                                    <li className='text-[20px]'>Hedge Funds <span className='text-[#BE4E1E]'>[IM-9]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>06</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>CR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>The Credit Decision <span className='text-[#BE4E1E]'>[CR-1]</span></li>
                                    <li className='text-[20px]'>The Credit Analyst  <span className='text-[#BE4E1E]'>[CR-2]</span></li>
                                    <li className='text-[20px]'>Classifications and Key Concepts of Credit Risk <span className='text-[#BE4E1E]'>[CR-3]</span></li>
                                    <li className='text-[20px]'>Rating Assignment Methodologies  <span className='text-[#BE4E1E]'>[CR-4]</span></li>
                                    <li className='text-[20px]'>Credit Scoring and Retail Credit Risk Management <span className='text-[#BE4E1E]'>[CR-15]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>07</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>CR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Credit Risk and Credit Derivatives  <span className='text-[#BE4E1E]'>[CR-5]</span></li>
                                    <li className='text-[20px]'>Spread Risk and Default Intensity Models <span className='text-[#BE4E1E]'>[CR-6] </span></li>
                                    <li className='text-[20px]'>Portfolio Credit Risk <span className='text-[#BE4E1E]'>[CR-7]</span></li>
                                    <li className='text-[20px]'>Structured Credit Risk  <span className='text-[#BE4E1E]'>[CR-8]</span></li>
                                    <li className='text-[20px]'>The Credit Transfer Markets-and Their Implications <span className='text-[#BE4E1E]'>[CR-16]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>08</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>CR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Counterparty Risk and Beyond  <span className='text-[#BE4E1E]'>[CR-9]</span></li>
                                    <li className='text-[20px]'>Netting, Close-out and Related Aspects   <span className='text-[#BE4E1E]'>[CR-10]</span></li>
                                    <li className='text-[20px]'>Margin (Collateral) and Settlement <span className='text-[#BE4E1E]'>[CR-11]</span></li>
                                    <li className='text-[20px]'>Future Value and Exposure <span className='text-[#BE4E1E]'>[CR-12]</span></li>
                                    <li className='text-[20px]'>CVA  <span className='text-[#BE4E1E]'>[CR-13]</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid  my-4 lg:grid-cols-4 gap-4'>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>09</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>CR</div>
                                        <div className='text-[#FFFFFF]  text-[25px]'>IM</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>The Evolution of Stress Testing Counterparty Exposures <span className='text-[#BE4E1E]'>[CR-14]</span></li>
                                    <li className='text-[20px]'>An Introduction to Securitization  <span className='text-[#BE4E1E]'>[CR-17]</span></li>
                                    <li className='text-[20px]'>Understanding the Securitization of Subprime Mortgage Credit   <span className='text-[#BE4E1E]'>[CR-18]</span></li>
                                    <li className='text-[20px]'>Performing Due Diligence on Specific Managers & Funds  <span className='text-[#BE4E1E]'>[IM-10]</span></li>
                                    <li className='text-[20px]'>Predicting Fraud by Investment Managers  <span className='text-[#BE4E1E]'>[IM-11]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>10</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF] text-[25px]'>LR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Liquidity Risk  <span className='text-[#BE4E1E]'>[LR-1]</span></li>
                                    <li className='text-[20px]'>Liquidity and Leverage  <span className='text-[#BE4E1E]'>[LR-2]</span></li>
                                    <li className='text-[20px]'>Illiquid Assets <span className='text-[#BE4E1E]'>[LR-19]</span></li>
                                    <li className='text-[20px]'>Liquidity and Reserves Management: Strategies and Policies <span className='text-[#BE4E1E]'>[LR-5]</span></li>
                                    <li className='text-[20px]'>Monitoring Liquidity  <span className='text-[#BE4E1E]'>[LR-7]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>11</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>LR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Early Warning Indicators <span className='text-[#BE4E1E]'>[LR-3]</span></li>
                                    <li className='text-[20px]'>Intraday Liquidity Risk Management  <span className='text-[#BE4E1E]'>[LR-6] </span></li>
                                    <li className='text-[20px]'>Liquidity Stress Testing   <span className='text-[#BE4E1E]'>[LR-9]</span></li>
                                    <li className='text-[20px]'>Liquidity Risk Reporting and Stress Testing  <span className='text-[#BE4E1E]'>[LR-10]</span></li>
                                    <li className='text-[20px]'>Contingency Funding Planning  <span className='text-[#BE4E1E]'>[LR-11]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>12</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>LR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Managing and Pricing Deposit Services <span className='text-[#BE4E1E]'>[LR-12]</span></li>
                                    <li className='text-[20px]'>Managing Non-deposit Liabilities  <span className='text-[#BE4E1E]'>[LR-13]</span></li>
                                    <li className='text-[20px]'>Liquidity Stress Testing  <span className='text-[#BE4E1E]'>[LR-14]</span></li>
                                    <li className='text-[20px]'>The Failure Mechanics of Dealer Banks  <span className='text-[#BE4E1E]'>[LR-8]</span></li>
                                    <li className='text-[20px]'>Risk Management for Changing Interest Rates: Asset-Liability Management & Duration Techniques  <span className='text-[#BE4E1E]'>[LR-18]</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid  my-4 lg:grid-cols-4 gap-4'>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>13</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>LR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Liquidity Transfer Pricing: A Guide to Better Practice <span className='text-[#BE4E1E]'>[LR-15]</span></li>
                                    <li className='text-[20px]'>The Investment Function in Financial-Services Management  <span className='text-[#BE4E1E]'>[LR-4]</span></li>
                                    <li className='text-[20px]'>The US Dollar Shortage in Global Banking & the International Policy Response <span className='text-[#BE4E1E]'>[LR-16]</span></li>
                                    <li className='text-[20px]'>Covered Interest Parity Lost: Understanding the Cross-Currency Basis <span className='text-[#BE4E1E]'>[LR-17]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>14</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>OR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Introduction to Operational Risk and Resilience  <span className='text-[#BE4E1E]'>[OR-1]</span></li>
                                    <li className='text-[20px]'>Risk Governance  <span className='text-[#BE4E1E]'>[OR-2]</span></li>
                                    <li className='text-[20px]'>Risk Identification   <span className='text-[#BE4E1E]'>[OR-3]</span></li>
                                    <li className='text-[20px]'>Risk Measurement and Assessment <span className='text-[#BE4E1E]'>[OR-4] </span></li>
                                    <li className='text-[20px]'>Risk Mitigation  <span className='text-[#BE4E1E]'>[OR-5]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>15</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF] text-[25px]'>OR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Risk Reporting  <span className='text-[#BE4E1E]'>[OR-6]</span></li>
                                    <li className='text-[20px]'>Integrated Risk Management  <span className='text-[#BE4E1E]'>[OR-7] </span></li>
                                    <li className='text-[20px]'>Supervisory Guidance on Model Risk Management <span className='text-[#BE4E1E]'>[OR-15]</span></li>
                                    <li className='text-[20px]'>Case Study: Model Risk and Model Validation <span className='text-[#BE4E1E]'>[OR-16]</span></li>
                                    <li className='text-[20px]'>Risk Capital Attribution and Risk-Adjusted Performance Measurement <span className='text-[#BE4E1E]'>[OR-18]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FFFAEB] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>16</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>OR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Cyber-Resilience: Range and Practices  <span className='text-[#BE4E1E]'>[OR-8]</span></li>
                                    <li className='text-[20px]'>Case Study: Cyber Threats & Information Security Risks <span className='text-[#BE4E1E]'>[OR-9]</span></li>
                                    <li className='text-[20px]'>Sound Management of Risks Related to Money Laundering & Financing of Terrorism <span className='text-[#BE4E1E]'>[OR-10]</span></li>
                                    <li className='text-[20px]'>Case Study: Financial Crime and Fraud  <span className='text-[#BE4E1E]'>[OR-11]</span></li>
                                    <li className='text-[20px]'>Guidance on Managing Outsourcing Risk <span className='text-[#BE4E1E]'>[OR-12]</span></li>
                                    <li className='text-[20px]'>Case Study: Third-Party Risk Management <span className='text-[#BE4E1E]'>[OR-13]</span></li>
                                    <li className='text-[20px]'>Case Study: Investor Protection & Compliance Risks in Investment Activities  <span className='text-[#BE4E1E]'>[OR-14]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>17</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>OR</div>
                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Capital Regulation Before the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-21]</span></li>
                                    <li className='text-[20px]'>Solvency, Liquidity, and Other Regulation After the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-22] </span></li>
                                    <li className='text-[20px]'>High-Level Summary of Basel III Reforms  <span className='text-[#BE4E1E]'>[OR-23]</span></li>
                                    <li className='text-[20px]'>Basel III: Finalizing Post-Crisis Reforms <span className='text-[#BE4E1E]'>[OR-24]</span></li>
                                    <li className='text-[20px]'>Fundamental Review of the Trading Book (FRTB) <span className='text-[#BE4E1E]'>[MR-16]</span></li>
                                </ul>
                            </div>
                            <div className='bg-[#FEFFF5] px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                                        <h1 className='text-[46px] sm:text-[60px] font-semibold'>18</h1>
                                    </div>
                                    <div className='bg-[#BE4E1E] pt-6 pb-0 px-3.5 mb-[44px] rounded-b -mt-9'>
                                        <div className='text-[#FFFFFF]  text-[25px]'>OR</div>

                                    </div>
                                </div>
                                <ul className='list-disc list-outside mx-5'>
                                    <li className='text-[20px]'>Range of practices and issues in economic capital frameworks  <span className='text-[#BE4E1E]'>[OR-19]</span></li>
                                    <li className='text-[20px]'>Capital Planning at Large Bank Holding Companies: Supervisory Expectations and Range of Current Practice  <span className='text-[#BE4E1E]'>[OR-20] </span></li>
                                    <li className='text-[20px]'>Stress Testing Banks  <span className='text-[#BE4E1E]'>[OR-17]</span></li>
                                    <li className='text-[20px]'>Messages from the Academic Literature on Risk Measurement for the Trading Book <span className='text-[#BE4E1E]'>[MR-6]</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
             <h1 className='text-[32px] text-[#6A1C1A] md:my-5 text-center font-bold'>Schedule</h1>
            <TabsComponent items={items} />
            <Footer />
        </div >
    );
}

const items = [
    {
        title: 'Week 1-4',
        content: (
            <div className='grid  grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFFDE8] px-2 sm:px-6 rounded-xl border border-[#E4BFAF] py-9'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>01</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6 pb-0 w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[25px]'>MR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Estimating Market Risk Measure – An Introduction and Overview <span className='text-[#BE4E1E]'>[MR-1]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Non-Parametric Approaches  <span className='text-[#BE4E1E]'>[MR-2]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Parametric Approaches (II): Extreme Value  <span className='text-[#BE4E1E]'>[MR-3]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Back testing VaR   <span className='text-[#BE4E1E]'>[MR-4]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>VaR Mapping    <span className='text-[#BE4E1E]'>[MR-5]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF] '>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>02</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6 pb-0  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[25px]'>IM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Portfolio Risk – Analytical Methods <span className='text-[#BE4E1E]'>[IM-5]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>VaR and Risk Budgeting in Investment Management <span className='text-[#BE4E1E]'>[im-6]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[im-7]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Portfolio Performance Evaluation  <span className='text-[#BE4E1E]'>[iM-8]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>03</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[25px]'>MR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Some Correlation Basics – Properties, Motivation, Terminology <span className='text-[#BE4E1E]'>[MR-7]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Financial Correlation Modeling—Bottom-Up Approaches  <span className='text-[#BE4E1E]'>[MR-9]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Monitoring and Performance Measurement <span className='text-[#BE4E1E]'>[IM-7]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Volatility Smiles  <span className='text-[#BE4E1E]'>[MR-15]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFFDE8] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>04</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>MR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Empirical Approaches to Risk Metrics & Hedging <span className='text-[#BE4E1E]'>[MR-10]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Science of Term Structure Models  <span className='text-[#BE4E1E]'>[MR-11] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Evolution of Short Rates & the Shape of the Term Structure  <span className='text-[#BE4E1E]'>[MR-12]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Art of Term Structure Models – Drift  <span className='text-[#BE4E1E]'>[MR-13]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Art of Term Structure Models – Volatility and Distribution  <span className='text-[#BE4E1E]'>[MR-14]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 5-8',
        content: (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>05</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>IM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Factor Theory <span className='text-[#BE4E1E]'>[IM-1]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Factors  <span className='text-[#BE4E1E]'>[IM-2]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Alpha (and the low-risk Anomaly)  <span className='text-[#BE4E1E]'>[IM-3]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Portfolio Construction <span className='text-[#BE4E1E]'>[IM-4]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Hedge Funds <span className='text-[#BE4E1E]'>[IM-9]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>06</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6 w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>The Credit Decision <span className='text-[#BE4E1E]'>[CR-1]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Credit Analyst  <span className='text-[#BE4E1E]'>[CR-2]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Classifications and Key Concepts of Credit Risk <span className='text-[#BE4E1E]'>[CR-3]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Rating Assignment Methodologies  <span className='text-[#BE4E1E]'>[CR-4]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Credit Scoring and Retail Credit Risk Management <span className='text-[#BE4E1E]'>[CR-15]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>07</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Credit Risk and Credit Derivatives  <span className='text-[#BE4E1E]'>[CR-5]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Spread Risk and Default Intensity Models <span className='text-[#BE4E1E]'>[CR-6] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>Portfolio Credit Risk <span className='text-[#BE4E1E]'>[CR-7]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Structured Credit Risk  <span className='text-[#BE4E1E]'>[CR-8]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Credit Transfer Markets-and Their Implications <span className='text-[#BE4E1E]'>[CR-16]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF9E6] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>08</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF] sm:text-[25px]'>CR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Counterparty Risk and Beyond  <span className='text-[#BE4E1E]'>[CR-9]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Netting, Close-out and Related Aspects   <span className='text-[#BE4E1E]'>[CR-10]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Margin (Collateral) and Settlement <span className='text-[#BE4E1E]'>[CR-11]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Future Value and Exposure <span className='text-[#BE4E1E]'>[CR-12]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>CVA  <span className='text-[#BE4E1E]'>[CR-13]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 9-12',
        content: (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFF3E5] px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>09</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center leading-6 mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>CR</div>
                            <div className='text-[#FFFFFF] sm:text-[25px]'>IM</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>The Evolution of Stress Testing Counterparty Exposures <span className='text-[#BE4E1E]'>[CR-14]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>An Introduction to Securitization  <span className='text-[#BE4E1E]'>[CR-17]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Understanding the Securitization of Subprime Mortgage Credit   <span className='text-[#BE4E1E]'>[CR-18]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Performing Due Diligence on Specific Managers & Funds  <span className='text-[#BE4E1E]'>[IM-10]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Predicting Fraud by Investment Managers  <span className='text-[#BE4E1E]'>[IM-11]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>10</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity Risk  <span className='text-[#BE4E1E]'>[LR-1]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity and Leverage  <span className='text-[#BE4E1E]'>[LR-2]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Illiquid Assets <span className='text-[#BE4E1E]'>[LR-19]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity and Reserves Management: Strategies and Policies <span className='text-[#BE4E1E]'>[LR-5]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Monitoring Liquidity  <span className='text-[#BE4E1E]'>[LR-7]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>11</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Early Warning Indicators <span className='text-[#BE4E1E]'>[LR-3]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Intraday Liquidity Risk Management  <span className='text-[#BE4E1E]'>[LR-6] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity Stress Testing   <span className='text-[#BE4E1E]'>[LR-9]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity Risk Reporting and Stress Testing  <span className='text-[#BE4E1E]'>[LR-10]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Contingency Funding Planning  <span className='text-[#BE4E1E]'>[LR-11]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFF3E5]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>12</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Managing and Pricing Deposit Services <span className='text-[#BE4E1E]'>[LR-12]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Managing Non-deposit Liabilities  <span className='text-[#BE4E1E]'>[LR-13]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity Stress Testing  <span className='text-[#BE4E1E]'>[LR-14]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Failure Mechanics of Dealer Banks  <span className='text-[#BE4E1E]'>[LR-8]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Management for Changing Interest Rates: Asset-Liability Management & Duration Techniques  <span className='text-[#BE4E1E]'>[LR-18]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Week 13-18',
        content: (
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>13</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>LR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Liquidity Transfer Pricing: A Guide to Better Practice <span className='text-[#BE4E1E]'>[LR-15]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The Investment Function in Financial-Services Management  <span className='text-[#BE4E1E]'>[LR-4]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>The US Dollar Shortage in Global Banking & the International Policy Response <span className='text-[#BE4E1E]'>[LR-16]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Covered Interest Parity Lost: Understanding the Cross-Currency Basis <span className='text-[#BE4E1E]'>[LR-17]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>14</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Introduction to Operational Risk and Resilience  <span className='text-[#BE4E1E]'>[OR-1]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Governance  <span className='text-[#BE4E1E]'>[OR-2]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Identification  <span className='text-[#BE4E1E]'>[OR-3] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Measurement and Assessment <span className='text-[#BE4E1E]'>[OR-4]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Mitigation <span className='text-[#BE4E1E]'>[OR-5]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>15</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Risk Reporting  <span className='text-[#BE4E1E]'>[OR-6]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Integrated Risk Management  <span className='text-[#BE4E1E]'>[OR-7] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>Supervisory Guidance on Model Risk Management <span className='text-[#BE4E1E]'>[OR-15]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Case Study: Model Risk and Model Validation <span className='text-[#BE4E1E]'>[OR-16]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Risk Capital Attribution and Risk-Adjusted Performance Measurement <span className='text-[#BE4E1E]'>[OR-18]</span></li>
                    </ul>0
                </div>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>16</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Cyber-Resilience: Range and Practices  <span className='text-[#BE4E1E]'>[OR-8]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Case Study: Cyber Threats & Information Security Risks <span className='text-[#BE4E1E]'>[OR-9]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Sound Management of Risks Related to Money Laundering & Financing of Terrorism <span className='text-[#BE4E1E]'>[OR-10]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Case Study: Financial Crime and Fraud  <span className='text-[#BE4E1E]'>[OR-11]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Guidance on Managing Outsourcing Risk <span className='text-[#BE4E1E]'>[OR-12]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Case Study: Third-Party Risk Management <span className='text-[#BE4E1E]'>[OR-13]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Case Study: Investor Protection & Compliance Risks in Investment Activities  <span className='text-[#BE4E1E]'>[OR-14]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>17</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>
                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Capital Regulation Before the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-21]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Solvency, Liquidity, and Other Regulation After the Global Financial Crisis  <span className='text-[#BE4E1E]'>[OR-22] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>High-Level Summary of Basel III Reforms  <span className='text-[#BE4E1E]'>[OR-23]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Basel III: Finalizing Post-Crisis Reforms <span className='text-[#BE4E1E]'>[OR-24]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Fundamental Review of the Trading Book (FRTB) <span className='text-[#BE4E1E]'>[MR-16]</span></li>
                    </ul>
                </div>
                <div className='bg-[#FFEFE6]  px-2 sm:px-6 py-9 rounded-xl border border-[#E4BFAF]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-[16px] sm:text-[20px] leading-[5px] font-bold'>WEEK</h1>
                            <h1 className='text-[46px] sm:text-[60px] font-semibold'>18</h1>
                        </div>
                        <div className='bg-[#BE4E1E] pt-6  w-[50px] text-center mb-[44px] rounded-b -mt-9'>
                            <div className='text-[#FFFFFF]  sm:text-[25px]'>OR</div>

                        </div>
                    </div>
                    <ul className='list-disc list-outside mx-5'>
                        <li className='text-[10px] sm:text-[18px]'>Range of practices and issues in economic capital frameworks  <span className='text-[#BE4E1E]'>[OR-19]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Capital Planning at Large Bank Holding Companies: Supervisory Expectations and Range of Current Practice  <span className='text-[#BE4E1E]'>[OR-20] </span></li>
                        <li className='text-[10px] sm:text-[18px]'>Stress Testing Banks  <span className='text-[#BE4E1E]'>[OR-17]</span></li>
                        <li className='text-[10px] sm:text-[18px]'>Messages from the Academic Literature on Risk Measurement for the Trading Book <span className='text-[#BE4E1E]'>[MR-6]</span></li>
                    </ul>
                </div>
            </div>
        ),
    },
];