import React from 'react'
import dynamic from 'next/dynamic';

const PostList = dynamic(() => import('../../components/blog/PostList'), {
  ssr: false,
});
export const metadata = {
  title: "Study Material",
};

export default function page() {
  return (
    <div>
      <div className="bg-Reviewsbg tracking-wide max-h-[270px] ">
        <div className='max-w-[1200px] px-[20px] md:px-[50px] mx-auto py-[50px]'>
          <h1 className='text-[#6A1C1A] text-[50px] font-semibold '>FRM <span className='text-[#BE4E1E] '>Study Material</span> </h1>
          <p className='text-[#2D303B] max-w-[800px] text-[20px] mt-3 leading-[32px] '>Unlock the power of knowledge with our comprehensive educational resources tailored to your learning journey.</p>
        </div>
      </div>
        <PostList />
    </div>
  )
}