
import React from 'react'
import Footer from '@/components/SiteFooter'
import Navbar from '@/components/SiteHeader'
import Image from 'next/image'
import Link from 'next/link'
import CounterUpPage from '@/components/CounterUpPage'
import Accordion from '@/components/Accordian'

export const metadata = {
    title: 'MidhaFin',
    description: 'Boost Your Career In Finance',
}

export default function Home() {
    const Logos = [" https://files.midhafin.com/wp-content/uploads/Aditya-Birla-Group.png",
        " https://files.midhafin.com/wp-content/uploads/bajaj-Allianz.png",
        " https://files.midhafin.com/wp-content/uploads/Bank-of-America.png",
        " https://files.midhafin.com/wp-content/uploads/Bank-of-Baroda.png",
        " https://files.midhafin.com/wp-content/uploads/Bank-of-India.png",
        " https://files.midhafin.com/wp-content/uploads/BNY-Mellon.png",
        " https://files.midhafin.com/wp-content/uploads/Central-Bank-of-India.png",
        " https://files.midhafin.com/wp-content/uploads/Citi.png",
        " https://files.midhafin.com/wp-content/uploads/Credit-Suisse.png",
        " https://files.midhafin.com/wp-content/uploads/Deloite.png",
        " https://files.midhafin.com/wp-content/uploads/EXL.png",
        " https://files.midhafin.com/wp-content/uploads/Federal-Bank.png",
        " https://files.midhafin.com/wp-content/uploads/genpact.png",
        " https://files.midhafin.com/wp-content/uploads/Goldman-Sachs.png",
        " https://files.midhafin.com/wp-content/uploads/HCL.png",
        " https://files.midhafin.com/wp-content/uploads/HSBC.png",
        " https://files.midhafin.com/wp-content/uploads/IDBI.png",
        " https://files.midhafin.com/wp-content/uploads/infosys.png",
        " https://files.midhafin.com/wp-content/uploads/JP-Morgan-Chase-Co.png",
        " https://files.midhafin.com/wp-content/uploads/JusPay.png",
        " https://files.midhafin.com/wp-content/uploads/Kotak.png",
        " https://files.midhafin.com/wp-content/uploads/KPMG.png",
        " https://files.midhafin.com/wp-content/uploads/Macquarie.png",
        " https://files.midhafin.com/wp-content/uploads/Morgan-Stanley.png",
        " https://files.midhafin.com/wp-content/uploads/NatWest.png",
        " https://files.midhafin.com/wp-content/uploads/pwc.png",
        " https://files.midhafin.com/wp-content/uploads/SBI.png",
        " https://files.midhafin.com/wp-content/uploads/Scotiabank.png",
        " https://files.midhafin.com/wp-content/uploads/Mask-group.png",
        " https://files.midhafin.com/wp-content/uploads/TCS.png",
        " https://files.midhafin.com/wp-content/uploads/UBS.png",
    ]

    const buttonsData = [
        {
            id: 1,
            text: "What is FRM designation?",
            data: "Financial Risk Manager (FRM®) is a certificate offered by GARP (Global Association of Risk Professionals).It has become quite popular over the years and is being widely considered to be the global standard for financial risk management. It is recognized across major markets in the Americas, Europe, Asia, Africa as well as Oceania.",
        },
        {
            id: 2,
            text: "What is the Salary offered after FRM designation?",
            data: "The salary offered after obtaining an FRM (Financial Risk Manager) designation can vary significantly based on factors such as location, industry, experience, Skills, and the specific job role.On average, professionals with an FRM certification tend to earn competitive salaries, often well above the industry standard. In the United States, for example, entry-level FRM holders might earn around $70,000 to $100,000 per year.",
        },
        {
            id: 3,
            text: "What is the shortest time taken to attain FRM designation?",
            data: "The shortest time to attain the Financial Risk Manager (FRM) designation typically depends on individual dedication, prior knowledge, and study habits. FRM certification is a two-part exam, and the quickest route involves passing both parts in a single exam cycle. Many candidates take Part I in May and Part II in November of the same year, which allows them to achieve FRM certification in about six months. However, this timeline assumes intensive preparation, often involving several months of focused study before each exam. It&apos;s essential to note that the pass rates for FRM exams can be challenging, making rigorous preparation a key factor in successfully achieving this designation in the shortest possible time.",
        },
        {
            id: 4,
            text: "Which is better- FRM vs CFA?",
            data: "The choice between FRM (Financial Risk Manager) and CFA (Chartered Financial Analyst) depends on career goals. FRM is ideal for those aspiring to specialize in risk management, focusing on areas like market, credit, and operational risk. It&apos;s well-suited for careers in risk analysis, compliance, and investment risk. On the other hand, CFA is broader, covering a wide range of finance topics like investment analysis, portfolio management, and ethics. It&apos;s a better fit for those seeking careers in asset management, investment banking, or financial analysis. Ultimately, the choice hinges on whether one desires a specialized career in risk management (FRM) or a broader financial career (CFA).",
        },
        {
            id: 5,
            text: "Which companies do hire FRM charterholders?",
            data: "FRM charterholders are highly sought after by a diverse range of companies, particularly in the financial sector. Investment banks like J.P. Morgan, Goldman Sachs, and Morgan Stanley often hire FRM professionals for roles in risk management, trading, and investment analysis. Asset management firms such as BlackRock and Vanguard value FRM expertise for managing funds and assessing risks. Insurance companies like AIG and reinsurance firms like Swiss Re rely on FRM charterholders for risk assessment. Additionally, consulting firms like Deloitte and KPMG hire FRM professionals to provide risk advisory services to various industries. Corporations with significant exposure to financial risks also hire FRM experts in treasury and finance departments.",
        }
    ]

    return (
        <div className=''>
            <Navbar />
            {/* Hero Section */}
            <div className=' text-[#F9F2DF] bg-[#6A1C1A]'>
                <div className='max-w-[1440px] sm:px-4 md:flex  justify-around mx-auto'>
                    <div className='w-[95%] mx-auto sm:w-[85%] md:w-[62%] lg:w-[60%]  flex flex-col justify-around'>
                        <h1 className='text-[30px] sm:text-[40px] lg:text-[60px] text-center sm:text-left mt-8 font-bold'>One Stop Destination For Your FRM Exams.</h1>
                        <div className='flex justify-around m-5 lg:m-9'>
                            <Image className='max-h-[80px] sm:max-h-[130px] ml-5 sm:ml-0' width={130} height={130} src="/Garp.svg" alt="Garp svg" priority={true} />
                            <h1 className='text-[20px]font-medium sm:text-[25px] lg:text-[35px] border-l-[3px] px-[20px] lg:px-[40px] sm:ml-9'>We&apos;re a <span className='font-bold'>GARP approved</span> exam prep provider</h1>
                        </div>
                        <button className="border mx-auto sm:mx-0 sm:mb-[85px] rounded-[54px] hover:bg-[#BE4E1E] w-fit px-[80px] m-5 sm:text-[20px] lg:text-[30px] font-semibold py-5">SIGNUP NOW</button>
                    </div>
                    <div className='w-[70%] sm:w-[65%] md:w-[38%] flex flex-col mx-auto lg:w-[40%] justify-end'>
                        <Image className='max-h-[550px]' width={550} height={550} src="/HeroImg.png" alt='Micky Midha' priority={true} />
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto mb-5'>
                <h1 className='text-[30px] md:text-[35px] font-semibold md:font-bold sm:leading-[50px] mx-5 lg:mx-1 text-center mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[85px] mb-9 '>Be a part of <span className='text-[#9A381D]  '>FRM certified community</span> employed at the world&apos;s top banks, asset management firms, consulting firms, and regulators. </h1>
                <div className='sm:flex justify-between mx-auto sm:mb-[85px]'>
                    <div className='w-[300px] lg:w-[500px]  mx-auto'>
                        <Link href="https://www.midhafin.com/frm/part-1" className='w-[100%]'>
                            <Image width={500} height={500} src="/Part-1.svg" alt='part-1' priority={true} />
                        </Link>
                    </div>
                    <div className='w-[300px] lg:w-[500px]  mx-auto'>
                        <Link href="https://www.midhafin.com/frm/part-2" className='w-[100%]'>
                            <Image width={500} height={500} src="/Part-2.svg" alt='part-2' priority={true} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto mb-5'>
                <h1 className='text-center text-[40px] md:text-[50px] font-bold '>What sets us <span className='text-[#9A381D]'>apart</span>?</h1>
                <div className='grid grid-cols-1 gap-9 sm:gap-[60px] mx-4 sm:mx-1 sm:grid-cols-3  justify-around mt-9'>
                    <div className='text-center w-auto'>
                        <Image className='mx-auto' src='/Highly_Customize.png' alt="Highly Customized" width={130} height={130} />
                        <h1 className='text-[30px] text-[#9A381D] font-bold'>Highly Customized</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Access to 1-to-1 Doubt Session.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Customized Study Plan meeting.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Frequent “Personalized Meetings” to ensure progress and vital feedback.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Personalized Mocks Assessments & related advice to improve the score.</p>
                        </ul>
                    </div>

                    <div className='text-center w-auto'>
                        <Image className='mx-auto' src='/Quality Content.png' alt="Quality Content" width={130} height={130} />
                        <h1 className='text-[30px] text-[#9A381D] font-bold'>Quality Content</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Usage of Graphs, Tables, and charts to illustrate the concept.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Usage of Simple examples to enhance conceptual clarity.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Logical flow of Sequencing of chapters to enhance understanding.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Concepts built from Scratch, ease of understanding for candidates with no Mathematics/Finance Background.</p>
                        </ul>
                    </div>

                    <div className='text-center w-auto'>
                        <Image className='mx-auto' src='/GARP Related.png' alt="GARP Related" width={130} height={130} />
                        <h1 className='text-[30px] text-[#9A381D] font-bold'>GARP Related</h1>
                        <ul className='list-disc list-inside' >
                            <p className='text-[20px]'>Resolving and addressing GARP-related queries.Related to exam scheduling. </p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Best practices to approach the exam.</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Common do&apos;s & don&apos;t,</p>
                            <li className='text-[#BE4E1E] text-[20px] text-center font-bold'></li>
                            <p className='text-[20px]'>Exam Strategy.</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto py-9 sm:mb-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className=' text-left sm:p-[40px]'>
                        <h1 className='text-[40px] md:text-[50px] sm:leading-[55px] pb-5 px-5 font-bold'>Recent <span className='text-[#BE4E1E]'>Performance</span> <br /> Highlights</h1>
                        <p className='text-[20px] px-5 sm:px-6'>Through strategy, hard work, and planning, we have achieved the success rate which stands second to none!</p>
                    </div>
                    <div className=' mx-auto mt-5 sm:mt-9'>
                        <CounterUpPage />
                    </div>
                </div>
            </div>

            <div className='max-w-[1440px] mx-auto py-1 mb-5'>
                <h1 className='text-[40px] md:text-[50px] font-bold text-center'>Where our Students <span className='text-[#BE4E1E]'>Work </span></h1>
                <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 lg:m-10  m-5 gap-5'>
                    {Logos.map((el, ind) => {
                        return <Image className=' mx-auto ' key={ind} src={el} height={100} width={130} alt="Logo" />
                    })}
                </div>
            </div>
            <div className='max-w-[1500px] mx-auto py-3 mb-5'>
                <div>
                    <h1 className='text-[40px] md:text-[50px] text-center font-bold text-black m-2'>Frequently <span className='text-[#6A1C1A]'>Asked</span> Questions</h1>
                </div>
                <Accordion buttonsData={buttonsData} />
            </div>
            <div className=' text-[#F9F2DF] bg-[#6A1C1A] w-[100%] '>
                <div className='max-w-[1300px] sm:px-4 flex flex-wrap sm:flex-nowrap mx-auto'>
                    <div className='flex sm:flex-col w-fit justify-end mx-auto '>
                        <Image className='mt-9 sm:mt-0 mx-3' src="/Contact-us.svg" height={500} width={500} alt='contact-us' />
                    </div>
                    <div className='min-w-[300px] w-[450px] mx-auto flex-shrink-1'>
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="grid grid-cols-1 mt-5 "
                        >
                            <input type="hidden" name="access_key" value="e2deee0c-855f-4ae1-a513-eadd701a4eae" />
                            {/* change value to whatever page you want to redirect after submitting the form */}
                            <input type="hidden" name="redirect" value="https://www.midhafin.com/thank-you"></input>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name*"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            />
                            <input
                                type="phone-number"
                                name="phone"
                                placeholder="Phone*"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message*"
                                className="w-full h-28 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                required
                            ></textarea>
                            <div className="my-3 ">
                                <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-[#8e1c1c] hover:bg-[#6a1c1a] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
