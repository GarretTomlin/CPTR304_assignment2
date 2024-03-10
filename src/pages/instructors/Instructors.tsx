import Footer from '@/layout/footer'
import Navbar from '@/layout/navbar'
import React from 'react'
import InstructorCard from './components/InstructorCard'
import InstructorList from './components/InstructorList'

function Instructor() {
  return (
    <div>
      <Navbar/>
      <InstructorList />
      <Footer/>
    </div>
  )
}

export default Instructor
