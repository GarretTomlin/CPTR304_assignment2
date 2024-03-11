import Navbar from '@/layout/navbar';
import * as React from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import dipImage from './pages/courses/ImgsC/diploma_g2.jpeg';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function scrollToBottom() {
  const element = document.getElementById('coursefooter');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
function handleViewDetailsClick() {
  alert("View Details button clicked!");
}
export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export function AccordionDemo2() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
const ThreeColumnLayout: React.FC = () => {
  return (
    <div className="container3">
      {/* Left Column */}
      <div className="left-column">
        <h2 className='font-bold'>Commitment:</h2>
        <p>2 Sessions<br/>3 hours per Week</p>
      </div>
      <div className="vertical-line"></div>
      {/* Middle Column */}
      <div className="middle-column">
        <h2 className='font-bold'>Formats:</h2>
        <p>Online, Instructor-led, and <br/>Self paced options</p>
      </div>
      <div className="vertical-line"></div>
      {/* Right Column */}
      <div className="right-column">
        <h2 className='font-bold'>Outcome:</h2>
        <p>EA Diploma</p>
      </div>
    </div>
  );
};
const TwoColumnLayout2: React.FC = () => {
  return (
    <div className="container3">
      {/* Left Column */}
      <div className="left-column">
        <h2 className='font-bold'>Commitment:</h2>
        <p>2 Sessions<br/>3 hours per Week</p>
      </div>
      {/* Right Column */}
      <div className="right-column">
      <img src={dipImage} alt="Example" />
      </div>
    </div>
  );
};
const FiveColumnLayout: React.FC = () => {
  return (
    <div className="container">
      {/* Outer-Left Column */}
      <div className="outerleft-column">
        <h2>Outer-Left Column</h2>
        <p>This is the content of the outer-left column.</p>
      </div>
      {/* Left Column */}
      <div className="left-column">
        <h2>Left Column</h2>
        <p>This is the content of the left column.</p>
      </div>
      {/* Middle Column */}
      <div className="middle-column">
        <h2>Middle Column</h2>
        <p>This is the content of the middle column.</p>
      </div>
      {/* Right Column */}
      <div className="right-column">
        <h2>Right Column</h2>
        <p>This is the content of the right column.</p>
      </div>
      {/* Outer-Right Column */}
      <div className="outerright-column">
        <h2>Outer-Left Column</h2>
        <p>This is the content of the outer-right column.</p>
      </div>
    </div>
  );
};
const TwoColumnLayout: React.FC = () => {
  return (
    <div className="container2">
      {/* Left Column */}
      <div className="left-column">
        <AccordionDemo />
      </div>
      {/* Right Column */}
      <div className="right-column">
      <AccordionDemo2 />
      </div>
    </div>
  );
};

function course() {
  return (
    <div>
      <Navbar />
      <div className="top_sec_1">
        <span className='top_sec_1_name'>
          <p>Professional Diplomas with</p>
          <p>Ecommerce Academy</p>
            <hr className="horizontal-line" />
        </span>
        <span className='top_sec_1_para'>
          <p style={{ marginTop: '50px' }}>At Ecommerce Academy, we empower learners to expand their knowledge of the concepts, skills</p>
          <br/>
          <p>and techniques through expertly crafted courses designed to foster growth, development, and</p>
          <br/>
          <p>confidence.</p>
          </span>
          <ul className='top_sec_1_buttons'>
            <li><Button onClick={scrollToBottom} size={"lg"} className="bg-lime-700">Enroll</Button></li>
            <Link href='/about/About'>
            <li><Button size={"lg"} className="bg-lime-700" >Learn More...</Button></li>
            </Link>
          </ul>
          <hr className="horizontal-line" />
      </div>
      <div className="mid_sec_1">
        <br/>
        <ThreeColumnLayout />
        <h1>Stand Out With Our Univeristy Rated Certification</h1>
        <br/>
        <TwoColumnLayout2 />
        <br/>
        <FiveColumnLayout />
        <br/>
        <h1 className='TwoColumnLayouttext'>Still Having Questions?</h1>
        <TwoColumnLayout />
        <hr className="horizontal-line" />
      </div>
      <div className="bottom_sec_1">
        <CourseCarousel />
      </div>
      <footer id="coursefooter"></footer>
    </div>
  );
}

export function CourseCarousel() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleViewDetailsClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
    <Carousel opts={{align: "start",}} className="w-full max-w-sm">
      <CarouselContent>
          <CarouselItem className="w-1/3 px-2">
            <div className="p-1">
            <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className='cardtitlec'>Introduction to</CardTitle>
                  <CardTitle className='cardtitlec'>E-commerce</CardTitle>
                  <CardDescription>The fundamentals of e-commerce, exploring topics such as online marketplaces, payment gateways, and digital marketing strategies.</CardDescription>
                  <hr className="horizontal-line2"/>
                </CardHeader>
                <CardContent>
                  <h1>Next Cohort: March 15, 2024</h1>
                  <br/>
                  <h1>Duration: 8 weeks</h1>
                  <h1>Instructor: John Smith</h1>
                  <h1>Format: Online, Self-Paced</h1>
                  <h1>Full Payment:$399.99</h1>
                </CardContent>
                <CardFooter>
                  <Button className='viewDetails' onClick={handleViewDetailsClick}>View Details...</Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="w-1/3 px-2">
          <div className="p-2">
          <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className='cardtitlec'>E-commerce Website Development</CardTitle>
                <CardDescription>Learn how to build and design effective e-commerce websites.</CardDescription>
                <hr className="horizontal-line2"/>
                </CardHeader>
                <CardContent>
                  <h1>Next Cohort: April 1, 2024</h1>
                  <br/>
                  <h1>Duration: 10 weeks</h1>
                  <h1>Instructor: Sarah Lee</h1>
                  <h1>Format: Instructer-Led, Virtual Classroom</h1>
                  <h1>Full Payment: $449.99</h1>
                </CardContent>
                <CardFooter>
                  <Button className='viewDetails' onClick={handleViewDetailsClick}>View Details...</Button>
                </CardFooter>
              </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="w-1/3 px-2">
          <div className="p-3">
          <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className='cardtitlec'>Marketing for</CardTitle>
                <CardTitle className='cardtitlec'>E-commerce</CardTitle>
                <CardDescription>Master the art of digital marketing for e-commerce businesses, covering social media advertising, email marketing campaigns, and search engine optimization.</CardDescription>
                <hr className="horizontal-line2"/>
                </CardHeader>
                <CardContent>
                  <h1>Next Cohort: March 1, 2024</h1>
                  <br/>
                  <h1>Duration: 6 weeks</h1>
                  <h1>Instructor: Sarah Lee</h1>
                  <h1>Format: Blended learning, combination of online and in-person sessions</h1>
                  <h1>Full Payment: $449.99</h1>
                </CardContent>
                <CardFooter>
                  <Button className='viewDetails' onClick={handleViewDetailsClick}>View Details...</Button>
                </CardFooter>
              </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="w-1/3 px-2">
          <div className="p-4">
          <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className='cardtitlec'>E-commerce Analytics and Data Science</CardTitle>
                <CardDescription>Learn how to analyze customer behavior, optimize sales funnels, and make data-driven decisions for business growth.</CardDescription>
                <hr className="horizontal-line2"/>
                </CardHeader>
                <CardContent>
                  <h1>Next Cohort: April 5, 2024</h1>
                  <br/>
                  <h1>Duration: 12 weeks</h1>
                  <h1>Instructor: Michael Brown</h1>
                  <h1>Format: Online, Interactive Workouts</h1>
                  <h1>Full Payment: $599.99</h1>
                </CardContent>
                <CardFooter>
                  <Button className='viewDetails' onClick={handleViewDetailsClick}>View Details...</Button>
                </CardFooter>
              </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="w-1/3 px-2">
          <div className="p-5">
          <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className='cardtitlec'>E-commerce Entrepreneurship</CardTitle>
                <CardDescription>Learn how to identify market opportunities, create business plans, and launch successful e-commerce ventures.</CardDescription>
                <hr className="horizontal-line2"/>
                </CardHeader>
                <CardContent>
                  <h1>Next Cohort: March 25, 2024</h1>
                  <br/>
                  <h1>Duration: 8 weeks</h1>
                  <h1>Instructor: Jessica Adams</h1>
                  <h1>Format: Hybrid, alternating between online lectures and in-person workshops</h1>
                  <h1>Full Payment: $599.99</h1>
                </CardContent>
                <CardFooter>
                  <Button className='viewDetails' onClick={handleViewDetailsClick}>View Details...</Button>
                </CardFooter>
              </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  
    <AlertDialog open={isDialogOpen}>
  <AlertDialogContent>
  <AlertDialogTitle>Enter Your Information</AlertDialogTitle>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="integer" placeholder="Phone Number" />
    <input type="text" placeholder="Inquires"/>
    <hr className="horizontal-line2"/>
    <h1 className='text-bold'>Need more info?</h1>
    <p>Get in touch and we'll send you over all the information you need, no obligations whatsoever.</p>
    <input type="email" placeholder="Email" />
    <AlertDialogAction onClick={handleCloseDialog}>Submit</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>
</>
)
}
export default course;