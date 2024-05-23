import React from "react";
import Image from "next/image";
import Link from "next/link";
import CounterUpPage from "@/components/CounterUpPage";
import Accordion from "@/components/Accordian";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export const metadata = {
  title: "MidhaFin",
  description: "Boost Your Career In Finance",
};

export default function Home() {
  const p = "mx-auto md:mx-0 py-4 text-center";
  const Logos = [
    "https://files.midhafin.com/wp-content/uploads/Aditya-Birla-Group.png",
    "https://files.midhafin.com/wp-content/uploads/bajaj-Allianz.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-America.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-Baroda.png",
    "https://files.midhafin.com/wp-content/uploads/Bank-of-India.png",
    "https://files.midhafin.com/wp-content/uploads/BNY-Mellon.png",
    "https://files.midhafin.com/wp-content/uploads/Central-Bank-of-India.png",
    "https://files.midhafin.com/wp-content/uploads/Citi.png",
    "https://files.midhafin.com/wp-content/uploads/Credit-Suisse.png",
    "https://files.midhafin.com/wp-content/uploads/Deloite.png",
    "https://files.midhafin.com/wp-content/uploads/EXL.png",
    "https://files.midhafin.com/wp-content/uploads/Federal-Bank.png",
    "https://files.midhafin.com/wp-content/uploads/genpact.png",
    "https://files.midhafin.com/wp-content/uploads/Goldman-Sachs.png",
    "https://files.midhafin.com/wp-content/uploads/HCL.png",
    "https://files.midhafin.com/wp-content/uploads/HSBC.png",
    "https://files.midhafin.com/wp-content/uploads/IDBI.png",
    "https://files.midhafin.com/wp-content/uploads/infosys.png",
    "https://files.midhafin.com/wp-content/uploads/SoftBank.png",
    "https://files.midhafin.com/wp-content/uploads/JusPay.png",
    "https://files.midhafin.com/wp-content/uploads/Kotak.png",
    "https://files.midhafin.com/wp-content/uploads/KPMG.png",
    "https://files.midhafin.com/wp-content/uploads/Macquarie.png",
    "https://files.midhafin.com/wp-content/uploads/Morgan-Stanley.png",
    "https://files.midhafin.com/wp-content/uploads/NatWest.png",
    "https://files.midhafin.com/wp-content/uploads/pwc.png",
    "https://files.midhafin.com/wp-content/uploads/SBI.png",
    "https://files.midhafin.com/wp-content/uploads/Scotiabank.png",
    "https://files.midhafin.com/wp-content/uploads/Mask-group.png",
    "https://files.midhafin.com/wp-content/uploads/TCS.png",
    "https://files.midhafin.com/wp-content/uploads/UBS.png",
    "https://files.midhafin.com/wp-content/uploads/JP-Morgan.png",
  ];

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
    },
  ];

  return (
    <div className="">
 
      {/* Hero Section */}
      <div className=" text-[#F9F2DF] bg-[#6A1C1A] ">
        <div className="max-w-[1400px] px-[20px] md:px-[50px] mg:flex  justify-center mx-auto ">
          <div className="w-[100%]  border-black  sm:w-[85%]   lg:w-[60%]  flex flex-col justify-around mx-auto mg:mr-[20px] max-w-[400px] lg:max-w-[801px] h-auto  ">
            <h1 className="text-[24px] md:text-[30px] lg:text-[50px] text-center mg:text-left mt-[19px]  sm:mt-[20px] lg:mt-[31px] font-semibold max-w-[801px]">
              One stop destination for your FRM exams.
            </h1>
            <div className="lg:flex justify-center w-[100%] max-w-[700px] lg:mt-[64px] sm:mt-[25px] mt-[15px] lg:mb-[48px] sm:mb-[30px] mb-[20px]  ">
              <Image
                className=" max-w-[366px] min-w-[196px]  w-[50%] mb-5 sm:mb-0 mx-auto mg:mx-0"
                width={350}
                height={76}
                src="/Garp.svg"
                alt="Garp"
                priority={true}
              />
              <div className="border-l-[3px] hidden lg:block mx-4"></div>
              <div className="w-[50%] hidden lg:block">
                <h1 className="text-[14px] font-[400]  sm:text-[20px] lg:text-[24px] max-w-[265px] min-w-[205px] mg:min-w-[265px] flex-shrink-0 text-center md:text-left">
                  We are one of the first{" "}
                  <span className="font-bold tracking-[1px]">
                    GARP Approved{" "}
                  </span>
                  Prep Partners
                </h1>
              </div>
              <h1 className="text-[14px] lg:text-[24px] sm:text-[16px] font-[400] mt-5  lg:hidden text-center mg:text-left ">
                We&apos;re a GARP approved exam prep provider
              </h1>
            </div>

            <Link
              href="https://edu.midhafin.com/s/authenticate"
              className="mx-auto mg:mx-0 w-[151px] sm:w-[180px] md:w-[220px] lg:w-[320px] xl:w-[358px]    border  rounded-[54px] md:mb-[45px] lg:mb-[55px] xl:mb-[82px]"
            >
              <p className="text-center py-4 text-[#F9ECC7] font-bold text-[14px] md:text-[20px] lg:text-[32px]">
                SIGNUP NOW
              </p>
            </Link>

            {/* <p className="border-[#F9ECC7] border text-[#F9ECC7] mx-auto mg:mx-0  rounded-[54px] hover:bg-[#BE4E1E] w-[397px] h- px-[42px] md:px-[110px] m-[18px] text-[14px] sm:text-[20px] lg:text-[30px] font-semibold py-[15px] md:py-4">SIGNUP NOW</p> */}
          </div>
          <div className="w-[100%]  sm:w-[65%]  lg:w-[40%] flex flex-col justify-end items-center mx-auto flex-shrink-0 max-w-[400px] lg:max-w-[500px]">
            <Image
              className="max-h-[520px]  -mb-[1.6%]  flex-shrink-0  w-[100%] max-w-[400px] lg:max-w-[500px] sm:max-w-auto"
              width={520}
              height={500}
              src="/HeroImg.png"
              alt="Micky Midha"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto  ">
        <div className="flex flex-col max-w-[1400px]  mx-auto px-[25px] md:px-[50px] text-center mb-[21px] lg:mb-[37px]">
          <h1 className="  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-semibold md:font-bold   text-center mt-[4%] text-[#6A1C1A]">
            Ready to take the next step in your
            <span className="text-[#BE4E1E]"> finance career?</span>{" "}
          </h1>
          <p className="text-[14px]  md:text-[16px] md:leading-[44px] xl:text-[20px]">
            Choose MidhaFin&apos;s FRM courses and embark on a journey toward
            success!
          </p>
        </div>

        <div className=" max-w-[1400px]  mx-auto px-[25px] md:px-[50px] flex flex-wrap sm:flex-nowrap items-center justify-center gap-[30px] md:gap-[60px] xl:gap-[81px]">
        <Link href='/part-1' className="group rounded-[16px]   w-[100%] md:w-[38.56%] max-w-[300px] md:max-w-[500px] aspect-[3/2.64]  mx-auto md:mx-0 shadow-[0px_4px_4px_0px_#0000001F]"> 
        <div className="overflow-hidden">
        <Image
                src="/Part-1x.png"
                width={500}
                height={440}
                className="w-[100%] rounded-t-2xl group-hover:scale-110 transition-all duration-500"
                alt='Part-1'
                quality={100}
                priority={true}
              />
        </div>
              
              <div className="">
              <Image
               src="/Part-1y.svg"
               width={500}
               height={163}
               priority={true}
               className="bg-[#FFFDF6]"
               alt="Part-1y"
              />
              </div>
          </Link>
          {/* hover:shadow-[0px_0px_15px_1px_#ED9C7A] */}
          <Link href='/part-2' className="rounded-[12px] group bg-[#FAF7ED] w-[100%] md:w-[38.56%] max-w-[300px] md:max-w-[500px] aspect-[3/2.64] mx-auto md:mx-0 shadow-[0px_4px_4px_0px_#0000001F] "> 
             <div className="overflow-hidden">
             <Image
                src="/Part-2x.png"
                width={500}
                height={440}
                className="w-[100%] rounded-t-2xl group-hover:scale-110 transition-all duration-500"
                alt="Part-2"
                quality={100}
                priority={true}
              />
             </div>
             
              <div className="">
              <Image
               src="/Part-2y.svg"
               width={500}
               height={163}
               priority={true}
               alt="Part-2y"
              />
              </div>
         </Link>
         
        </div>
      </div>
      
      <div className=" bg-[#F9F9F9F5] mt-[40px] md:mt-[47px] lg:mt-[80px] xl:mt-[125px]">
        <div className=" md:flex   max-w-[1300px] px-[25px] lg:px-[50px] justify-between mx-auto pt-[5.5%] pb-[5%]">
          <div className=" md:max-w-[700px] md:w-[50%] lg:w-[55%] mg:pl-[35px] pl-[25px]">
            <h1 className="sm:mb-[8px] mb-[6px] md:mb-[20px] xl:mb-[44px] mx-auto text-center md:text-left xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[24px] text-[20px] text-[#6A1C1A] font-bold">
              Recent performance{" "}
              <span className="text-[#BE4E1E]">highlights</span>
            </h1>
            <p className="md:mx-0 mx-auto lg:leading-[40px] sm:leading-[24px] max-w-[500px] md:max-w-[580px] leading-[22px] text-center  md:text-left  xl:text-[20px] md:text-[16px] text-[14px] mb-[30px]">
              Through strategy, hardwork, and planning, we have achieved the
              success rate which stands second to none!
            </p>
          </div>
          <div className=" w-[43%] mx-auto min-w-[260px] ">
            <CounterUpPage />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] 2xl:px-0  mx-auto mb-5 ">
        <h1 className="text-center  px-[25px] mg:px-[50px]  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-bold text-[#6A1C1A] mt-[37px] mg:mt-[45px] lg:mt-[91px] ">
          What sets us <span className="text-[#BE4E1E]">apart ?</span>
        </h1>
        <div className="mg:flex   max-w-[1400px] px-[25px] md:px-[50px]  justify-between ">
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]  pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[80px] mg:mt-[100px] relative">
            <Image
              className="w-[80px]  sm:w-[90px] mg:w-[100px] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/hc.png"
              alt="Highly Customized"
              width={100}
              height={100}
            />
            <h1 className="text-[14px] md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold text-left pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              Highly Customized
            </h1>
            <ul className="list-disc  text-[14px] md:text-[16px] xl:text-[18px]  mt-1 pb-2  leading-[20px] md:leading-[25px] lg:leading-[35px] ">
              <li>Access to 1-to-1 Doubt Session.</li>
              <li>Customized Study Plan meeting.</li>
              <li>
                Frequent “Personalized Meetings” to ensure progress and vital
                feedback.
              </li>
              <li>
                Personalized Mocks Assessments & related advice to improve the
                score.
              </li>
            </ul>
          </div>
          {/* <div className="border-l-[1px] hidden mg:block h-[253px] border-[#EFD374] my-auto mx-5"></div> */}
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]   pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[70px] md:mt-[80px] mg:mt-[100px] relative ">
            <Image
              className="w-[80px]  sm:w-[90px] mg:w-[100] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/qc.png"
              alt="Quality Content"
              width={100}
              height={100}
            />
            <h1 className="text-[14px]  md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              Quality Content
            </h1>

            <ul className="list-disc  text-[14px]  md:text-[16px] xl:text-[18px]  mt-1 pb-2  leading-[20px] md:leading-[25px] lg:leading-[35px] ">
              <li>
                Usage of Graphs, Tables, and charts to illustrate the concept.
              </li>
              <li>Usage of Simple examples to enhance conceptual clarity.</li>
              <li>
                {" "}
                Logical flow of Sequencing of chapters to enhance understanding.
              </li>
              <li>
                Concepts built from Scratch, ease of understanding for
                candidates with no Mathematics/Finance Background.
              </li>
            </ul>
          </div>
          {/* <div className="border-l-[1px] hidden mg:block h-[253px] border-[#EFD374] my-auto mx-5"></div> */}
          <div className="mg:w-[33%] pr-[14px] mg:pr-[17px]   pl-[40px] pb-[32px] bg-[#FAF7ED] rounded-[20px] mt-[70px] md:mt-[80px] mg:mt-[100px] relative  ">
            <Image
              className="w-[80px]  sm:w-[100px] mg:w-[100] mb-[15px] sm:mb-[20px] mg:mb-[26px] absolute -top-[52px] mg:-top-[60px] "
              src="/gr.png"
              alt="GARP Related"
              width={130}
              height={130}
            />
            <h1 className="text-[14px]  md:text-[16px] mg:text-[24px] text-[#9A381D] font-bold pt-[40px] sm:pt-[60px] mg:pt-[70px]">
              GARP Related
            </h1>
            <ul className="list-disc  text-[14px]  md:text-[16px] xl:text-[18px]   pb-2  mt-1 leading-[20px] md:leading-[25px] lg:leading-[35px]">
              
              <li>Resolving and addressing GARP related queries. </li>
              <li>
                {" "}
                Related to exam scheduling, best practices to approach the exam.
              </li>
              <li> Common do&apos;s & don&apos;t, exam Strategy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9F5] mt-[27px] sm:mt-[48px] lg:mt-[84px]">
        <div className="max-w-[1400px] px-[25px] md:px-[50px] mx-auto pt-[21px] sm:pt-[39px] lg:pt-[46px] ">
          <h1 className="text-center  xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] font-semibold text-[#6A1C1A] mb-[20px] sm:mb-[26px] lg:mb-[71px]">
            Where our Students <span className="text-[#BE4E1E]">Work </span>
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  pb-[15px] sm:pb-[31px] md:pb-[91px] lg:grid-cols-8 gap-5">
            {Logos.map((el, ind) => {
              return (
                <Image
                  className=" m-auto "
                  key={ind}
                  src={el}
                  height={100}
                  width={130}
                  alt="Logo"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] lg:px-[50px] px-[25px] mx-auto ">
        <div className=" sm:mt-[46px] mt-[30px] lg:mt-[81px]">
          <h1 className="text-center  text-[24px] md:text-[36px] lg:text-[50px] mb-2 font-bold text-[#6A1C1A]">
            Frequently asked <span className="text-[#BE4E1E]">queries</span>
          </h1>
        </div>
        <Accordion buttonsData={buttonsData} />
      </div>
      <div className=" text-[#F9F2DF] bg-[#F9F9F9]  lg:mt-[61px] sm:mt-[53px] mt-[37px] pt-[32px] md:pt-[46px] lg:pt-[75px]">
          <div className="block sm:hidden sm:w-fit mx-auto text-center  w-[280px] ">
            <h1 className="mb-[9px]  text-[#6A1C1A] font-semibold xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] ">
              Get a <span className="text-[#BE4E1E]">call back</span> from us
            </h1>
            <p className="mb-[20px] min-w-[280px] text-[#50535C] font-medium lg:text-[20px] text-[16px]  sm:mb-[20px] lg:mb-[31px] w-fit ">
              Fill the form and we&apos;ll ensure to get back to you promptly.
            </p>
          </div>
        <div className="max-w-[1400px] lg:px-[50px] px-[25px] flex justify-between flex-wrap-reverse sm:flex-nowrap mx-auto">
          <div className="flex flex-col w-[50%] justify-start   sm:mx-0 mx-auto  relative  xl:max-w-[560px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[280px] max-w-[560px] md:min-w-[400px]">
            <h1 className=" text-[#6A1C1A] font-semibold xl:text-[50px] lg:text-[40px] md:text-[35px] sm:text-[24px] text-[20px] hidden sm:block">
              Get a <span className="text-[#BE4E1E]">call back</span> from us
            </h1>
            <p className="text-[#50535C] font-medium lg:text-[20px] text-[16px]  sm:mb-[20px] lg:mb-[31px] w-fit hidden sm:block">
              Fill the form and we&apos;ll ensure to get back to you promptly.
            </p>
            <Image
              className=" max-w-[284px] w-[50%] min-w-[153px] mx-auto "
              src="/formlogo.svg"
              width={400}
              height={400}
              alt="Logo"
            />
            <Image
              className="mt-[26px] sm:mt-[30px] mx-3 min-w-[178px] w-[100%]  max-w-[320px] sm:absolute  -bottom-[1.5px] right-0 "
              src="/Contact-us.png"
              height={400}
              width={400}
              alt="contact-us"
            />
          </div>
          <div className="min-w-[300px] w-[52%] max-w-[628px]  sm:mx-0 mx-auto">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid grid-cols-1 "
            >
              <input
                type="hidden"
                name="access_key"
                value="e2deee0c-855f-4ae1-a513-eadd701a4eae"
              />
              {/* change value to whatever page you want to redirect after submitting the form */}
              <input
                type="hidden"
                name="redirect"
                value="https://www.midhafin.com/thank-you"
              ></input>
              <input
                type="text"
                name="Name"
                placeholder="Name*"
                className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone Number*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              />
              <textarea
                name="message"
                placeholder="Message*"
                className="w-full h-28 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-[#EBC2B0]"
                required
              ></textarea>
              <div className="  xl:mb-[74px] lg:mb-[64px] md:mb-[54px] mb-[31px] mt-3">
                <button
                  type="submit"
                  className="text-[16px] md:text-[20px] lg:text-[24px] font-bold tracking-wide bg-[#BE4E1E] hover:bg-[#6a1c1a] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Call Me Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
