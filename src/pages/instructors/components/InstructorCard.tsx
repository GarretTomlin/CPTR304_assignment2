import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface InstructorCardProps {
  instructorName: string;
  title: string;
  social: string[];
  description: string;
  courseprev: string[];
  imageSrc: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  instructorName,
  title,
  social,
  description,
  courseprev,
  imageSrc,
}) => {
  return (
    <Card className="h-[50rem] w-[80rem] bg-[#343434] rounded-xl flex ml-12 mr-12 border-none mt-12">
      <div className="flex">
        <div className="w-[35rem] mt-12">
          <CardContent>
            <Image
              className="mt-12 mb-12 mr-12 ml-12"
              src={imageSrc}
              width={370}
              height={370}
              alt="Picture of the author"
            />
          </CardContent>
        </div>
        <div className="w-[45rem]">
          <CardHeader className="mt-4">
            <CardTitle className="text-white text-6xl flex mb-4">
              <div className="mr-12">{instructorName}</div>
              <div className="flex mt-4 space-x-6 lg:mt-4">
                <Link href={""}>
                  <Facebook className="text-white" />
                </Link>
                <Link href={""}>
                  <Twitter className="text-white" />
                </Link>
                <Link href={""}>
                  <Instagram className="text-white" />
                </Link>
                <Link href={""}>
                  <Linkedin className="text-white" />
                </Link>
              </div>
            </CardTitle>
            <CardTitle className="text-white text-2xl flex mb-4">
              <div className="mr-12">{title}</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white lg:max-w-[96%] overflow-hidden">
            {description}
          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course available
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-4xl">
                      Email Marketing
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-8 text-2xl rounded-[10px]">
                    
                    Enroll Now 
                  <ArrowRight className="text-white ml-4" />
                
                  </Button>
                </CardContent>
                
              </div>
              
            </Card>

            
          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course Available
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-4xl">
                    SMS Marketing
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-12 text-2xl rounded-[10px]">
                    
                    Enroll Now 
                  <ArrowRight className="text-white ml-4" />
                
                  </Button>
                </CardContent>
                
              </div>
              
            </Card>

            
          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course Available
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-4xl">
                    Reviews
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-[165px] text-2xl rounded-[10px]">
                    
                    Enroll Now 
                  <ArrowRight className="text-white ml-4" />
                
                  </Button>
                </CardContent>
                
              </div>
              
            </Card>

            
          </CardContent>
          

          
          

          
          
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;
