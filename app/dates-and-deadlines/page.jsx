import Footer from "@/components/SiteFooter";
import Navbar from "@/components/SiteHeader";
import { FaCircle } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <Navbar />
      <h1 className="bg-[#6A1C1a] text-white text-center text-[20px] sm:text-[70px] py-9 ">
        FRM -<span className="font-semibold"> Exam Dates</span>
      </h1>

      <p className="font-semibold text-[16px] sm:text-[36px] text-center  max-w-[1350px] mx-auto px-[25px] my-9">
        The exam window are provided below:
      </p>

      <div className="bg-[#FFEFCB] py-4">
        <h1 className="font-bold mx-auto max-w-[1350px] text-center  px-[25px] text-[14px] sm:text-[36px]">
          MAY EXAMS
        </h1>
      </div>

      <div>
        <div class="border-l-2 sm:border-l-4  max-w-[700px] mx-auto ml-[70px] md:ml-[220px] lg:ml-[449px]  m-9 ">
          <h1 className="bg-[#EBEBEB]  w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Exam Dates
          </h1>



          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part I - May 11 - 17,2024
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part II - May 18 - 22,2024
          </p>


          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Registration
          </h1>


          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Early - Dec 1,2023 - Jan 31,2024
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Standard - Feb 1 - March 31,2024
          </p>


          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Schedule
          </h1>

          <div className="text-[14px] sm:text-[24px]  flex   -ml-2  sm:-ml-[14px] pt-8 h-1">
            <FaCircle className="my-auto  mr-4 text-[#BE4E1E] flex-shrink-0" />
            <ul className="list-none flex flex-wrap -mt-1 ">
              <li className="pr-2  font-bold">Window to Select an Exam -</li>
              <li>Dec 1,2023  -  April 26,2024</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#FFEFCB] py-4 mt-[97px]">
        <h1 className="font-bold mx-auto max-w-[1350px] text-center  px-[25px] text-[14px] sm:text-[36px]">

          AUGUST EXAMS
        </h1>
      </div>

      <div>
        <div class="border-l-2 sm:border-l-4  max-w-[700px] mx-auto ml-[70px] md:ml-[220px] lg:ml-[449px]  m-9 ">
          <h1 className="bg-[#EBEBEB]  w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Exam Dates
          </h1>


          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part I - August 9 - 10,2024  AM Sessions
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part II - August 9 - 10,2024  PM Sessions
          </p>

          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">

            Registration
          </h1>


          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Early - March 1 - April 30,2024
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Standard - May 1 - June 30,2024
          </p>



          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Schedule
          </h1>


          <div className="text-[14px] sm:text-[24px]  flex   -ml-2  sm:-ml-[14px] pt-8 h-1">
            <FaCircle className="my-auto  mr-4 text-[#BE4E1E] flex-shrink-0" />
            <ul className="list-none flex flex-wrap -mt-1 ">
              <li className="pr-2  font-bold">Window to Select an Exam -</li>
              <li>March 1 -  July 26, 2024</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#FFEFCB] py-4 mt-[97px]">
        <h1 className="font-bold mx-auto max-w-[1350px] text-center  px-[25px] text-[14px] sm:text-[36px]">

          NOVEMBER EXAMS
        </h1>
      </div>

      <div>
        <div class="border-l-2 sm:border-l-4  max-w-[700px] mx-auto ml-[70px] md:ml-[220px] lg:ml-[449px]  m-9 ">
          <h1 className="bg-[#EBEBEB]  w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Exam Dates
          </h1>
          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part I - Nov 9 - 15,2024
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Part II - Nov 16 - 19,2024
          </p>


          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px] text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">


            Registration
          </h1>

          <p className="text-[14px] sm:text-[24px] flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Early - May 1 - July 31,2024
          </p>
          <p className="text-[14px] sm:text-[24px]  flex -ml-2 sm:-ml-[14px] my-4">
            <FaCircle className="my-auto mr-3 text-[#BE4E1E]" />
            Standard - Aug 1 - Sept 30,2024
          </p>


          <h1 className="bg-[#EBEBEB] w-[112px] sm:w-[226px] md:w-[300px]  text-center font-bold py-3 rounded-full text-[14px] sm:text-[24px] md:-ml-[150px] -ml-[60px]">
            Schedule
          </h1>
          <div className="text-[14px] sm:text-[24px]  flex   -ml-2  sm:-ml-[14px] pt-8 h-1">
            <FaCircle className="my-auto  mr-4 text-[#BE4E1E] flex-shrink-0" />
            <ul className="list-none flex flex-wrap -mt-1 ">
              <li className="pr-2  font-bold">Window to Select an Exam -</li>
              <li>May 1 -  Oct 25,2024</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
