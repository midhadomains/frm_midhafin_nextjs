import FeeStructureCard from "@/components/other/FeeStructureCard";
import Link from "next/link";
import React from "react";

export default function page() {
  const data = [
    {
      id:1,
      Title: "NEW CANDIDATE",
      early: {
        registration: "Registration closed April 30",
        enrollment_fee: 400,
        exam_fee: 600,
        total: 1000,
        link: "/",
        closed:true
      },

      standard: {
        registration: "Register by June 30",
        enrollment_fee: 400,
        exam_fee: 800,
        total: 1200,
        link: "/",

        closed:false
      },
        },

    {
      id:2,
      Title: "RETURNING CANDIDATE",
      early: {
        registration: "Registration closed April 30",
        enrollment_fee: 0,
        exam_fee: 600,
        total: 600,
        link: "/",

        closed:true
      },

      standard: {
        registration: "Register by June 30",
        enrollment_fee: 0,
        exam_fee: 800,
        total: 800,
        closed:false,
        link: "/",

      },
    },
  ];

  const data2 = [
    {
      id:3,

      Title: "NEW CANDIDATE",
      early: {
        registration: "Register by July 31",
        enrollment_fee: 400,
        exam_fee: 600,
        total: 1000,
        link: "/",

      },

      standard: {
        registration: "Registration opens August 1",
        enrollment_fee: 400,
        exam_fee: 800,
        total: 1200,
        link: "/",
        closed:true

      },
    },

    {
      id:4,

      Title: "RETURNING CANDIDATE",
      early: {
        registration: "Register by July 31",
        enrollment_fee: 0,
        exam_fee: 600,
        total: 600,
        link: "/",

        closed:false
      },

      standard: {
        registration: "Registration opens August 1",
        enrollment_fee: 0,
        exam_fee: 800,
        total: 800,
        link: "/",

        closed:true

      },

      link: "/",
    },
  ];

  const data3 = [
    {
      id:5,

      Title: "AUG. 9-10, 2024",
      early: {
        registration: "Registration closed April 30",
        enrollment_fee: 0,
        exam_fee: 600,
        total: 600,
        link: "/",

        closed:true
      },

      standard: {
        registration: "Register by June 30",
        enrollment_fee: 0,
        exam_fee: 800,
        total: 800,
        link: "/",

        closed:false
      },

    },

    {
      id:6,

      Title: "NOV. 16-19, 2024",
      early: {
        registration: "Register by July 31",
        enrollment_fee: 0,
        exam_fee: 600,
        link: "/",

        total: 600,
        closed:false
      },

      standard: {
        registration: "Registration open August 1",
        enrollment_fee: 0,
        exam_fee: 800,
        link: "/",

        total: 800,
        closed:true

      },
    },
  ];
  return (
    <div className="  ">
      <div className="bg-[#6A1C1A] sm:h-[169px] h-[90px] py-6 sm:py-12 ">
        <h1 className="text-[24px] sm:text-[50px]  text-white text-center ">
          FRM® <span className="font-bold">Fees and Payments</span>
        </h1>
      </div>

      <div className="px-[20px] md:px-[50px]">
        <h2 className="font-bold text-[22px] sm:text-[32px] text-center mt-8">
          FRM EXAM PART - I
        </h2>
        <h3 className="text-[18px] sm:text-[24px] text-center">
          AUG. 9-10, 2024
        </h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-12 px-[20px] md:px-[50px]">
        {data.map((a, index) => {
          return (
            <>
              <FeeStructureCard key={index} a={a} index={index} />
            </>
          );
        })}
      </div>
      <hr className="my-5 w-[80%] mx-auto" />

      <div className="px-[20px] md:px-[50px] my-5">
        <h3 className="text-[18px] sm:text-[24px] text-center">
          NOV. 9-15, 2024
        </h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-12 px-[20px] md:px-[50px]">
        {data2.map((a ,index) => {
          return (
            <>
              <FeeStructureCard key={index} a={a} index={index} />
            </>
          );
        })}
        <hr className="my-5 w-[80%] mx-auto" />
      </div>
       <div className="bg-[#FAF7ED]">
      <div className="px-[20px] md:px-[50px] my-7">
        <h3 className="text-[18px] sm:text-[32px] font-bold text-center ">
        FRM Exam Part - II
        </h3>
      </div>
      <div className=" flex flex-wrap gap-10 justify-center mt-12 px-[20px] md:px-[50px]">
        {data3.map((a , index) => {
          return (
            <>           
              <FeeStructureCard key={index} a={a} index={index}/>         
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
}
