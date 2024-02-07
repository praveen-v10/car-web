import React from "react";

function WhyChooseUs() {
  return (
    <div>
      {/* laptop start*/}
      <div className=" hidden lg:block max-w-7xl mx-auto pt-10">
        <h1
          className=" text-6xl text-black text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Our Benefits
        </h1>

        <div className="grid grid-cols-3 gap-[50px] pt-24">
          <div className="space-y-4">
            <div
              className="h-[200px] w-[300px] flex justify-center items-center border-2 rounded-lg border-cyan-400 hover:bg-cyan-200 hover:border-none"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className=" text-center text-4xl font-PS font-bold text-black">
                Best Customer Service
              </h1>
            </div>
            <div
              className="h-[200px] w-[300px] flex justify-center items-center border-2 rounded-lg border-cyan-400 hover:bg-cyan-200 hover:border-none"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className=" text-center text-4xl font-PS font-bold text-black">
                Best Customer Service
              </h1>
            </div>
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <img
              src="/assets/image/benefits.png"
              className="h-[380px] rotate-12"
            />
          </div>

          <div className="space-y-4">
            <div
              className="h-[200px] w-[300px] flex justify-center items-center border-2 rounded-lg border-cyan-400 hover:bg-cyan-200 hover:border-none"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className=" text-center text-4xl font-PS font-bold text-black">
                Best Customer Service
              </h1>
            </div>
            <div
              className="h-[200px] w-[300px] flex justify-center items-center border-2 rounded-lg border-cyan-400 hover:bg-cyan-200 hover:border-none"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className=" text-center text-4xl font-PS font-bold text-black">
                Best Customer Service
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* laptop end*/}

      {/* mobile start */}

      <div className="lg:hidden max-w-7xl mx-auto pt-10">
        <div className="pt-2">
          <h1
            className="text-4xl text-black text-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Our Benefits
          </h1>
        </div>

        <div
          className="pt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h1 className="text-2xl text-black font-PS font-bold">
            Safety Features
          </h1>

          <div className="flex justify-center items-center">
            <img src="/assets/image/benefits_mob_1.png" className="h-[200px]" />
          </div>

          <p className="text-black font-normal text-sm p-6">
            Highlight advanced safety features in your vehicles, such as
            collision avoidance systems, lane departure warnings, and adaptive
            cruise control, ensuring a safe and comfortable journey for your
            customers.
          </p>
        </div>

        <div
          className="pt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h1 className="text-2xl text-black font-PS font-bold">
            Safety Features
          </h1>

          <div className="flex justify-center items-center">
            <img src="/assets/image/benefits_mob_1.png" className="h-[200px]" />
          </div>

          <p className="text-black font-normal text-sm p-6">
            Highlight advanced safety features in your vehicles, such as
            collision avoidance systems, lane departure warnings, and adaptive
            cruise control, ensuring a safe and comfortable journey for your
            customers.
          </p>
        </div>

        <div
          className="pt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h1 className="text-2xl text-black font-PS font-bold">
            Safety Features
          </h1>

          <div className="flex justify-center items-center">
            <img src="/assets/image/benefits_mob_1.png" className="h-[200px]" />
          </div>

          <p className="text-black font-normal text-sm p-6">
            Highlight advanced safety features in your vehicles, such as
            collision avoidance systems, lane departure warnings, and adaptive
            cruise control, ensuring a safe and comfortable journey for your
            customers.
          </p>
        </div>

        <div
          className="pt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h1 className="text-2xl text-black font-PS font-bold">
            Safety Features
          </h1>

          <div className="flex justify-center items-center">
            <img src="/assets/image/benefits_mob_1.png" className="h-[200px]" />
          </div>

          <p className="text-black font-normal text-sm p-6">
            Highlight advanced safety features in your vehicles, such as
            collision avoidance systems, lane departure warnings, and adaptive
            cruise control, ensuring a safe and comfortable journey for your
            customers.
          </p>
        </div>

        
      </div>
      {/* mobile end */}
    </div>
  );
}
export default WhyChooseUs;
