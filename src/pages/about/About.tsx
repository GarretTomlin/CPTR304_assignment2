import Footer from '@/layout/footer'
import Navbar from '@/layout/navbar'
import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';


function About() {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center items-center mt-24">
        <Card className="bg-lime-700 h-[37.8rem] w-[78rem] mt-4 relative border-none">
          <CardHeader className="flex justify-center items-center text-white">
            THE STEP-BY-STEP ECOMMERCE MARKETING COURSE
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center text-white font-extrabold text-6xl mt-20">
            Your fast-pass to hyper-growth
          </CardContent>
          <CardFooter className="mt-auto w-full">
            <div className="image-container">
              <Image
                src="/studentnum.png"
                width={1200}
                height={300}
                alt="Picture of the author"
              />
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <CardFooter className="mt-auto w-full">
          <Image
            src="/stores.png"
            width={1500}
            height={100}
            alt="Picture of the author"
          />
        </CardFooter>
      </div>

      <div className="container">
        <div className="left">
          <h1>About Ecommerce Academy</h1>
        </div>
        <div className="right">
          <h2>Gradually, then all at once:</h2>
          <p>That’s what it feels like when you nail email. You learn slowly, pick up some great tips, then suddenly everything clicks. And as a marketer in the eCommerce space, you’re probably tired of ad platforms charging you your life savings to engage would-be customers online.</p>
          <br />
          <h2>Email is a gem, and we're gonna show you how to get every ounce of value out of it.</h2>
          <p>No ad budget needed. No approvals. ZERO acquisition cost tied to it.</p>
          <p>The key is you have to do it RIGHT - the reward? If done right, it can quickly drive at least 30 to 40% of your monthly revenue.</p>
          <p>We built Ecommerce Academy to give you no-fluff, purely usable education to make email into the powerhouse channel that it is. The fundamentals all the way to the advanced tactics. You’ll walk away with the knowledge to do it and do it effectively.</p>
        </div>
      </div>

      <div className="testimony">
        <div className="testimony-text">
          <h1>What our students say</h1>
          <p>“With the rising cost of advertising, email marketing has been a core revenue generator for our business that we can rely on constantly and consistently at Vitacup. eCom Academy has been instrumental in helping our business grow through email marketing strategy to help our business grow from $0 to $30m in the last 24 months”</p>
          <p>- Brandon Fishman (CEO of Vitacut)</p>
        </div>
        <div className="testimony-image">
        <Image
            src="/studtestimony.png"
            width={1500}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </div>
      
      
      <Footer />
    </div>
  )
}

export default About
