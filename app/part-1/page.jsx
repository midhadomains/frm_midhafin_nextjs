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
      <div className="text-center bg-gradient-to-b from-[#ffe4a4a0] p-4 max-h-[300px]">
        {/* <div className=" h-[50px] max-w-[700px] mx-auto  "></div> */}
        <h1 className="text-[50px] font-semibold text-[#6A1C1A] mt-[70px]">
          <span className="text-[#BF4E1E]">F</span>inancial{" "}
          <span className="text-[#BF4E1E]">R</span>isk{" "}
          <span className="text-[#BF4E1E]">M</span>anagement
        </h1>
        <h1 className="text-[#6A1C1A] text-[70px] font-bold">FRM Part - 1</h1>
      </div>
      <Courses />
      <div className="flex h-[400px] justify-center my-[70px]">
        <div className="bg-[#FFF4DA] min-w-[300px] flex justify-end relative w-[50%]">
          <Image src='/Part-1left.svg' width={350} height={450} alt="image" className="absolute -right-[50px]" />
        </div>
        <div className=" flex justify-start w-[80%] ml-[100px] ">
          <div className="max-w-[800px] h-[100%] flex flex-col justify-center">
            <h1 className="text-[40px] mb-[50px]">Eligibility and/or Pre-Requisites</h1>
            <p className="text-[24px] leading-[44px] font-[400] ">The FRM course welcomes candidates from various academic backgrounds, without any specific educational field prerequisites. There are NO ELIGLIBILITY CRITERIA for potential candidates; even those in the early stages of their undergraduate education can embark on the FRM journey by taking the Part 1 examination.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
