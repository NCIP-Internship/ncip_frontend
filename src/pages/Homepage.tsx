import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

import Streamlined from "@/components/Templates/Streamlined";
import Footer from "@/components/Templates/Footer";
import About from "@/components/Templates/About";
import FAQ from "@/components/Templates/FAQ";

const Homepage = () => {
  return (
    <>
      <header className="flex h-screen items-center justify-center">
        <CarouselComponent />
      </header>

      <section>
        <Streamlined />
        <About />
        <FAQ />
        <Footer />
      </section>
    </>
  );
};

const carouselData = [
  {
    imagePath: "/landing-page-assets/carousel/pexels-vincent-tan-1050824 1.png",
    index: 1,
    title: "Protect and Promote",
    subText:
      "The Rights of Indigenous Cultural Communities and Authenticity and Ethnicity as an Indigenous People. (COC)",
    btnLabel: "Apply now",
  },
  {
    imagePath: "/landing-page-assets/carousel/1522 1.png",
    index: 2,
    title: "Join Your Tribe",
    subText: "Register Now to Establish your IPO",
    btnLabel: "Register now",
  },
  {
    imagePath: "/landing-page-assets/carousel/pexels-life-folk-3283193 1.png",
    index: 3,
    title: "Indigenous People Mandatory Representatives (IPMR)",
    subText:
      "Creating a Legislative Agenda in a Partnership with the Community that represent.",
    btnLabel: "Documentation",
  },
];

const CarouselDiv = ({
  imagePath,
  index,
  title,
  subText,
  btnLabel,
}: {
  imagePath: string;
  index: number;
  title: string;
  subText: string;
  btnLabel: string;
}) => {
  return (
    <div
      style={{ backgroundImage: `url('${imagePath}` }}
      className="h-screen bg-cover bg-center"
    >
      <div
        className={
          index === 3
            ? "flex items-center justify-center p-6 h-full"
            : "md:grid flex md:grid-cols-2 p-6 h-full"
        }
      >
        <div className="flex flex-col justify-center items-center h-full ">
          <div className="flex items-center gap-5 my-2 md:my-5">
            <img
              src="/landing-page-assets/image 6.png"
              alt="logo"
              className="w-14 h-14"
            />
            <h3 className=" text-white scroll-m-20 text-base md:text-2xl font-semibold tracking-tight text-center">
              National Commission of Indigenous Peoples
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center my-16 md:my-32">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
              {title}
            </h1>
            <p className="leading-7 max-w-xs [&:not(:first-child)]:mt-6 text-white">
              {subText}
            </p>
            <div className="my-8 flex gap-4">
              <Button variant="outline" className="font-semibold">
                {btnLabel}
              </Button>
              <Button variant="link" className="text-white font-semibold">
                See FAQs'
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const plugin = useRef(Autoplay({ delay: 1700, stopOnInteraction: true }));
  return (
    <Carousel
      className="w-full h-full flex  items-center justify-center"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {carouselData.map((_, index) => (
          <CarouselItem key={index}>
            <CarouselDiv {...carouselData[index]} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-3" />
      <CarouselNext className="absolute right-3" />
    </Carousel>
  );
};

export default Homepage;
