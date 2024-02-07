import React from "react";
import { weOfferData } from "./data";
import Image from "next/image";

export default function WeOffer() {
  const { title, list } = weOfferData;

  return (
    <section className="my-[10px] max-w-7xl mx-auto lg:my-[20px]">
      <div className=" container mx-auto">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <h2 className=" text-4xl mb-6 lg:mb-12 text-gray-950 pb-6">
            Our service to you!
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="/assets/image/we_offer_img_1.png"
              className="h-[120px] lg:h-[200px]"
            />

            <div className="flex items-center justify-center h-[240px] w-[350px] lg:h-[300px] lg:w-[370px] rounded-lg bg-violet-200">
              <div className="text-center">
                <h1 className="text-4xl font-semibold font-PS text-black">
                  Vacation
                </h1>
                <p className="text-gray-700 pt-2 pl-2 pr-2 lg:pt-8">
                  Immerse yourself in a meticulously planned vacation where
                  every detail is tailored to create unforgettable memories.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="flex items-center justify-center h-[240px] w-[350px] lg:h-[300px] lg:w-[370px] rounded-lg bg-red-200">
              <div className="text-center">
                <h1 className="text-4xl font-semibold font-PS text-black">
                  Vacation
                </h1>
                <p className="text-gray-700 pt-2 pl-2 pr-2 lg:pt-8">
                  Immerse yourself in a meticulously planned vacation where
                  every detail is tailored to create unforgettable memories.
                </p>
              </div>
            </div>
            <img
              src="/assets/image/we_offer_img_2.png"
              className=" h-[120px] lg:h-[200px]"
            />
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="/assets/image/we_offer_img_3.png"
              className=" h-[180px] lg:h-[320px]"
            />

            <div className="flex items-center justify-center h-[240px] w-[350px] lg:h-[300px] lg:w-[370px] rounded-lg bg-cyan-200">
              <div className="text-center">
                <h1 className="text-4xl font-semibold font-PS text-black">
                  Vacation
                </h1>
                <p className="text-gray-700 pt-2 pl-2 pr-2 lg:pt-8">
                  Immerse yourself in a meticulously planned vacation where
                  every detail is tailored to create unforgettable memories.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="flex items-center justify-center h-[240px] w-[350px] lg:h-[300px] lg:w-[370px] rounded-lg bg-green-200">
              <div className="text-center">
                <h1 className="text-4xl font-semibold font-PS text-black">
                  Vacation
                </h1>
                <p className="text-gray-700 pt-2 pl-2 pr-2 lg:pt-8">
                  Immerse yourself in a meticulously planned vacation where
                  every detail is tailored to create unforgettable memories.
                </p>
              </div>
            </div>
            <img
              src="/assets/image/we_offer_img_4.png"
              className="h-[120px] lg:h-[200px]"
            />
          </div>
        </div>

<div className="flex justify-center"  data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true">
<div className="flex justify-center items-center h-[300px] w-[450px] bg-amber-100 rounded-lg pt-4 mt-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold font-PS text-black">
              Journey to your preferences
            </h1>
            <p className="text-gray-700 pt-10 pl-4 pr-4">
              Take a trip into what you like and enjoy! Explore your favorite
              things and discover what makes you, you. It&apos;s a fun adventure
              into your own tastes and preferences, like unraveling the story of
              what makes you unique.
            </p>
          </div>
        </div>
</div>
    
      </div>
    </section>
  );
}

// import React from "react";
// import { weOfferData } from "../data";
// import Image from "next/image";

// export default function WeOffer() {
//   const { title, list } = weOfferData;

//   return (
//     <section className="my-[70px] max-w-7xl mx-auto lg:my-[150px]">
//       <div className=" container mx-auto">
//         <div className="text-center">
//           <h2 className=" text-4xl mb-6 lg:mb-12">{title}</h2>
//         </div>

//         <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
//           {list.map((weOffer, index) => {
//             const { image, bgImage, title, description, delay } = weOffer;
//             return (
//               <div className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center lg:flex-row lg:justify-start mx-auto" key={index}>
//                 <div className="hidden lg:flex absolute top-0 right-0 z-20">
//                     <Image src={bgImage}  alt=""  />
//                     </div>

//                 <div className="max-w-[120px] lg:mr-7 lg:max-w-[230px] z-20">
//                 <Image src={image}  alt=""/>
//                     </div>

//                 <div> text </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
