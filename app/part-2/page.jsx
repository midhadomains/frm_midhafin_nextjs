import Link from "next/link";
import Accordion from "@/components/Accordian";
import Footer from "@/components/SiteFooter";
import Navbar from "@/components/SiteHeader";
import Courses from "@/components/Part-1/Courses";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "How is FRM Part 2 different from Part 1?",
      data: "While Part 1 leans towards a foundational and numerical focus, Part 2 takes a turn by placing a greater emphasis on theoretical aspects. What's intriguing is that, despite the theoretical nature, these aspects in Part 2 are more industry-oriented and practical, offering a unique blend that challenges candidates to apply their theoretical understanding in real-world contexts.Part 2 requires candidates to integrate knowledge from different subjects and apply them in a holistic manner. For instance, questions may necessitate blending concepts from market, credit, and operational risk to provide comprehensive solutions.",
    },
    {
      id: 2,
      text: "What study materials are recommended for preparing for FRM Part 2?",
      data: "MidhaFin's study materials offer a comprehensive and detailed preparation experience tailored to meet the requirements of FRM Part 2. Crafted in alignment with the official GARP curriculum, our material provides a robust foundation for exam success. It highly recommended to use our material as the primary source of preparation.Our learning materials include lecture videos, complete study materials, revision videos, a doubt-solving forum, an interactive student group, a customized study plan, question bank PDFs, past sample paper questions, five mock tests, module-wise tests, and question-solving videos. This inclusive package ensures a thorough understanding and effective preparation for the exam.",
    },
    {
      id: 3,
      text: "How long does it take to prepare for FRM Part 2?",
      data: "The suggested guideline by the MidhaFin team is 600 hours minimum for FRM Part 2 preparation, and candidates may need to adjust their study timelines based on their prior knowledge, learning pace, and personal commitments. It is advisable to start preparation well in advance to allow for a gradual and thorough understanding of the material.",
    },
    {
      id: 4,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2023, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. It's important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
    {
      id: 5,
      text: "What is the customized study plan by MidhaFin ?",
      data: "The customized study plan is a personalized plan that tailors the basic study plan to meet the specific needs of each candidate. This structured plan includes a week-by-week breakdown, module-wise allocation, daily study targets, and utilization of various resources such as study materials, lecture videos, and question banks. The plan emphasizes regular practice, review, and the importance of mock exams to simulate real test conditions. It also provides support through doubt-solving forums and encourages participation in an interactive student group for collaborative learning.The customization is achieved through a dedicated Customized Study Plan (CSP) meeting with our instructor. As soon as candidates enroll in our courses, this meeting ensures that the study plan aligns with their individual learning styles, strengths, and areas that require focused attention. This personalized approach aims to optimize candidates' preparation for the FRM Part 2 exam, enhancing their overall learning experience and chances of success.",
    },
    {
      id: 6,
      text: "How often is the FRM Part 2 exam offered?",
      data: "As of 2023, The FRM Part 2 exam is offered thrice a year. Specifically, candidates have the opportunity to take the exam during two one-week exam windows, typically in May and November. And there is a single exam date in August.This schedule allows candidates to plan their preparation and choose a convenient timeframe to sit for the exam. Its important for candidates to be aware of the specific exam dates for each year and plan their study schedule accordingly to ensure optimal readiness for the FRM Part 2 examination.",
    },
  ];

  const course = [
    {
      "name": "FRM® Part-2 Sample Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-PART-2-Sample-Course.png",
      "price": "",
      "other": "free",
      "instructor": "Micky Midha",
      "details": [
        "12 Hrs of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Lecture PDFs ",
        "class notes"
      ],
      "link": "https://www.midhafin.com/courses/MidhaFin-FRM-Part-2-Sample-Course-6305cfe7e4b0559d1844da2b",
      "rating": 4.5,
      "tp": "SC-2",
      "category": "frm",
      "sub_category": "part-2_sample_course"
    },
    {
      "name": "FRM® Part-2 Self Paced Course",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-2-Self-paced-course.png",
      "price": "",
      "other": "",
      "instructor": "Micky Midha",
      "details": [
        "250+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://www.midhafin.com/courses/FRM-Part-2-Self-Paced-Course-628f55be0cf2d265f3bcb964",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-2_self_paced_course"
    },
    {
      "name": "FRM® Part-1 and Part-2 Combined Package",
      "image": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-TP2-plus-FRM-Part-2-TP1.png",
      "price": "",
      "other": "",
      "instructor": "Micky Midha",
      "details": [
        "450+ Hrs Of Videos",
        "Available On Web,IOS & Android",
        "Access Until You Pass",
        "Complete Study Material",
        "Quizzes,Question Bank & Mock tests"
      ],
      "link": "https://api.eduzan.com/wp-content/uploads/2024/02/MF_FRM-Part-1-2-Training-Package-1-Self-Paced-Course.png",
      "rating": 4.5,
      "tp": "TP-1",
      "category": "frm",
      "sub_category": "part-1_and_part-2_combined_package"
    },

  ]

  return (
    <div className="bg-white  ">
      <Navbar />
      <div className="text-center bg-gradient-to-b from-[#ffe4a4a0] from-[1%] to-[100%] p-4 max-h-[300px]">
        {/* <div className=" h-[50px] max-w-[700px] mx-auto  "></div> */}
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold text-[#6A1C1A] mt-[70px]">
          <span className="text-[#BF4E1E]">F</span>inancial&nbsp;
          <span className="text-[#BF4E1E]">R</span>isk&nbsp;
          <span className="text-[#BF4E1E]">M</span>anagement
        </h1>
        <h1 className="text-[#6A1C1A] text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]  font-bold">FRM Part - 2</h1>
      </div>
      <Courses course={course} className="scale-90	" />
      {/* Eligibility and pre Requisites */}

      {/* Large screem */}
      <div className="hidden  lg:flex h-[420px] justify-center my-[70px] ">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[40%] flex-shrink-0">
          <Image src='/part-2/Part2left.svg' width={350} height={450} alt="image" className=" -mr-[340px] flex-shrink-0 w-[550px] -bottom-5 " />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-top pr-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span> </h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400]  ">In order for your Part 2 examination to be evaluated, you <span className="text-[#BE4E1E]">must successfully complete FRM Part 1.</span></p>
          </div>
        </div>
      </div>
      {/* Small screen */}
      <div className="w-[100%] lg:hidden mt-[18%] sm:mt-[25%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-[100px] xs:mt-[200px] relative ">
          <Image src='/part-2/Part2left.svg' width={170} height={100} alt="image" className="mx-auto w-[60%] xs:w-[350px] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 ">Eligibility and/or <span className="text-[#BE4E1E]"> Pre-Requisites</span></h2>
          <p className="text-[14px] sm:text-[16px]">In order for your Part 2 examination to be evaluated, you <span className="text-[#BE4E1E]">must successfully complete FRM Part 1.</span></p>
        </div>
      </div>
      {/* About the exam */}

      {/* Large screem */}
      <div className="hidden  lg:flex  justify-center mt-[200px]">
        <div className=" flex justify-end w-[80%] mr-[100px] ">
          <div className="max-w-[900px] h-[100%] flex flex-col justify-end pl-4">
            <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">About the Exam - <span className="text-[#BF4E1E]">FRM Part 1</span></h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400] ">FRM Part 2 is the second level of the Financial Risk Manager (FRM) examination, offered by the Global Association of Risk Professionals (GARP). This segment of the FRM certification delves into practical applications of the knowledge acquired in FRM Part 1. It offers a more in-depth exploration of key areas, including market risk, credit risk, operational, liquidity risk, risk management in investment, and a study of current issues in the financial markets.<br/>
              There are portions which primarily focus on applying the knowledge and concepts acquired in Part 1, and hence it is assumed that candidates already possess a foundational understanding of the concepts covered in Part 1. But there are certain areas of Part 2 that introduce entirely new or more advanced concepts that candidates may not have encountered in Part 1. This signifies that Part 2 combines both the application of existing knowledge from Part 1 and the introduction of fresh, potentially challenging material.</p>
          </div>
        </div>
        <div className="bg-[#FFF4DA] min-w-[300px] max-h-[450px] flex justify-end relative w-[50%] mt-[150px] ">
          <Image src='/part-2/part2right.svg' width={400} height={350} alt="image" className="absolute -left-[100px] -bottom-9" />
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[30%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-[100px] xs:mt-[250px] relative ">
          <Image src='/part-2/Part2right.svg' width={170} height={100} alt="image" className="mx-auto w-[40%] xs:w-[270px] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 ">About the Exam - <span className="text-[#BE4E1E]"> FRM Part 1</span></h2>
          <p className=" text-[14px] sm:text-[16px]">FRM Part 2 is the second level of the Financial Risk Manager (FRM) examination, offered by the Global Association of Risk Professionals (GARP). This segment of the FRM certification delves into practical applications of the knowledge acquired in FRM Part 1. It offers a more in-depth exploration of key areas, including market risk, credit risk, operational, liquidity risk, risk management in investment, and a study of current issues in the financial markets.<br />
            There are portions which primarily focus on applying the knowledge and concepts acquired in Part 1, and hence it is assumed that candidates already possess a foundational understanding of the concepts covered in Part 1. But there are certain areas of Part 2 that introduce entirely new or more advanced concepts that candidates may not have encountered in Part 1. This signifies that Part 2 combines both the application of existing knowledge from Part 1 and the introduction of fresh, potentially challenging material.</p>
        </div>
      </div>

      {/* weightage module */}
      <div className="max-w-[1350px] mx-auto px-5  w-[100%]  sm:mt-[100px] ">
        <h1 className="text-[18px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold text-left my-[30px]  sm:my-[50px]">FRM Part 2 is composed of <span className="text-[#BE4E1E]"> six modules</span> </h1>
        <ul>
          
        </ul>
        {/* desc section */}
        {/* large screen */}
        <div className="max-w-[1300px] mx-auto hidden md:block">
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Market Risk Measurement and Management</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]">This module builds upon the FRM Part 1 curriculum and delves into the challenging realm of market risk. It covers various topics, including VaR and other risk metrics, estimation methods like parametric and non-parametric approaches, VaR mapping, backtesting VaR, coherent risk measures like expected shortfall (ES), Extreme Value Theory (EVT), modeling dependence through correlations and copulas, term structure models of interest rates, volatility with considerations for smiles and term structures, and the Fundamental Review of the Trading Book (FRTB).</p>
            </div>
            <Image src='/part-2/mr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Credit Risk Measurement and Management</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]">This module is dedicated to assessing and managing the risk of default by borrowers or counterparties. It explores advanced techniques and models such as credit rating methodologies, credit derivatives, and credit portfolio management. Key areas of focus include credit analysis, quantitative methods for assessing default risk, expected and unexpected loss, Credit VaR, counterparty risk, credit derivatives, and structured finance and securitization.</p>
            </div>
            <Image src='/part-2/cr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Operational Risk and Resilience</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]">This module attempts to provide a detailed overview of various financial instruments including derivatives, securities, and structured products. The module aims to provide a sound understanding of different types of financial assets such as fixed-income securities, money market instruments, FX products, commodities, derivatives (F&O and swaps, etc), and alternative investments such as CDOs, CLOs, ABS, etc. and introduces the concept of hedging as an important tool of risk management. </p>
            </div>
            <Image src='/part-2/or.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Liquidity and Treasury Risk Measurement and Management</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]">This module equips financial institutions with tools to recognize, quantify, and manage liquidity risks. It emphasizes maintaining adequate liquidity levels, implementing effective funding strategies, and aligning with regulatory guidelines. Topics include liquidity risk principles and metrics, liquidity portfolio management, cash-flow modeling, liquidity stress testing, contingency funding plans, funding models, funds transfer pricing, cross-currency funding, balance sheet management, and asset liquidity. </p>
            </div>
            <Image src='/part-2/lr.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Risk Management and Investment Management</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]"> This module revisits some content from FRM Part 1 and introduces additional conceptual, numerical, and theoretical chapters. It explores applying risk management techniques to the investment management process, covering factor theory, portfolio construction, risk metrics, risk budgeting, monitoring and performance measurement, portfolio-based performance analysis, and hedge funds.</p>
            </div>
            <Image src='/part-2/rm.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Current Issues in Financial Markets</h2>
              <p className="text-[20px] lg:text-[24px] lg:leading-[40px]">This module focuses on significant topics with a substantial impact on financial markets. It includes machine learning (ML) and artificial intelligence (AI), climate risk, inflation risk, and emerging technologies like blockchain, cryptocurrency, and decentralized finance. </p>
            </div>
            <Image src='/part-2/ci.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
        </div>
        {/* small screen */}

        <div className="max-w-[1300px] mx-auto flex justify-center flex-wrap   md:hidden mt-[30px]">
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/mr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[305px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px] '>Market Risk Measurement<br/> and Management</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module builds upon the FRM Part 1 curriculum and delves into the challenging realm of market risk. It covers various topics, including VaR and other risk metrics, estimation methods like parametric and non-parametric approaches, VaR mapping, backtesting VaR, coherent risk measures like expected shortfall (ES), Extreme Value Theory (EVT), modeling dependence through correlations and copulas, term structure models of interest rates, volatility with considerations for smiles and term structures, and the Fundamental Review of the Trading Book (FRTB).</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/cr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[270px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out " />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Credit Risk Measurement<br /> and Management</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module is dedicated to assessing and managing the risk of default by borrowers or counterparties. It explores advanced techniques and models such as credit rating methodologies, credit derivatives, and credit portfolio management. Key areas of focus include credit analysis, quantitative methods for assessing default risk, expected and unexpected loss, Credit VaR, counterparty risk, credit derivatives, and structured finance and securitization.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/or.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[285px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Operational Risk and<br />Resilience</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module attempts to provide a detailed overview of various financial instruments including derivatives, securities, and structured products. The module aims to provide a sound understanding of different types of financial assets such as fixed-income securities, money market instruments, FX products, commodities, derivatives (F&O and swaps, etc), and alternative investments such as CDOs, CLOs, ABS, etc. and introduces the concept of hedging as an important tool of risk management. </p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/lr.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[285px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Liquidity & Treasury Risk Measurement & Management</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module equips financial institutions with tools to recognize, quantify, and manage liquidity risks. It emphasizes maintaining adequate liquidity levels, implementing effective funding strategies, and aligning with regulatory guidelines. Topics include liquidity risk principles and metrics, liquidity portfolio management, cash-flow modeling, liquidity stress testing, contingency funding plans, funding models, funds transfer pricing, cross-currency funding, balance sheet management, and asset liquidity.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/rm.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[260px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:mb-[10px] mb-[5px]'>Risk Management and Investment Management</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module revisits some content from FRM Part 1 and introduces additional conceptual, numerical, and theoretical chapters. It explores applying risk management techniques to the investment management process, covering factor theory, portfolio construction, risk metrics, risk budgeting, monitoring and performance measurement, portfolio-based performance analysis, and hedge funds.</p>
            </div>
          </div>
          <div className='md:w-[350px] md:h-[350px] w-[320px] h-[320px]  rounded-3xl relative  bg-[#FFF4DA] m-3 flex-shrink-0  overflow-hidden border'>
            <Image src="/part-2/ci.svg" alt="img" width={260} height={200} className='mx-auto -mt-[20px]' />
            <div className='group md:h-[120px] h-[100px] md:w-[350px] w-[320px] text-center bg-white rounded-3xl  absolute   overflow-hidden  bottom-0 hover:h-[230px]  transition-height duration-500 ease-in-out shadow-xl'>
              <IoIosArrowUp className="text-center mx-auto text-[30px] group-hover:rotate-180 	transition-transform duration-500 ease-in-out" />
              <h1 className='md:text-[1.75rem] text-[1.3rem] font-[700] md:my-[10px] mb-[5px]'>Current Issues in <br />Financial Markets</h1>
              <p className=' text-[#6A1C1A]  text-[12px] px-2'>This module focuses on significant topics with a substantial impact on financial markets. It includes machine learning (ML) and artificial intelligence (AI), climate risk, inflation risk, and emerging technologies like blockchain, cryptocurrency, and decentralized finance.</p>
            </div>
          </div>

        </div>

      </div>

      {/* Composition and Exam Structure */}
      {/* large screen */}
      <div className="hidden  lg:flex h-[520px] justify-center my-[70px] mt-[150px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/part-1/caes.svg' width={400} height={450} alt="image" className="absolute -right-[60px] top-[40px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold ">Composition and Exam <span className="text-[#BE4E1E]">Structure </span></h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400]  ">FRM Part 1 comprises 100 equally weighted questions presented in a multiple-choice format on a computer-based test (CBT). In this modern and efficient testing experience, you have four hours to complete the exam by selecting the correct answers from the provided options. The objective is to evaluate your knowledge, application abilities, and decision-making skills within a defined timeframe.<br />In both GARP FRM exams (Parts 1 and 2), no negative marking is applied. Candidates do not face penalties for providing incorrect answers.</p>
          </div>
        </div>
      </div>
      {/* Small screen */}

      <div className="w-[100%] lg:hidden mt-[80px] sm:mt-[23%] ">
        <div className="bg-[#FFF4DA] h-[150px] mt-auto relative ">
          <Image src='/part-1/caes.svg' width={170} height={100} alt="image" className="mx-auto sm:w-[30%] bottom-0 absolute  center  left-0  right-0 text-center z-[1]" />
        </div>
        <div className="px-5 max-w-[700px] mx-auto">
          <h2 className="text-[19px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold my-5 text-center">Composition and Exam <span className="text-[#BE4E1E]"> Structure</span> </h2>
          <p className=" text-[14px] sm:text-[18px] xl:text-[24px] text-center"> FRM Part 1 comprises 100 equally weighted questions presented in a multiple-choice format on a computer-based test (CBT). In this modern and efficient testing experience, you have four hours to complete the exam by selecting the correct answers from the provided options. The objective is to evaluate your knowledge, application abilities, and decision-making skills within a defined timeframe.<br />In both GARP FRM exams (Parts 1 and 2), no negative marking is applied. Candidates do not face penalties for providing incorrect answers.</p>
        </div>
      </div>
      {/* study plan */}
      <div className="max-w-[1300px] mx-auto flex justify-center md:justify-between flex-wrap lg:flex-nowrap p-5 mt-[20px]">
        <div className="lg:max-w-[680px] sm:min-w-[600px]  w-[100%] lg:w-[50%] text-center lg:text-left flex flex-col justify-between">
          <h2 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] mb-[10px] xl:mb-[50px]  font-semibold">Study <span className="text-[#BE4E1E]"> Plan</span> </h2>
          <p className="text-[14px] sm:text-[18px]  lg:text-[24px] sm:leading-[30px]   lg:leading-[35px] font-[400] mb-5">Ideally, a candidate preparing for the FRM Part 1 exam should complete the whole curriculum in 16 weeks with 30-35 hours of study every week. This study plan provides a 16-week road map with relevant chapters that should be covered every week It also provides a carefully researched chapter sequence that can be followed to ensure maximum understanding of the FRM Part 1 curriculum.</p>
        </div>
        <div className="md:w-[50%] max-w-[500px]  mx-auto ">
          <div className="relative overflow-hidden w-full  mx-auto " style={{ paddingTop: "56.25%" }}>
            <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/6sTEUkR40uI?si=HNhS66nIiKIDAfia"></iframe>
          </div>
          <h2 className="w-[300px] border mx-auto bg-[#BE4E1E] py-3  text-[24px] rounded-full text-center font-semibold text-white mt-4 "><Link href='/part-1/study-plan'>Go to Study Plan</Link></h2>
        </div>
      </div>
      {/* Preparation Tips */}
      <div className="my-[30px] md:my-[100px] max-w-[1300px] mx-auto px-5 ">
        <h1 className="text-[20px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-bold text-center my-[10px]">Preparation <span className="text-[#BE4E1E]">Tips </span></h1>
        <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] ">Preparing for FRM Part 1 involves careful consideration of several crucial aspects. The effective selection and management of these factors play a pivotal role in ensuring a robust preparation:</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-[10px] lg:mt-[40px] overflow-hidden">
          <div className="min-w-[300px] max-w-[600px] w-[100%] my-3  md:m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">1. Preparation Window </h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5">Allocating a preparation window of at least 5 months for FRM Part 1 is advisable.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%] my-3 md:m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">2. Time Required </h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5">To achieve thorough preparation, it is recommended to dedicate around 600 hours to FRM Part 1. Avoiding shortcuts is emphasized to ensure a deep understanding of risk management concepts and tools, facilitating ease in answering interview questions.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%] my-3   md:m-5  ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">3. Material</h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5">Choosing the right study material is paramount. MidhaFin, as one of the first GARP Authorized Prep Providers for FRM, offers comprehensive study material, including over 200 hours of content videos, 85 plus hours of question-solving videos, and 100 plus hours of revision videos.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  my-3 md:m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">4. Questions</h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5">Solving a substantial number of questions is key to preparation success. MidhaFin provides question banks with over 3000 questions, closely aligned with recent exam trends. GARP sample paper questions from the past 15 years are also included.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%] my-3  md:m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">5. Periodic Tests</h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5 ">Implementing regular quizzes is integral to the active learning philosophy at MidhaFin. Four monthly tests are conducted, focusing on the curriculum taught during the respective month. Graded tests enable students to monitor their performance consistently.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  my-3 md:m-5   pr-5">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">6. Mock Tests</h2>
            <p className="text-left  mx-auto text-[14px] md:text-[20px] xl:text-[24px] leading-[25px] xl:leading-[34px] font-[400] md:pr-5 ">MidhaFin conducts 5 mock tests towards the end of the preparation period, starting approximately a month before the exam. These full-length mock tests cover the entire syllabus and are graded, providing quartile analysis similar to the actual GARP FRM exams.</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[22px] sm:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold mb-4  md:my-[50px] text-center">Frequently Asked <span className="text-[#BE4E1E]"> Queries</span> </h1>
        <Accordion buttonsData={buttonsData} />
      </div>
      <Footer />
    </div>
  );
}