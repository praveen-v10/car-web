import React from "react";

function TargetCompany() {
  return (
    <div>
      {/* laptop */}
      <div className="hidden lg:block pt-10">
        <div className="relative">
          <img
            src="/assets/image/target_company.jpg"
            className="h-[500px] w-full object-cover"
            alt="Target Company"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div
              className="bg-white bg-opacity-90 p-6 rounded-lg flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className="text-black text-4xl text-center font-semibold font-PS select-none  ">
                We are ready to collaborate
              </h1>
            </div>

            <div
              className="mx-auto mt-4 p-6 pt-8 w-[700px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <p className=" text-xl text-white font-bold">
                Elevate Your Commute: Exclusive Taxi Partnership for IT
                <br />
                Professionals
              </p>
              <p className="text-white text-lg pt-10">
                Upgrade your daily commute with our dedicated taxi service
                tailored for IT professionals. Enjoy better prices and superior
                service, ensuring a hassle-free journey to and from work. Say
                goodbye to transportation worries and hello to a smoother, more
                efficient way to travel. Join us in enhancing your team&apos;
                commuting experience today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* laptop */}

      {/* mobile */}

      <div className="lg:hidden ">
        <div className="relative">
          <img
            src="/assets/image/target_company.jpg"
            className="h-[500px] w-full object-cover"
            alt="Target Company"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div
              className="bg-white p-6 bg-opacity-90 rounded-lg flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className="text-black text-xl font-bold text-center font-PS select-none  ">
                We are ready to collaborate
              </h1>
            </div>

            <div
              className="mx-auto mt-2 p-6 pt-2 w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <p className=" text-lg text-white font-bold">
                Elevate Your Commute:
                <br /> Exclusive Taxi Partnership for IT Professionals
              </p>
              <p className="text-white pt-4">
                Upgrade your daily commute with our dedicated taxi service
                tailored for IT professionals. Enjoy better prices and superior
                service, ensuring a hassle-free journey to and from work. Say
                goodbye to transportation worries and hello to a smoother, more
                efficient way to travel. Join us in enhancing your team&apos;
                commuting experience today!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
    </div>
  );
}

export default TargetCompany;
