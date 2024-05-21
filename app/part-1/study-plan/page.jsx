
import Study_plan from '@/components/Part-1/Study_plan'
import React from 'react'

export const metadata = {
    title: 'FRM - Study plan',
    description: 'FRM part-1 study plan weekly wise',
    keywords: "FRM part-1 study plan, study plan frm part-1"
  }

const page = () => {
  return (
    <div>
        <Study_plan/>
    </div>
  )
}

export default page