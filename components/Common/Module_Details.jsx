import Image from "next/image";
import Link from "next/link";

export default function Module_Details({}) {
  const data = {

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
    <div className="max-w-[1350px] px-[10px] md:px-[25px] mx-auto">
      <div className="flex justify-between my-[50px] ">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[9px] sm:text-[16px] md:text-[22px] lg:text-[32px] md:leading-[1px] lg:leading-[24px] text-center -mb-2 text-[#BE4E1E] mt-2 sm:mt-5">
            MODULE
          </p>
          <h1 className="font-bold text-[30px] sm:text-[55px] md:text-[80px] lg:text-[128px] lg:leading-[128px] md:-mb-5 lg:mb-0 text-[#BE4E1E]">
            {data.module}
          </h1>  
        </div>
        <h1 className="font-bold  text-[16x] sm:text-[22px] md:text-[40px] lg:text-[70px] max-w-[750px] my-auto lg:leading-[84px] w-[50%] lg:w-fit">
          {data.title}
        </h1>
        <Image
          src={data.image}
          alt="FRM"
          width={270}
          height={270}
          className="shadow-2xl rounded-full h-fit min-w-[84px] max-w-[270px] w-[30%] flex-shrink-0"
        />
      </div>

      <p className="font-semibold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] mb-4 px-[10px]">{data.desc}</p>
       <h1 className="font-bold text-[#691D1C] text-[14px] sm:text-[22px]  lg:text-[36px] mb-4 ml-2">Chapter Descriptions:</h1>
      <div>
        {data.chapters.map((chapter) => (
          <div
            className="border shadow-xl rounded-2xl flex flex-col justify-center items-center lg:flex-row lg:justify-between p-4 mb-4 px-[24px]"
            key={chapter.id}
          >
          
            <div className="max-w-[1050px] flex justify-start w-[100%] lg:w-auto">

            <h1 className="text-[#BE4E1E] font-bold  text-[14px] sm:text-[24px] mr-[10px] sm:mr-[30px] sm:min-w-[70px]">
                Ch.{chapter.id}.
              </h1>
              <div>

              <h2 className="font-bold text-[14px] sm:text-[24px] mb-2">{chapter.ques}</h2>
              <p className=" text-[20px] hidden lg:block ">{chapter.ans}</p>
              
              </div>
             
            
            </div>
            <p className="text-[12px] sm:text-[18px] block lg:hidden w-[100%]">{chapter.ans}</p>
            <div className="lg:my-auto mt-3 ">
              <Link href={chapter.link}>
                <button
                  className={`text-white font-bold py-3 px-4 w-[130px] sm:w-[150px] rounded-full tracking-wider mx-auto ${
                    chapter.free
                      ? "bg-gradient-to-r from-[#BE4E1E] to-[#E7AC66]"
                      : "bg-[#691D1C]"
                  }`}
                >
                  {chapter.free ? "View >" : "Buy >"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
