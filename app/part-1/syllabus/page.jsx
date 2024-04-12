import Footer from '@/components/SiteFooter';
import Navbar from '@/components/SiteHeader';
import Image from 'next/image';
import React from 'react'

function Syllabus() {
    const data = [{
        img: "/group 315.png",
        module: 1,
        tittle: 'Foundations of Risk Management (FRM)',
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
        img: "/group 316.png",
        module: 2,
        tittle: 'Quantitative Analysis',
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
        img: "/group 317.png",
        module: 3,
        tittle: 'Financial Market and Products (FMP)',
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
        img: "/group 318.png",
        module: 4,
        tittle: 'Valuation and Risk Management (VRM)',
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

    return (
        <div>
            <Navbar />
            <div className='bg-syllabusbg p-4 md:p-8 text-center pt-7 mb-9'>
                <h3 className='text-[22px] sm:text-[28px] lg:text-[35px] font-medium text-[#BE4E1E]'>FRM part-1</h3>
                <h1 className='text-[30px]  sm:text-[35px]  md:text-[45px] lg:text-[55px] font-semibold text-[#6A1C1A]'>Syllabus</h1>
            </div>
            <div className='max-w-[1300px] mx-auto sm:mt-5'>
                <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9 px-2 sm:px-2'>
                    <div>
                        <Image width={200} height={200} src={data[0].img} alt="frm" />
                    </div>
                    <div className='p-[2px] lg:p-5 lg:pt-0 sm:mx-5'>
                        <h2 className='text-[#BE4E1E] text-[18px] sm:text-[25px] lg:text-[35px]  font-semibold'>Module</h2>
                        <h1 className='text-[#BE4E1E] text-[35px]  sm:text-[45px]  md:text-[50px] text-center leading-[35px] sm:leading-[40px] lg:leading-[60px] lg:text-[95px] font-bold'>0{data[0].module}</h1>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-[20px]  sm:text-[30px]  md:text-[35px] lg:text-[55px] leading-[25px] sm:leading-[55px] m-1 sm:m-0 text-center'>{data[0].tittle}</h1>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9'>
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
                <div className='w-[100%] flex justify-between -mb-5 sm:-mb-9 px-2 sm:px-2'>

                    <div className='p-[2px] lg:p-5 lg:pt-0 sm:mx-5'>
                        <h2 className='text-[#BE4E1E] text-[18px] sm:text-[25px] lg:text-[35px]  font-semibold'>Module</h2>
                        <h1 className='text-[#BE4E1E] text-[35px]  sm:text-[45px]  md:text-[50px] text-center leading-[35px] sm:leading-[40px] lg:leading-[60px] lg:text-[95px] font-bold'>0{data[1].module}</h1>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-[20px]  sm:text-[30px]  md:text-[35px] lg:text-[55px] leading-[25px] sm:leading-[55px] m-1 sm:m-0 text-center'>{data[1].tittle}</h1>
                    </div>
                    <div className='w-[40%] flex justify-end'>
                        <Image width={200} height={200} src={data[1].img} alt="qta" />
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9'>
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
                <div className='w-[100%] flex justify-start -mb-5 sm:-mb-9 px-2 sm:px-2'>
                    <div>
                        <Image width={200} height={200} src={data[2].img} alt="fmp" />
                    </div>
                    <div className='p-[2px] lg:p-5 lg:pt-0 sm:mx-5'>
                        <h2 className='text-[#BE4E1E] text-[18px] sm:text-[25px] lg:text-[35px]  font-semibold'>Module</h2>
                        <h1 className='text-[#BE4E1E] text-[35px]  sm:text-[45px]  md:text-[50px] text-center leading-[35px] sm:leading-[40px] lg:leading-[60px] lg:text-[95px] font-bold'>0{data[2].module}</h1>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-[20px]  sm:text-[30px]  md:text-[35px] lg:text-[55px] leading-[25px] sm:leading-[55px] m-1 sm:m-0 text-center'>{data[2].tittle}</h1>
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9'>
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
                <div className='w-[100%] flex justify-start -mb-5 sm:-mb-9 px-2 sm:px-2'>
                    <div className='p-[2px] lg:p-5 lg:pt-0 sm:mx-5'>
                        <h2 className='text-[#BE4E1E] text-[18px] sm:text-[25px] lg:text-[35px]  font-semibold'>Module</h2>
                        <h1 className='text-[#BE4E1E] text-[35px]  sm:text-[45px]  md:text-[50px] text-center leading-[35px] sm:leading-[40px] lg:leading-[60px] lg:text-[95px] font-bold'>0{data[3].module}</h1>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-[20px]  sm:text-[30px]  md:text-[35px] lg:text-[55px] leading-[25px] sm:leading-[55px] m-1 sm:m-0 text-center'>{data[3].tittle}</h1>
                    </div>
                    <div>
                        <Image width={200} height={200} src={data[3].img} alt="vrm" />
                    </div>
                </div>
                <div className='mx-auto  bg-gradient-to-b from-[#FAF8F3] to-[#FFFFFF] py-9'>
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