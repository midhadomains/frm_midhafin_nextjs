"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

function Page({ params }) {

  const [data, setData] = useState(null)
  useEffect(() => {
    console.log(params)
    fetch(`http://localhost:8080/modules`)
      .then(res => res.json())
      .then((res) => setData(res)) // Update the data state with fetched data
      .catch(error => console.error("Error fetching data:", error));
  }, [params])

  const getIndex=()=>{
    data.map((el, index) => {
       console.log(el.title)
      if (el.title === params){

        return index
      }
    })
  }
 
    


  return <>
    {
      data ? data.map((el) => {
        < div className='max-w-[1300px] mx-auto sm:mt-5' >
          <div className='w-[100%] flex justify-around -mb-5 sm:-mb-9 px-2 sm:px-2'>
            <div>
              <Image width={200} height={200} src={el.image} alt="frm" />
            </div>
            <div className='p-[2px] lg:p-5 lg:pt-0 sm:mx-5'>
              <h2 className='text-[#BE4E1E] text-[18px] sm:text-[25px] lg:text-[35px]  font-semibold'>Module</h2>
              <h1 className='text-[#BE4E1E] text-[35px]  sm:text-[45px]  md:text-[50px] text-center leading-[35px] sm:leading-[40px] lg:leading-[60px] lg:text-[95px] font-bold'>0{data[0].id}</h1>
            </div>
            <div className=''>
              <h1 className='font-bold text-[20px]  sm:text-[30px]  md:text-[35px] lg:text-[55px] leading-[25px] sm:leading-[55px] m-1 sm:m-0 text-center'>{data[0].title}</h1>
            </div>
          </div>
        </div >
      })
        : <h1>No data</h1>
    }
  </>
}


export default Page;

