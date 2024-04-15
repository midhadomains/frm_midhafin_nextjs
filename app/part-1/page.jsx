import Link from "next/link";
import Accordion from "@/components/Accordian";
import Footer from "@/components/SiteFooter";
import Navbar from "@/components/SiteHeader";
import Courses from "@/components/Part-1/Courses";
import Image from "next/image";

export default function page() {
  const buttonsData = [
    {
      id: 1,
      text: "What is the format of the FRM Part 1 exam?",
      data: "The FRM Part 1 exam is a computer-based test consisting of 100 multiple-choice questions. Candidates have four hours to complete the exam. There is no negative marking for wrong answers. The questions are designed to test your knowledge of the foundational concepts of risk management covered in the curriculum.",
    },
    {
      id: 2,
      text: "What are the benefits of pursuing FRM Level 1 ?",
      data: "FRM certification enhances career opportunities in risk management, finance, and related fields. It validates your expertise in risk analysis and can lead to higher-paying positions in areas such as risk consulting, investment management, and financial analysis.The FRM level 1 builds a strong foundation for this and equips you with risk management skills.",
    },
    {
      id: 3,
      text: "How long does it take to prepare for FRM level 1 exam ?",
      data: "The amount of time it takes to prepare for the Financial Risk Manager (FRM) Level 1 exam can vary depending on a number of factors, such as your prior knowledge of the subject matter, your study habits, and the amount of time you can dedicate to studying each day. Generally, it is recommended to dedicate at least 400-500 hours of study time to prepare for the exam. This could take anywhere from a few months to a year or more, depending on your individual circumstances. It’s important to create a study plan and stick to it in order to ensure you are adequately prepared for the exam.",
    },
    {
      id: 4,
      text: "Does FRM level 1 need a strong mathematical background ?",
      data: "While a mathematics background is not a strict requirement for FRM Level 1, having a solid understanding of basic mathematical concepts can be beneficial. The FRM exam, particularly in the quantitative analysis section, involves topics such as probability, statistics, and financial mathematics. Candidates with a mathematical background may find it easier to grasp these concepts. However, GARP (Global Association of Risk Professionals), the organization that administers the FRM exams, designs the test to be accessible to individuals from various educational backgrounds. The focus is on practical knowledge and skills in financial risk management. Many candidates with diverse educational backgrounds, including finance, economics, and business, successfully pass the FRM Level 1 exam through diligent preparation and study of the recommended materials.",
    },
    {
      id: 5,
      text: "How long is the FRM Part 1 valid for after passing it ?",
      data: "The FRM Part 1 exam is valid for a period of 4 years. Candidates must pass the FRM Part 2 exam before this period is over to earn FRM designation, otherwise, they will have to reappear for the FRM Part 1 exam.",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <div className="text-center bg-gradient-to-b from-[#ffe4a4a0] from-[1%] to-[100%] p-4 max-h-[300px]">
        {/* <div className=" h-[50px] max-w-[700px] mx-auto  "></div> */}
        <h1 className="text-[50px] font-semibold text-[#6A1C1A] mt-[70px]">
          <span className="text-[#BF4E1E]">F</span>inancial&nbsp;
          <span className="text-[#BF4E1E]">R</span>isk&nbsp;
          <span className="text-[#BF4E1E]">M</span>anagement
        </h1>
        <h1 className="text-[#6A1C1A] text-[70px] font-bold">FRM Part - 1</h1>
      </div>
      <Courses />
      {/* Eligibility and pre Requisites */}
      <div className="flex h-[420px] justify-center my-[70px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/part-1/Part-1left.svg' width={350} height={450} alt="image" className="absolute -right-[60px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">Eligibility and/or Pre-Requisites</h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400]  ">The FRM course welcomes candidates from various academic backgrounds, without any specific educational field prerequisites. There are NO ELIGLIBILITY CRITERIA for potential candidates; even those in the early stages of their undergraduate education can embark on the FRM journey by taking the Part 1 examination.</p>
          </div>
        </div>
      </div>
      {/* About the exam */}
      <div className="flex h-[450px] justify-center mt-[200px]">
        <div className=" flex justify-end w-[80%] mr-[100px] ">
          <div className="max-w-[900px] h-[100%] flex flex-col justify-end pl-4">
            <h1 className="text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">About the Exam - <span className="text-[#BF4E1E]">FRM Part 1</span></h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400] ">FRM Part 1 is the first level of the Financial Risk Manager (FRM) certification offered by the Global Association of Risk Professionals (GARP). It involves an examination that assesses candidates’ understanding of foundational concepts in risk management This encompasses a comprehensive exploration of quantitative analysis, fundamental concepts in risk management, the intricacies of financial markets and products, and the application of valuation and risk models. The examination assesses candidates’ proficiency in these core areas, laying the foundation for a solid understanding of risk management principles and practices in the financial domain.Various modules carry different weights in the exam, and to pass FRM Part 1, a minimum score is required in each module.</p>
          </div>
        </div>
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/part-1/part-1right.svg' width={400} height={350} alt="image" className="absolute -left-[60px] bottom-0" />
        </div>
      </div>
      {/* weightage module */}
      <div className="max-w-[1350px] mx-auto px-4 w-[100%] mt-[100px]">
        <h1 className="text-[20px] md:text-[30px]  lg:text-[40px] font-semibold text-left my-[50px]">The specific weightage for each module in the exam is as follows:</h1>
        <ul className="">
          <li className="flex ">
            <div className=" aspect-square  bg-[#FFE9CA] max-w-[180px] w-[100%] text-center flex flex-col justify-center ">
              <h2 className="text-[40px] font-bold text-[#6A1C1A]">20%</h2>
            </div>
            <div className="max-w-[1000px] lg:ml-10 my-auto">
              <h3 className="md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]">Foundations of Risk Management (20%):</h3>
              <p className="text-[20px] lg:text-[24px] leading-[40px] font-[400] ">This module lays the groundwork for understanding key concepts and principles in risk management.</p>
            </div>
          </li>
          <li className="flex ">
            <div className=" aspect-square  bg-[#FFD9A3] max-w-[180px] w-[100%] text-center flex flex-col justify-center ">
              <h2 className="text-[40px] font-bold text-[#6A1C1A]">20%</h2>
            </div>
            <div className="max-w-[1000px] lg:ml-10 my-auto">
              <h3 className="md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Quantitative Analysis (20%):</h3>
              <p className="text-[20px] lg:text-[24px] leading-[40px] font-[400] "> Focusing on quantitative techniques, this module assesses candidates&apos; ability to analyze and interpret data for risk management purposes. </p>
            </div>
          </li>
          <li className="flex ">
            <div className="  bg-[#FFCD86] max-w-[180px] w-[100%] h-[270px]  flex-shrink-0 text-center flex flex-col justify-center ">
              <h2 className="text-[40px] font-bold text-[#6A1C1A]">30%</h2>
            </div>
            <div className="max-w-[1000px] lg:ml-10 my-auto">
              <h3 className="md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]">Financial Markets and Products (30%):  </h3>
              <p className="text-[20px] lg:text-[24px] leading-[40px] font-[400] "> Exploring the intricacies of financial markets and various financial instruments, this module evaluates candidates’ knowledge of market structures and products. </p>
            </div>
          </li>
          <li className="flex ">
            <div className="  bg-[#FFBC5E] max-w-[180px] w-[100%] h-[270px] text-center flex flex-col justify-center ">
              <h2 className="text-[40px] font-bold text-[#6A1C1A]">30%</h2>
            </div>
            <div className="max-w-[1000px] lg:ml-10 my-auto">
              <h3 className="md:text-[30px] lg:text-[35px] font-bold text-[#6A1C1A]"> Valuation and Risk Models (30%): </h3>
              <p className="text-[20px] lg:text-[24px] leading-[40px] font-[400] "> This module delves into the valuation of financial instruments and the application of risk models in assessing and managing risk. </p>
            </div>
          </li>
        </ul>
        {/* desc section */}
        <div className="max-w-[1300px] mx-auto">
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Foundations of Risk Management</h2>
              <p className="text-[20px] lg:text-[24px]">This module is designed to impart fundamental knowledge of the basis of risk management. It introduces the principles and process of risk management. It also provides a primer for risk governance, risk measurement, and the roles, responsibilities and duties of a successful risk manager. Along with best practices for good risk management and governance, it also provides insight into past financial crises and business failures which were caused due to poor risk management.</p>
            </div>
            <Image src='/part-1/desc_frm.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Quantitative Analysis</h2>
              <p className="text-[20px] lg:text-[24px]"> The main focus of this module is to impart and equip candidates with crucial quantitative tools and techniques necessary for risk assessment and measurement. It deeply covers topics like probability theory, Statistics (Basic as well as advanced), Regression analysis, and time series analysis. It also provides a primer for the most recent technological developments being used in the industry such as machine learning and artificial intelligence.</p>
            </div>
            <Image src='/part-1/desc_vrm.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Financial Markets and Products</h2>
              <p className="text-[20px] lg:text-[24px]"> This module attempts to provide a detailed overview of various financial instruments including derivatives, securities, and structured products. The module aims to provide a sound understanding of different types of financial assets such as fixed-income securities, money market instruments, FX products, commodities, derivatives (F&O and swaps, etc), and alternative investments such as CDOs, CLOs, ABS, etc. and introduces the concept of hedging as an important tool of risk management.</p>
            </div>
            <Image src='/part-1/desc_fmp.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
          <div className="flex justify-between  mt-[80px]">
            <div className="max-w-[1000px] pr-5">
              <h2 className="md:text-[30px] lg:text-[35px] font-bold ">Valuation and Risk Models</h2>
              <p className="text-[20px] lg:text-[24px]">This module is essential for understanding the valuation of various financial instruments including fixed income, equity, and derivatives (Swaps, Options, Eurodollars, dollar roll, etc.) valuation. It also provides a basic understanding of risk modelling, encompassing interest rate risk, credit risk, and operational risk. This module equips candidates with the essential skills to accurately value financial instruments and manage associated risks.</p>
            </div>
            <Image src='/part-1/desc_qta.svg' width={250} height={250} alt="frm" className="flex-shrink-0" />
          </div>
        </div>
      </div>
      {/* Composition and Exam Structure */}
      <div className="flex h-[520px] justify-center my-[70px] mt-[150px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/part-1/caes.svg' width={400} height={450} alt="image" className="absolute -right-[60px] top-[40px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center pr-4">
            <h1 className="text-[35px] xl:text-[40px] mb-[20px] xl:mb-[40px] font-semibold">Composition and Exam Structure</h1>
            <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400]  ">FRM Part 1 comprises 100 equally weighted questions presented in a multiple-choice format on a computer-based test (CBT). In this modern and efficient testing experience, you have four hours to complete the exam by selecting the correct answers from the provided options. The objective is to evaluate your knowledge, application abilities, and decision-making skills within a defined timeframe.<br />In both GARP FRM exams (Parts 1 and 2), no negative marking is applied. Candidates do not face penalties for providing incorrect answers.</p>
          </div>
        </div>
      </div>
      {/* study plan */}
      <div className="max-w-[1300px] mx-auto flex justify-between ">
        <div className="max-w-[680px] mt-auto">
          <h2 className="text-[30px] xl:text-[35px] mb-[30px] xl:mb-[50px]  font-semibold">Study Plan</h2>
          <p className="text-[20px] xl:text-[24px] leading-[40px] font-[400]  ">Ideally, a candidate preparing for the FRM Part 1 exam should complete the whole curriculum in 16 weeks with 30-35 hours of study every week. This study plan provides a 16-week road map with relevant chapters that should be covered every week It also provides a carefully researched chapter sequence that can be followed to ensure maximum understanding of the FRM Part 1 curriculum.</p>
        </div>
        <div className="flex-shrink-0">
          <div className="my-8 " style={{ width: "500px", maxWidth: "500px",minWidth:"200px", }}>
            <div style={{ position: "relative", paddingBottom: "62.5%", height: "0", overflow: "hidden", maxWidth: "100%",  }}>
              <iframe
                src="https://www.youtube.com/embed/6sTEUkR40uI?si=sDonMG5jq4orT3Ue"
                title="YouTube video player"
                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "90%", borderRadius: "10px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <h2 className="w-[300px] border mx-auto bg-[#BE4E1E] py-3  text-[24px] rounded-full text-center font-semibold text-white -mt-[30px]"><Link href='/part-1/study-plan'>Go to Study Plan</Link></h2>
        </div>
      </div>
      {/* Preparation Tips */}
      <div className="my-[100px] max-w-[1300px] mx-auto px-3 ">
        <h1 className="text-[20px] md:text-[30px]  lg:text-[40px] font-bold text-center my-[10px]">Preparation Tips</h1>
        <p className="text-center  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">Preparing for FRM Part 1 involves careful consideration of several crucial aspects. The effective selection and management of these factors play a pivotal role in ensuring a robust preparation:</p>
        <div className="grid grid-cols-2 mt-[40px]">
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">1. Preparation Window </h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">Allocating a preparation window of at least 5 months for FRM Part 1 is advisable.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">2. Time Required </h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">To achieve thorough preparation, it is recommended to dedicate around 600 hours to FRM Part 1. Avoiding shortcuts is emphasized to ensure a deep understanding of risk management concepts and tools, facilitating ease in answering interview questions.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">3. Material</h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">Choosing the right study material is paramount. MidhaFin, as one of the first GARP Authorized Prep Providers for FRM, offers comprehensive study material, including over 200 hours of content videos, 85 plus hours of question-solving videos, and 100 plus hours of revision videos.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">4. Questions</h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">Solving a substantial number of questions is key to preparation success. MidhaFin provides question banks with over 3000 questions, closely aligned with recent exam trends. GARP sample paper questions from the past 15 years are also included.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">5. Periodic Tests</h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">Implementing regular quizzes is integral to the active learning philosophy at MidhaFin. Four monthly tests are conducted, focusing on the curriculum taught during the respective month. Graded tests enable students to monitor their performance consistently.</p>
          </div>
          <div className="min-w-[300px] max-w-[600px] w-[100%]  m-5   ">
            <h2 className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[40px] font-[600] text-[#6A1C1A] ">6. Mock Tests</h2>
            <p className="text-left  mx-auto text-[20px] xl:text-[24px] leading-[34px] font-[400] ">MidhaFin conducts 5 mock tests towards the end of the preparation period, starting approximately a month before the exam. These full-length mock tests cover the entire syllabus and are graded, providing quartile analysis similar to the actual GARP FRM exams.</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[20px] md:text-[30px]  lg:text-[40px] font-semibold  my-[50px] text-center">Frequently Asked Queries</h1>
        <Accordion buttonsData={buttonsData} />
      </div>
      <Footer />
    </div>
  );
}
