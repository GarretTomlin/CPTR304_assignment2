import React from 'react';
import InstructorCard from './InstructorCard';

interface Instructor {
    instructorName: string;
    title: string;
    social: string[];
    badges: string[]; // Assuming badges are part of the instructor's details
    description: string;
    courseprev: string[]; // Assuming courseprev is an array of strings
    imageSrc: string;
    buttonText: string;
}

function InstructorList() {
    const instructors: Instructor[] = [
        {
            instructorName: 'Jimmy Kim',
            title: 'Web Designer',
            social: ['facebook', 'github'],
            badges: ['Beginners', '1.5 hours', 'Certificate of Completion'], // Example badges
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum ',
             // Example description
            courseprev: ['Course 1', 'Course 2'], // Example courses
            imageSrc: '/jimmy.png',
            buttonText: 'Learn More'
        },




        // Add more instructors as needed
    ];

    return (
        <div className='flex flex-col items-center mt-24 space-y-6'>
            {instructors.map((instructor, index) => (
                <InstructorCard key={index} {...instructor} />
            ))}
        </div>
    );
};

export default InstructorList;
