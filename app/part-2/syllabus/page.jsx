import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'FRM part-2 syllabus',
    description: 'Syllabus for FRM part-2 course',
    keywords: "FRM part-2 syllabus, FRM exam syllabus"
  }


function Syllabus() {


    const Module1_data = {
        title: "Foundations of Risk Management (FRM)",
        module: "01",
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
            <div className='bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9'>
                <h3 className='text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]'>FRM part-2</h3>
                <h1 className='text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]'>Syllabus</h1>
            </div>
            <div className='max-w-[1300px] mx-auto  sm:mt-5'>
                <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[0].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[0].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[0].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9 sm:py-[50px]'>
                    <table className='w-[90%] sm:w-[80%] mx-auto' >
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
            <div className='max-w-[1300px] mx-auto  pt-5 sm:mt-5'>
                <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9  px-2 sm:px-2'>
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[1].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[1].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[1].module_title}</h1>
                        <button className='py-1 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-[15px] text-white sm:text-[18px] lg:text-[28px] bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66] mt-2  sm:mt-2 lg:mt-5 rounded-[50px]'> View for FREE </button>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF]  py-9 sm:py-[50px]'>
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
                    <div className='w-[107px]   sm:w-[190px] lg:w-[250px] flex-shrink-0'>
                        <Image width={180} height={180} src={data[2].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[2].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[2].module_title}</h1>
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
                        <Image width={180} height={180} src={data[3].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[3].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[3].module_title}</h1>
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
                        <Image width={180} height={180} src={data[4].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[4].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[4].module_title}</h1>
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
                                data[4].topics.map((el) => {
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
                        <Image width={180} height={180} src={data[5].img} className='w-[100%] flex-shrink-0' alt="frm" />
                    </div>
                    <div className='pl-[5%]  '>
                        <h2 className='text-[#BE4E1E] text-[14px] sm:text-[25px] lg:text-[30px]  font-semibold'>MODULE 0{data[5].module_no}</h2>
                        <h1 className='font-bold text-[16px] h-11 sm:h-auto sm:text-[30px] sm:h-[84px] lg:h-[110px]  md:text-[35px] lg:text-[50px] leading-[20px] sm:leading-[40px] lg:leading-[55px] p-1 pl-0 sm:m-0 '>{data[5].module_title}</h1>
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
                                data[5].topics.map((el) => {
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
        </div>
    )
}
export default Syllabus;


const data = [
    {
        img: "/Group 391.png",
        module_no: 1,
        module_title: 'Market Risk Measurement and Management (MR)',
        topics: [
            { id: 1, data: "Estimating Market Risk Measures: An Introduction and Overview " },
            { id: 2, data: 'Non-parametric Approaches' },
            { id: 3, data: "Parametric Approaches (II): Extreme Value" },
            { id: 4, data: 'Backtesting VaR' },
            { id: 5, data: "VaR Mapping" },
            { id: 6, data: "Basel Committee on Banking Supervision" },
            { id: 7, data: "Co-relation Basics: Definitions, Applications, and Terminology " },
            { id: 8, data: "Empirical Properties of CORelation: How Do CORelations Behave in the Real World?" },
            { id: 9, data: "Financial Co-relation Modeling — Bottom-Up Approaches" },
            { id: 10, data: "Empirical Approaches to Risk Metrics and Hedging" },
            { id: 11, data: "The Science of Term Structure Models" },
            { id: 12, data: "The Evolution of Short Rates and the Shape of the Term Structure" },
            { id: 13, data: "The Art of Term Structure Models: Drift" },
            { id: 14, data: "The Art of Term Structure Models: Volatility and Distribution" },
            { id: 15, data: "Volatility Smiles" },
            { id: 16, data: "Fundamental Review of the Trading Book" }
        ]
    },
    {
        img: "/Group 392.png",
        module_no: 2,
        module_title: 'Credit Risk Measurement and Management (CR)',
        topics: [
            { id: 1, data: "Fundamentals of Credit Risk" },
            { id: 2, data: "Governance" },
            { id: 3, data: "Credit Risk Management" },
            { id: 4, data: "Capital Structure in Banks" },
            { id: 5, data: "Introduction to Credit Risk Modeling and Assessment" },
            { id: 6, data: "Credit Scoring and Rating " },
            { id: 7, data: "Credit Scoring and Retail Credit Risk Management" },
            { id: 8, data: "Country Risk: Determinants, Measures, and Implications" },
            { id: 9, data: "Estimating Default Probabilities" },
            { id: 10, data: "Credit Value at Risk" },
            { id: 11, data: "Portfolio Credit Risk" },
            { id: 12, data: " Credit Risk" },
            { id: 13, data: "Credit Derivatives" },
            { id: 14, data: "Derivatives" },
            { id: 15, data: "Counterparty Risk and Beyond" },
            { id: 16, data: "Netting, Close-out and Related Aspects" },
            { id: 17, data: "Margin (Collateral) and Settlement" },
            { id: 18, data: "Central Clearing" },
            { id: 19, data: "Future Value and Exposure" },
            { id: 20, data: "CVA " },
            { id: 21, data: "The Evolution of Stress Testing Counterparty Exposures" },
            { id: 22, data: "Structured Credit Risk" },
            { id: 23, data: "An Introduction to Securitisation " }
        ]

    },
    {
        img: "/Group 393.png",
        module_no: 3,
        module_title: "Operational Risk and Resilience (OR)",
        topics: [
            { id: 1, data: "Introduction to Operational Risk and Resilience" },
            { id: 2, data: "Risk Governance" },
            { id: 3, data: "Risk Identification" },
            { id: 4, data: "Risk Measurement and Assessment" },
            { id: 5, data: "Risk Mitigation" },
            { id: 6, data: "Risk Reporting" },
            { id: 7, data: "Integrated Risk Management" },
            { id: 8, data: "Cyber-resilience: Range of practices" },
            { id: 9, data: "Case Study: Cyberthreats and Information Security Risks" },
            { id: 10, data: "Sound Management of Risks related to Money Laundering and Financing of Terrorism" },
            { id: 11, data: "Case Study: Financial Crime and Fraud" },
            { id: 12, data: "Guidance on Managing Outsourcing Risk" },
            { id: 13, data: "Third-party Risk Management" },
            { id: 14, data: "Case Study: Investor Protection and Compliance Risks in Investment Activities" },
            { id: 15, data: "Supervisory Guidance on Model Risk Management" },
            { id: 16, data: "Case Study: Model Risk and Model Validation" },
            { id: 17, data: "Stress Testing Banks" },
            { id: 18, data: "Risk Capital Attribution and Risk-Adjusted Performance Measurement" },
            { id: 19, data: "Range of practices and issues in economic capital frameworks" },
            { id: 20, data: "Capital Planning at Large Bank Holding Companies: Supervisory Expectations and Range of Current Practice" },
            { id: 21, data: "Capital Regulation Before the Global Financial Crisis" },
            { id: 22, data: "Solvency, Liquidity, and Other Regulation After the Global Financial Crisis" },
            { id: 23, data: "High-level summary of Basel III reforms" },
            { id: 24, data: "Basel III: Finalising post-crisis reforms" }
        ]
    },
    {
        img: "/Group 394.png",
        module_no: 4,
        module_title: "Liquidity and Treasury Risk Measurement and Management (LR)",
        topics: [
            { id: 1, data: "Liquidity Risk" },
            { id: 2, data: "Liquidity and Leverage" },
            { id: 3, data: "Early Warning Indicators" },
            { id: 4, data: "The Investment Function in Financial-Services Management" },
            { id: 5, data: "Liquidity and Reserves Management: Strategies and Policies" },
            { id: 6, data: "Intraday Liquidity Risk Management" },
            { id: 7, data: "Monitoring Liquidity" },
            { id: 8, data: "The Failure Mechanics of Dealer Banks" },
            { id: 9, data: "Liquidity Stress Testing" },
            { id: 10, data: "Liquidity Risk Reporting and Stress Testing" },
            { id: 11, data: "Contingency Funding Planning" },
            { id: 12, data: "Managing and Pricing Deposit Services" },
            { id: 14, data: "Repurchase Agreements and Financing" },
            { id: 15, data: "Liquidity Transfer Pricing: A Guide to Better Practice" },
            { id: 16, data: "The US Dollar Shortage in Global Banking and the International Policy Response" },
            { id: 17, data: "Covered Interest Parity Lost: Understanding the Cross-Currency Basis" },
            { id: 18, data: "Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques" },
            { id: 19, data: "Illiquid Assets" }
        ]
    }, {
        img: "/Group 395.png",
        module_no: 5,
        module_title: "Risk Management and Investment Management (RI)",
        topics: [
            { id: 1, data: "Factor Theory" },
            { id: 2, data: "Factors" },
            { id: 3, data: "Alpha" },
            { id: 4, data: "Portfolio Construction" },
            { id: 5, data: "Portfolio Risk: Analytical Methods" },
            { id: 6, data: "VaR and Risk Budgeting in Investment Management" },
            { id: 7, data: "Risk Monitoring and Performance Measurement" },
            { id: 8, data: "Portfolio Performance Evaluation" },
            { id: 9, data: "Hedge Funds" },
            { id: 10, data: "Performing Due Diligence on Specific Managers and Funds" },
            { id: 11, data: "Predicting Fraud by Investment Managers" }
        ]
    },
    {
        img: "/Group 396.png",
        module_no: 6,
        module_title: "Current Issues in Financial Markets (CI)",
        topics: [
            { id: 1, data: "Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank" },
            { id: 2, data: "The Credit Suisse CoCo Wipeout: Facts, Misperceptions, and Lessons for Financial Regulation" },
            { id: 3, data: "Artificial Intelligence and Bank Supervision - Federal Reserve Bank of Richmond, Second Quarter 2023" },
            { id: 4, data: "Financial Risk Management and Explainable, Trustworthy, Responsible AI" },
            { id: 5, data: "Artificial Intelligence Risk Management Framework" },
            { id: 6, data: "Climate-related Risk drivers and Their transmission channels" },
            { id: 7, data: "Climate-related Financial Risks – Measurement methodologies" },
            { id: 8, data: "Principles for the effective management and supervision of climate-related financial risks" },
            { id: 9, data: "The Crypto Ecosystem: Key Elements and Risks" },
            { id: 10, data: "Digital Resilience and Financial Stability. The Quest for Policy Tools in The Financial Sector" }
        ]
    }
]