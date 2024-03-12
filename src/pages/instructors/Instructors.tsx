import Footer from '@/layout/footer'
import Navbar from '@/layout/navbar'
import React from 'react'
import InstructorCard from './components/InstructorCard'
import InstructorList from './components/InstructorList'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from '@radix-ui/react-dialog'

function Instructor() {
  return (
    
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
  <h2 className='relative text-white text-[105px] mt-[10rem] text-center' style={{ backgroundImage: `url(/line.svg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center' }}>Our Instructors</h2>
</div>




      <InstructorList />


      <Card className="h-[33rem] w-[80rem] bg-[#343434] rounded-xl flex ml-8 mr-12 border-none mt-12 ">
      <div className="flex">
        <div className="w-[35rem] mt-12">
          <CardContent>
            <Image
              className="mt-12 mb-12 mr-12 ml-12 rounded-lg"
              src={'/coming-soon1.png'}
              width={370}
              height={370}
              alt="Picture of the author"
            />
          </CardContent>
        </div>
        <div className="w-[45rem]">
          <CardHeader className="mt-4">
            <CardTitle className="text-white text-6xl flex mb-4">
              <div className="mr-12">Loyalty & Rewards</div>

            </CardTitle>
            <CardTitle className="text-white text-2xl flex mb-4">
              <div className="mr-12">Coming Soon</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white lg:max-w-[96%] overflow-hidden">
          Learn how to use free gifts, product releases, exclusive discounts, and points to keep those loyalists buying and telling their friends about you.
          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course Coming Soon
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-3xl">
                    Loyalty & Rewards
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-[75px] text-2xl rounded-[10px]">
                    
                    Join the waitlist
                
                  </Button>
                </CardContent>
              </div>
            </Card>
          </CardContent>
        </div>
      </div>
    </Card>

    <Card className="h-[33rem] w-[80rem] bg-[#343434] rounded-xl flex ml-8 mr-12 border-none mt-12 ">
      <div className="flex">
        <div className="w-[35rem] mt-12">
          <CardContent>
            <Image
              className="mt-12 mb-12 mr-12 ml-12 rounded-lg"
              src={'/coming-soon3.png'}
              width={370}
              height={370}
              alt="Picture of the author"
            />
          </CardContent>
        </div>
        <div className="w-[45rem]">
          <CardHeader className="mt-4">
            <CardTitle className="text-white text-6xl flex mb-4">
              <div className="mr-12">Popups & CRO</div>

            </CardTitle>
            <CardTitle className="text-white text-2xl flex mb-4">
              <div className="mr-12">Coming Soon</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white lg:max-w-[96%] overflow-hidden">
          Explore the best tactics for converting web visits into subs.
          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course Coming Soon
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-3xl">
                    Popups & CRO
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-[105px] text-2xl rounded-[10px]">
                    
                    Join the waitlist
                
                  </Button>
                </CardContent>
              </div>
            </Card>
          </CardContent>
        </div>
      </div>
    </Card>


    <Card className="h-[33rem] w-[80rem] bg-[#343434] rounded-xl flex ml-8 mr-12 border-none mt-12 ">
      <div className="flex">
        <div className="w-[35rem] mt-12">
          <CardContent>
            <Image
              className="mt-12 mb-12 mr-12 ml-12 rounded-lg"
              src={'/coming-soon4.png'}
              width={370}
              height={370}
              alt="Picture of the author"
            />
          </CardContent>
        </div>
        <div className="w-[45rem]">
          <CardHeader className="mt-4">
            <CardTitle className="text-white text-6xl flex mb-4">
              <div className="mr-12">SEO</div>

            </CardTitle>
            <CardTitle className="text-white text-2xl flex mb-4">
              <div className="mr-12">Coming Soon</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white lg:max-w-[96%] overflow-hidden">
          Because your website is basically useless if it’s not discoverable by search engines that rhyme with Shoogle.          </CardContent>
          <CardContent className="text-white mt-0 mb-0.23">
            <Card className="h-[7.3rem] w-[40rem] bg-[#00a773] rounded-2xl flex ml-1 mr-1 border-none mt-1 mb-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-white text-sm">
                    Course Coming Soon
                  </CardTitle>
                  <div>
                    <CardTitle className="text-white text-3xl ">
                    SEO
                    </CardTitle>
                  </div>
                </CardHeader>
              </div>
              <div>
                <CardContent>
                  <Button className="text-white mt-12 ml-[185px] text-2xl rounded-[10px]">
                    
                    Join the waitlist
                
                  </Button>
                </CardContent>
              </div>
            </Card>
          </CardContent>
        </div>
      </div>
    </Card>



    <Footer/>
    </div>








  )
  
}

export default Instructor
