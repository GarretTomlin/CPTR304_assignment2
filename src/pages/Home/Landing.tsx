import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import Navbar from '@/layout/navbar';
import Image from 'next/image';
import CoursePrev from './components/CoursePrev';
import Footer from '@/layout/footer';
import { ChevronRight } from 'lucide-react';
import { Testimony } from './components/Testimony';

function Landing() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center mt-24'>
        <Card className='bg-lime-700 h-[37.8rem] w-[78rem] mt-4 relative border-none'>
          <CardHeader className='flex justify-center items-center text-white'>THE STEP-BY-STEP ECOMMERCE MARKETING COURSE</CardHeader>
          <CardContent className='flex flex-col justify-center items-center text-white font-extrabold text-6xl mt-20'>
            Build a unified growth engine
          </CardContent>
          <CardDescription className='flex justify-center items-center'>
            <Button className='w-32'>Learn More     <ChevronRight className="h-4 w-4" />
            </Button>
          </CardDescription>
          <CardFooter className='mt-auto w-full'>
            <Image
              src="/home-hero.png"
              width={1100}
              height={300}
              alt="Picture of the author"
            />
          </CardFooter>
        </Card>
      </div>
      <CoursePrev />
      {/* <Testimony /> */}
      <Footer />
    </>
  );
}

export default Landing;
