import Footer from '@/components/SiteFooter';
import Navbar from '@/components/SiteHeader';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

function Syllabus() {
    const data = [
        {
        img: "/group 315.png",
        module_no: 1,
        module_title: 'Foundations of Risk Management (FRM)',
        topics: [
            { id: 1, data: "The Building Blocks of Risk Management" },
            { id: 2, data: 'How Do Firms Manage Financial Risk ?' },
            { id: 3, data: "The Governance of Risk Management" },
            { id: 4, data: 'Credit Risk Transfer Mechanisms' },
            { id: 5, data: "Modern Portfolio Theory and Capital Asset Pricing Model" },
            { id: 6, data: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return" },
            { id: 7, data: "Principles for Effective Data Aggregation and Risk Reporting" },
            { id: 8, data: "Enterprise Risk Management and Future Trends" },
            { id: 10, data: "Learning from Financial Disasters" },
            { id: 11, data: "Anatomy of the Great Financial Crisis of 2007 - 2009" },
            { id: 12, data: "GARP Code of Conduct *" }
        ]
    },
    {
        img: "/Group 316.png",
        module_no: 2,
        module_title: 'Quantitative Analysis (QTA)',
        topics: [
            { "id": 1, "data": "Fundamentals of Probability" },
            { "id": 2, "data": "Random Variables" },
            { "id": 3, "data": "Common Univariate Random Variables" },
            { "id": 4, "data": "Multivariate Random Variables" },
            { "id": 5, "data": "Sample Moments" },
            { "id": 6, "data": "Hypothesis Testing" },
            { "id": 7, "data": "Linear Regression" },
            { "id": 8, "data": "Regression with Multiple Explanatory Variables" },
            { "id": 9, "data": "Regression Diagnostics" },
            { "id": 10, "data": "Stationary Time Series" },
            { "id": 11, "data": "Non-stationary Time Series" },
            { "id": 12, "data": "Measuring Returns, Volatility, and Correlation" },
            { "id": 13, "data": "Simulation and Bootstrapping" },
            { "id": 14, "data": "Machine-Learning Methods" },
            { "id": 15, "data": "Machine Learning & Prediction" }
        ]

    },
    {
        img: "/Group 317.png",
        module_no: 3,
        module_title: 'Financial Market and Products (FMP)',
        topics: [
            { "Chapter": 1, "data": "Banks" },
            { "Chapter": 2, "data": "Insurance Companies and Pension Plans" },
            { "Chapter": 3, "data": "Fund Management" },
            { "Chapter": 4, "data": "Introduction to Derivatives" },
            { "Chapter": 5, "data": "Exchanges and OTC Markets" },
            { "Chapter": 6, "data": "Central Clearing" },
            { "Chapter": 7, "data": "Futures Markets" },
            { "Chapter": 8, "data": "Using Futures for Hedging" },
            { "Chapter": 9, "data": "Foreign Exchange Markets" },
            { "Chapter": 10, "data": "Pricing Financial Forwards and Futures" },
            { "Chapter": 11, "data": "Commodity Forwards and Futures" },
            { "Chapter": 12, "data": "Options Markets" },
            { "Chapter": 13, "data": "Properties of Options" },
            { "Chapter": 14, "data": "Trading Strategies" },
            { "Chapter": 15, "data": "Exotic Options" },
            { "Chapter": 16, "data": "Properties of Interest Rates" },
            { "Chapter": 17, "data": "Corporate Bonds" },
            { "Chapter": 18, "data": "Mortgages and Mortgage-Backed Securities" },
            { "Chapter": 19, "data": "Interest Rate Futures" },
            { "Chapter": 20, "data": "Swaps" }
        ]
    },
    {
        img: "/Group 318.png",
        module_no: 4,
        module_title: 'Valuation and Risk Management (VRM)',
        topics: [
            { "Chapter": 1, "data": "Measures of Financial Risk" },
            { "Chapter": 2, "data": "Calculating and Applying VaR" },
            { "Chapter": 3, "data": "Measuring and Monitoring Volatility" },
            { "Chapter": 4, "data": "External and Internal Credit Ratings" },
            { "Chapter": 5, "data": "Country Risk: Determinants, Measures, and Implications" },
            { "Chapter": 6, "data": "Measuring Credit Risk" },
            { "Chapter": 7, "data": "Operational Risk" },
            { "Chapter": 8, "data": "Stress Testing" },
            { "Chapter": 9, "data": "Pricing Conventions, Discounting, and Arbitrage" },
            { "Chapter": 10, "data": "Interest Rates" },
            { "Chapter": 11, "data": "Bond Yields and Return Calculations" },
            { "Chapter": 12, "data": "Applying Duration, Convexity, and DV01" },
            { "Chapter": 13, "data": "Modeling Non-Parallel Term Structure Shifts and Hedging" },
            { "Chapter": 14, "data": "Binomial Trees" },
            { "Chapter": 15, "data": "The Black-Scholes-Merton Model" },
            { "Chapter": 16, "data": "Option Sensitivity Measures: The 'Greeks'" }
        ]
    }
    ]

    const Module1_data = {
        module_title: "Foundations of Risk Management (FRM)",
        module_no: "01",
        image: "https://www.frm.midhafin.com/part-1/desc_frm.svg",
        desc: "A proprietary book for FRM candidates has been created to cover these broad knowledge points. While detailed learning objectives associated with these readings are presented in the 2024 FRM Learning Objectives document, a summary of how to relate these readings to the knowledge points follows.",
    
        chapters: [
          {
            id: 1,
            ques: "The Building Blocks of Risk Management",
            ans: "Identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.",
            free: true,
            link: "/",
          },
          {
            id: 2,
            ques: "How Do Firms Manage Financial Risk?",
            ans: "How risks can arise in an organization, and how firms manage financial risks.",
            free: true,
            link: "/",
          },
          {
            id: 3,
            ques: "The Governance of Risk Management",
            ans: "Describes the role of corporate governance in risk management, including the role of the board of directors and other areas of an organization. The concept of risk appetite and how it is translated into a risk appetite framework and communicated throughout an organization is presented as well in this chapter.",
            free: true,
            link: "/",
          },
          {
            id: 4,
            ques: "Credit Risk Transfer Mechanisms",
            ans: "Presents an overview of credit risk transfer mechanisms, including credit derivatives and securitization, and discusses issues with the securitization of subprime mortgages.",
            free: true,
            link: "/",
          },
          {
            id: 5,
            ques: "Modern Portfolio Theory and Capital Asset Pricing Model",
            ans: "Presents Modern Portfolio Theory (MPT) and the CAPM, one of the foundational developments in risk-adjusted pricing and valuation",
            free: true,
            link: "/",
          },
          {
            id: 6,
            ques: "The Arbitrage Pricing Theory and Multifactor Models of Risk and Return",
            ans: "Explains how the Arbitrage Pricing Theory (APT) and factor models can be used to model returns on investment assets.",
            free: true,
            link: "/",
          },
          {
            id: 7,
            ques: "Principles for Effective Data Aggregation and Risk Reporting",
            ans: "Addresses Data is the lifeblood of many large financial organizations and aggregating and reporting risk data have become increasingly important.",
            free: true,
            link: "/",
          },
          {
            id: 8,
            ques: "Enterprise Risk Management and Future Trends",
            ans: "Introduces enterprise risk management (ERM), a common and important method for assessing and managing risk in an organizational context and discusses its future trends.",
            free: true,
            link: "/",
          },
          {
            id: 9,
            ques: "Learning from Financial Disasters",
            ans: "Describes the importance of learning from the historical experience of various financial disasters from the past.",
            free: true,
            link: "/",
          },
          {
            id: 10,
            ques: "Anatomy of the Great Financial Crisis of 2007-2009",
            ans: "Focuses on the financial crisis of 2007-2009.",
            free: true,
            link: "/",
          },
          {
            id: 11,
            ques: "GARP Code of Conduct",
            ans: "Contains GARP's Code of Conduct, a code to help ensure ethical standards are upheld in the risk management profession.",
            free: true,
            link: "/",
          },
        ],
      };
    
    return (
        <div>
            <Navbar />
            <div className='bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9'>
                <h3 className='text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]'>FRM part-1</h3>
                <h1 className='text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]'>Syllabus</h1>
            </div>
            <div className='max-w-[1300px] mx-auto sm:mt-5'>
                <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[0].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%] w-full '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[0].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[0].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]'>
                    <table className='w-[90%] sm:w-[80%] mx-auto ' >
                        <thead>
                            <tr className='text-[12px] sm:text-[16px] lg:text-[20px]'>
                                <th className='border-r border-b border-[#BE4E1E9C] w-[15%]'>Chapter</th>
                                <th className='border-l border-b border-[#BE4E1E9C]'>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[0].topics.map((el) => {
                                    return <tr className='text-[12px] sm:text-[16px] lg:text-[20px]' key={el.id} >
                                        <td className='border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center'>{el.id}</td>
                                        <td className='border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]'>{el.data}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto sm:mt-5'>
            <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[1].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%] w-full '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[1].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[1].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]'>
                    <table className='w-[90%] sm:w-[80%] mx-auto ' >
                        <thead>
                            <tr className='text-[12px] sm:text-[16px] lg:text-[20px]'>
                                <th className='border-r border-b border-[#BE4E1E9C] w-[15%]'>Chapter</th>
                                <th className='border-l border-b border-[#BE4E1E9C]'>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[1].topics.map((el) => {
                                    return <tr className='text-[12px] sm:text-[16px] lg:text-[20px]' key={el.id} >
                                        <td className='border-r border-t border-[#BE4E1E9C] w-[15%] py-2 text-center'>{el.id}</td>
                                        <td className='border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]'>{el.data}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto sm:mt-5'>
            <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px] sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[2].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%] w-full '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[2].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[2].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]'>
                    <table className='w-[90%] sm:w-[80%] mx-auto ' >
                        <thead>
                            <tr className='text-[12px] sm:text-[16px] lg:text-[20px]'>
                                <th className='border-r border-b border-[#BE4E1E9C] w-[15%]'>Chapter</th>
                                <th className='border-l border-b border-[#BE4E1E9C]'>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[2].topics.map((el) => {
                                    return <tr className='text-[12px] sm:text-[16px] lg:text-[20px]' key={el.Chapter} >
                                        <td className='border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center'>{el.Chapter}</td>
                                        <td className='border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]'>{el.data}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='max-w-[1300px] mx-auto sm:mt-5'>
            <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[3].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%] w-full  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[3].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-[84px] lg:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[3].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]'>
                    <table className='w-[90%] sm:w-[80%] mx-auto ' >
                        <thead>
                            <tr className='text-[12px] sm:text-[16px] lg:text-[20px]'>
                                <th className='border-r border-b border-[#BE4E1E9C] w-[15%]'>Chapter</th>
                                <th className='border-l border-b border-[#BE4E1E9C]'>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[3].topics.map((el) => {
                                    return <tr className='text-[12px] sm:text-[16px] lg:text-[20px]' key={el.Chapter} >
                                        <td className='border-r border-t border-[#BE4E1E9C] py-2 w-[15%] text-center'>{el.Chapter}</td>
                                        <td className='border-l border-t border-[#BE4E1E9C] py-2 pl-[3%]'>{el.data}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Syllabus;