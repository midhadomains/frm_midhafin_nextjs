import React from 'react'
import Image from "next/image"
import { FaRegClock, FaLinkedin } from "react-icons/fa6";
import { TbListDetails, TbDevices } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { LuBookOpenCheck, LuPencilLine } from "react-icons/lu";
import { IoIosPricetags } from "react-icons/io";

import Link from 'next/link'


export default function CourseCard({ a, index }) {
  const checkOther = (a) => {
    if (a === "free") {
      return (<div className='flex'>
        <IoIosPricetags className='mt-[7px] mr-1 text-[#842021]' />
        <p className=''>FREE</p>
      </div>)
    }
    else if (a === "custom") {
      return ("Get Quotation")
    }
    else {
      return (<p className="line-through text-[17px] text-[#842021] my-auto mx-0">{a}</p>);
    }
  }
  return (
    <div key={index} className='shadow-2xl m-5 rounded-xl' >
      <div className='md:w-[400px] md:h-[300px] w-[310px] h-[240px]  relative   bg-white  flex-shrink-0 '>
        <Image width={400} height={400} src={a.image} alt="image" className='rounded-xl' />
        <div className='md:h-[70px] h-[50px] md:w-[400px] w-[310px] text-center bg-white  absolute  overflow-hidden  bottom-0 md:hover:h-[230px] hover:h-[200px] px-[15px]  transition-height duration-500 ease-in-out '>
          <div className='flex justify-between my-2 md:mx-1'>
            <h2 className='md:text-[1.5rem] text-[1.3rem] font-[500] tracking-tight md:my-[10px] my-[5px] md:pl-3 pl-1 uppercase border border-[#842021] border-t-0 border-l-4 border-r-0 border-b-0'>By : {a.instructor}</h2>
            <h1 className='md:text-[1.5rem] text-[1.3rem] font-[500] md:my-[10px] my-[5px] flex'>{checkOther(a.other)}</h1>
          </div>
          <ul >
            <li className='flex text-[14px] md:text-[17px] my-1'><FaRegClock className='mt-1 mr-2 '/><p>{a.details[0]}</p></li>
            <li className='flex text-[14px] md:text-[17px] my-1'><TbDevices className='mt-1 mr-2 ' /><p>{a.details[1]}</p></li>
            <li className='flex text-[14px] md:text-[17px] my-1'><PiMedal className='mt-1 mr-2 ' /><p>{a.details[2]}</p></li>
            <li className='flex text-[14px] md:text-[17px] my-1'><LuBookOpenCheck className='mt-1 mr-2 '/><p>{a.details[3]}</p></li>
            <li className='flex text-[14px] md:text-[17px] my-1'><LuPencilLine className='mt-1 mr-2' /><p>{a.details[4]}</p></li>
          </ul>
        </div>
      </div>
      <hr className='border-2 border-[#6A1C1A] w-[90%] mx-auto'/>
      <h1 className='md:w-[350px] w-[310px] text-2xl leading-3 py-3  mx-auto'>&nbsp;&nbsp;&nbsp;<Link href={a.link} className='bg-[#FFFFFF] flex justify-center   '> <TbListDetails className='mr-2 -mt-[7px] text-[#6A1C1A]' />VIEW DETAILS</Link></h1>
    </div >
  )
}

// <div >
//   <div >
//     <a href="#"><Image width={400} height={400} src={a.image} alt="image" /></a>
//   </div>
//   <div className='h-[70px] overflow-hidden hover:h-[200px]'>
//     <div className=''><a href="#">{a.tp}</a></div>
//     <div className='flex justify-between my-2'>
//       <h2 className='text-2xl uppercase '>By : {a.instructor}</h2>
//       <h1 className='text-2xl'>{checkOther(a.other)}</h1>
//     </div>
//     <ul >
//       <li><FaRegClock className='mb-auto mr-2 mt-1 sm:mt-[6px]' /><p>{a.details[0]}</p></li>
//       <li><TbDevices className='mb-auto mr-2 mt-1 sm:mt-[6px]' /><p>{a.details[1]}</p></li>
//       <li><PiMedal className='mb-auto mr-2 mt-1 sm:mt-[6px]' /><p>{a.details[2]}</p></li>
//       <li><LuBookOpenCheck className='mb-auto mr-2 mt-1 sm:mt-[6px]' /><p>{a.details[3]}</p></li>
//       <li><LuPencilLine className='mb-auto mr-2 mt-1  sm:mt-[6px]' /><p>{a.details[4]}</p></li>
//     </ul>
//   </div>
//   <hr className='border-2 border-[#6A1C1A]' />
//   <h1 className='text-2xl leading-3 py-3  ' >&nbsp;&nbsp;&nbsp;<Link href={a.link} className='flex justify-center  '> <TbListDetails className='mr-2 -mt-2' />VIEW DETAILS</Link></h1>
// </div>