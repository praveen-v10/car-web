import React from "react";
import { heroData } from "./data";
import Header from "./Header";

export default function Hero() {
  const { title, subtitle, image } = heroData;

  return (
    <section className="lg:h-[700px] py-12 max-w-7xl mx-auto">

      <div className=" container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row items-center h-full lg:py-24">
          <div className=" text-center lg:text-left lg:absolute">
            <h1
              className=" text-5xl lg:max-w-[700px] mb-6 lg:mb-12 "
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {title}
            </h1>

            <p
              className="lg:max-w-[380px] pt-10 lg:pt-4 lg:mb-12 text-5xl lg:text-6xl text-center font-PS font-extrabold "
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          </div>

          <div
            className="lg:absolute lg:-right-0 lg:bottom-24 pt-4 lg:pt-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src=" /assets/image/hero_img_1.png"
              className=" h-[400px] lg:h-[450px] "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
