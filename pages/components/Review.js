import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
// import required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

function Review() {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <div>
      <div className="pt-10">
        <div className=" hidden lg:block bg-violet-200 pt-10 pb-10">
          <div className="max-w-5xl mx-auto pt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}

              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[500px] bg-white shadow-lg rounded-lg relative">
                  {/* Add relative positioning */}
                  <div className="flex justify-evenly p-4">
                    <img
                      src="/assets/logo/quote_1.png"
                      className="h-[30px] object-left-top"
                    />

                    <div>
                      <h1 className="text-gray-600 text-base p-4">
                        The XYZ Smartwatch is a sleek and stylish wearable
                        device that seamlessly integrates into your daily life.
                        With its advanced features and intuitive interface,
                        it&apos;s more than just a timepiece; it&apos;s a
                        personal assistant on your wrist.
                      </h1>
                    </div>

                    <img
                      src="/assets/logo/quote_2.png"
                      className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* mobile start */}

      <div className="pt-10">
        <div className=" lg:hidden bg-violet-200 pt-10 pb-10">
          <div className=" max-w-5xl mx-auto pt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}

              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[350px] bg-white shadow-lg rounded-lg relative">
                    {/* Add relative positioning */}
                    <div className="flex justify-evenly p-4">
                      <img
                        src="/assets/logo/quote_1.png"
                        className="h-[30px] object-left-top"
                      />

                      <div>
                        <h1 className="text-gray-600 text-base p-4">
                          The XYZ Smartwatch is a sleek and stylish wearable
                          device that seamlessly integrates into your daily
                          life. With its advanced features and intuitive
                          interface, it&apos;s more than just a timepiece;
                          it&apos;s a personal assistant on your wrist.
                        </h1>
                      </div>

                      <img
                        src="/assets/logo/quote_2.png"
                        className="h-[30px] object-right-bottom absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden border-[3px] border-purple-300">
                      <img
                        className="rounded-full h-[100px] w-[100px]"
                        src="/assets/logo/person.jpg"
                        alt="Your img"
                      />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-black text-xl font-PS font-semibold">
                        Jennifer
                      </h1>
                      <p className="text-gray-600 text-base">Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* {/mobile end} */}
    </div>
  );
}

export default Review;
