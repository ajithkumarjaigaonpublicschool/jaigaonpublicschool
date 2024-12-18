import { StandardsSection } from '@/components/academics/StudentsSection'
import Metadata from '@/components/Metadata'
import React from 'react'

const page = () => {
  return (
    <>
      <Metadata title="Academics | Jaigaon Public School" description="We educate students from Nursery to 4th standard"/>
      <div>
        <StandardsSection />
      </div>
    </>
  )
}

export default page