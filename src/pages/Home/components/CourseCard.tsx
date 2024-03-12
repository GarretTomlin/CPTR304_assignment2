import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  badges: string[];
  buttonText: string;
  imageSrc: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, badges, buttonText, imageSrc }) => {
  return (
    <Card className='h-52 w-[70rem] bg-[#343434] flex items-center border-none'>
      <CardContent>
        <Image src={imageSrc} width={198} height={198} alt="Picture of the author" className='mt-6' />
      </CardContent>
      <div className="flex flex-col justify-between w-full">
        <div>
          <CardTitle className='text-white ml-6'>{title}</CardTitle>
          <CardDescription className='text-white ml-6 mt-2'>{description}</CardDescription>
          <div className="flex mt-4 ml-6">
            {badges.map((badge, index) => (
              <Badge key={index} variant="outline" className='text-white mr-1'>
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <CardFooter className='mt-6'>
          <Button className='w-full bg-lime-600 hover:bg-lime-900'>{buttonText}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CourseCard;
