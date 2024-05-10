import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
// import carsoul_1 from "../../Assets/Images/Carsoul-1.webp"
import carsoul_2 from "../../Assets/Images/carsoul-2.webp";
import carsoul_3 from "../../Assets/Images/carsoul-3.jpg";
import carsoul_4 from "../../Assets/Images/carsoul-4.webp";
import carsoul_5 from "../../Assets/Images/carsoul-5.webp";
export default function Carsoul() {
  return (
    <>
      <div className="box">
        <TECarousel showControls showIndicators ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={carsoul_5}
                className="block w-full  object-cover object-center"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={carsoul_2}
                className="block w-full  object-center"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={carsoul_3}
                className="block w-full object-cover object-center"
                alt="..."
              />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={carsoul_4}
                className="block w-full   object-center"
                alt="..."
              />
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
    </>
  );
}
