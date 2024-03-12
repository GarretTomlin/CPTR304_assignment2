import Navbar from '@/layout/navbar';
import * as React from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import dipImage from './ImgsC/diploma_g.jpeg'
import dipImage2 from './ImgsC/feedback2.jpeg'
import dipImage1 from './ImgsC/software.jpeg'
import dipImage3 from './ImgsC/mentor.jpeg'
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
export function AccordionDemo1() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What programs does your university offer?</AccordionTrigger>
        <AccordionContent>
        We offer a diverse range of programs spanning our various disciplines. View our courses for detailed information on specific programs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the admission requirements?</AccordionTrigger>
        <AccordionContent>
        Admission requirements vary depending on the program and level of study. Generally, applicants are evaluated based on academic performance, standardized test scores, letters of recommendation, personal statements, and sometimes interviews. 
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Are their available scholarships?</AccordionTrigger>
        <AccordionContent>
        Yes, we offer a variety of scholarships and financial aid options to eligible students. These include merit-based scholarships, need-based grants, athletic scholarships, and more. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I study part-time or online?</AccordionTrigger>
        <AccordionContent>
        We offer part-time and online programs across various disciplines to accommodate different learning preferences and lifestyles.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export function AccordionDemo2() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What support services are available for students?</AccordionTrigger>
        <AccordionContent>
          Yes. Our university provides a range of support services, including academic advising, career counseling, tutoring, mental health resources, disability services, and more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What opportunities are there for student involvement?</AccordionTrigger>
        <AccordionContent>
        There are plenty of opportunities for students to get involved, build leadership skills, and make lasting connections. We encourage students to engage in extracurricular activities from student government to academic clubs, community service initiatives, and cultural organizations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export function AccordionDemo22() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Does your university offer study abroad programs?</AccordionTrigger>
        <AccordionContent>
          Yes, we believe in the importance of global education and offer a variety of study abroad programs in partnership with universities and institutions around the world. Providing students with the opportunity to immerse themselves in different cultures, gain international perspectives, and enhance their academic experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I learn more about the university?</AccordionTrigger>
        <AccordionContent>
        We welcome prospective students and their families to visit our campus and learn more about what our university has to offer. Attend one of our virtual information sessions and feel free to explore our website, connect with us on social media, or reach out to our admissions team with any questions you may have. We're here to help you every step of the way!
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
    <div className="container22">
      {/* Left Column */}
      <div className="left-column22">
        <p>"The accreditation of our university played a pivotal role in<br/>
        shaping my career journey. As I ventured into the realm of UX <br/>
        design, having a university credit rating underscored the legitimacy<br/> 
        and excellence of my qualifications. It signaled to employers that I<br/>
        possessed a distinguished and reputable educational background, <br/>
        setting me apart from candidates who had merely completed online <br/>
        courses. This distinction has been instrumental in establishing my <br/>
        credibility and advancing my career."</p>
        <p className='font-bold'><br/>Sabrina Wintell<br/>Senior EA Consultant</p>
      </div>
      {/* Right Column */}
      <div className="right-column">
      <img className='dipimg' src={dipImage.src} alt="Example" />
      </div>
    </div>
  );
};
const TwoColumnLayout_2: React.FC = () => {
  return (
    <div className="container22">
      {/* Left Column */}
      <div className="left-column">
        <h1>Test</h1>
      </div>
      {/* Right Column */}
      <div className="right-column">
      <h1>Test</h1>
      </div>
    </div>
  );
};

const FiveColumnLayout: React.FC = () => {
  return (
    <div className="container">
      {/* Outer-Left Column */}
      <div className="outerleft-column">
      <img className="trip_Img"  src={dipImage1.src} alt="Example" />
      <br/>
      <hr className="horizontal-line2"/>
        <h2 className='cardtitlec'>Professional Software and Tools</h2>
        <p>This is the content of the outer-left column.</p>
      </div>
      {/* Left Column */}
      <div className="left-column">
      <img className="trip_Img"  src={dipImage2.src} alt="Example" />
      <br/>
      <hr className="horizontal-line2"/>
        <h2 className='cardtitlec'>24 Hour Feedback</h2>
        <br/>
        <p>This is the content of the left column.</p>
      </div>
      {/* Middle Column */}
      <div className="middle-column">
      <img className="trip_Img" src={dipImage3.src} alt="Example" />
      <br/>
      <hr className="horizontal-line2"/>
        <h2 className='cardtitlec'>Guidance, Mentorship,<br/>and Community</h2>
        <p>This is the content of the middle column.</p>
      </div>
      <div className="vertical-line"></div>
      {/* Right Column */}
      <div className="right-column">
        <div className='font-bold'>
        <h2 className='cardtitlec'>Who Can Apply</h2>
        </div>
        <hr className="horizontal-line2"/><br/>
        <ul className='litest'>
          <li>Highschool Graduates or equivalent</li>
          <li>University Graduates, 17-30 years old(All degrees accepted)</li>
          <li>Minimum GPA of 3.0</li>
          <li>Application Deadline: April 8, 2024</li>
          <ul className='top_sec_1_buttons'>
            <li><Button onClick={scrollToBottom} size={"lg"} className="bg-lime-700">Enroll</Button></li><br/>
            <Link href='ContactPage'>
            <li><Button size={"lg"} className="bg-lime-700" >Contact Us</Button></li>
            </Link>
          </ul>
        </ul>
      </div>
      {/* Outer-Right Column */}
      <div className="outerright-column">
      <div className='font-bold'>
        <h2 className='cardtitlec'>Benefits</h2>
      </div>
        <hr className="horizontal-line2"/><br/>
        <ul className='litest'>
          <li>Paid Internship</li>
          <li>Real-world Experience</li>
          <li>Industry Exposure</li>
          <li>Skill Development</li>
          <li>Networking Opportunities</li>
        </ul>
      </div>
    </div>
  );
};
const TwoColumnLayout: React.FC = () => {
  return (
    <div className="container2">
      {/* ORight Column */}
      <div className="outerleft-column">
      <AccordionDemo1 />
      </div>
      {/* Left Column */}
      <div className="left-column">
        <AccordionDemo />
      </div>
      {/* Right Column */}
      <div className="right-column">
      <AccordionDemo2 />
      </div>
      {/* ORight Column */}
      <div className="outerright-column">
      <AccordionDemo22 />
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
        <h1 className="mid_header">Stand Out With Our Univeristy-Rated Certification</h1>
        <br/>
        <ThreeColumnLayout />
        <br/>
        <TwoColumnLayout2 />
        <div>
          <h1 className='TwoColumnLayouttext'>Cohorts Starting From:</h1>
          <h1 className='TwoColumnLayouttext'>March 1, 2024</h1>
          <br/>
          <TwoColumnLayout_2 />
          <h1 className='TwoColumnLayouttext'>Details</h1>
        </div>
        <br/>
        <ul>
          <li><h1 className='left5text'>How Our Courses Work</h1></li>
          <li><h1 className='right5text'>Applications</h1></li>
        </ul>
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