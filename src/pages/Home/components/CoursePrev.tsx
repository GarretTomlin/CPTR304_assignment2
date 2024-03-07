import React from 'react';
import CourseCard from './CourseCard';

interface Course {
  title: string;
  description: string;
  badges: string[];
  buttonText: string;
  imageSrc: string;
}

function CoursePrev() {
  const courses: Course[] = [
    {
      title: 'SMS Marketing',
      description: 'Learn the fundamentals of SMS marketing to expand your reach and hit shoppers where they are active most.',
      badges: ['Beginners', '1.5 hours', 'Certificate of Completion'],
      buttonText: 'Learn More',
      imageSrc: '/jimmy.png',
    },
    {
        title: 'SMS Marketing',
        description: 'Learn the fundamentals of SMS marketing to expand your reach and hit shoppers where they are active most.',
        badges: ['Beginners', '1.5 hours', 'Certificate of Completion'],
        buttonText: 'Learn More',
        imageSrc: '/jimmy.png',
      },
      {
        title: 'SMS Marketing',
        description: 'Learn the fundamentals of SMS marketing to expand your reach and hit shoppers where they are active most.',
        badges: ['Beginners', '1.5 hours', 'Certificate of Completion'],
        buttonText: 'Learn More',
        imageSrc: '/jimmy.png',
      },
  ];

  return (
    <div className='flex flex-col items-center mt-24 space-y-6'>
      <span className='text-white mb-4  font-bold '>8+ hours worth of golden wisdom nuggets</span>
      <span className='text-bold text-white mb-6 font-extrabold text-4xl'>eCom Academy Course Library</span>
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}

export default CoursePrev;
