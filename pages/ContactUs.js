import Head from "next/head";
import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";

function ContactUs() {
  const openWhatsApp = () => {
    const phoneNumber = "+91 8072875342"; // Replace with the desired phone number
    const baseUrl = "https://api.whatsapp.com/send?phone=";
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const url = `${baseUrl}${encodedPhoneNumber}`;
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const emailId = "praveenjeff3@gmail.com";
    const subject = "Feed Back";
    const emailUrl = `mailto:${emailId}?subject=${encodeURIComponent(subject)}`;

    // Open email in new tab
    window.open(emailUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${"+91 8072875342"}`;
  };

  return (
    <>
      <Head>
        <title>RoamReadyRides | Contact us</title>
      </Head>
      {/* laptop */}
      <div className="hidden lg:block bg-slate-50 ">
        <div className=" max-w-7xl mx-auto pt-20">
          <div
            className=" flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="w-[500px] text-center">
              <h1 className="text-4xl font-bold  text-black pt-20 font-PS">
                Contact Us
              </h1>
              <p className=" text-gray-600 text-xl pt-10">
                Please don&apos;t hesitate to reach out to us for any inquiries
                or assistance. We&apos;re here to help and eager to hear from
                you!
              </p>
            </div>
          </div>

          <div className="flex justify-between p-10 pl-20 pr-20">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              <div
                className="h-[150px] w-[450px] cursor-pointer rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-sky-500 hover:bg-sky-400 hover:border-none items-center justify-between"
                onClick={openEmail}
              >
                <img
                  src="/assets/image/email.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-16 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">E-mail</h1>
                  <p className=" text-base pt-2">praveenjeff3@gmail.com</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              <div
                className="h-[150px] w-[450px] cursor-pointer rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-green-500 hover:bg-green-400 hover:border-none items-center justify-between"
                onClick={openWhatsApp}
              >
                <img
                  src="/assets/image/whatsapp.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-16 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">WhatsApp</h1>
                  <p className=" text-base pt-2">+91 8072875342</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
              <div className="h-[150px] w-[450px] rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-blue-500 hover:bg-blue-400 hover:border-none items-center justify-between">
                <img
                  src="/assets/image/call.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-16 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">Call</h1>
                  <p className=" text-base pt-2">+91 8072875342</p>
                </div>
              </div>
            </div>
          </div>

          {/* social media */}
          <div className=" flex justify-center items-center">
            <div
              className="w-[700px] text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className="text-4xl font-bold  text-black pt-20 font-PS">
                Social Media
              </h1>
              <p className=" text-gray-600 text-xl pt-10">
                Jump in the passenger seat of our social media journey! Follow
                us for exciting car travel updates, stunning scenery, and
                helpful tips. Let&apos;s explore the open road together - hit
                that follow button and let the adventure begin!{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-between p-10 pl-20 pr-20">
            <Link
              href="https://www.linkedin.com/in/pandurangan-m/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="h-[150px] w-[450px] rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-sky-800 hover:bg-sky-600 hover:border-none items-center justify-between">
                <img
                  src="/assets/image/linkedin.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-24 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">
                    Linked In
                  </h1>
                  {/* <p className=" text-base pt-2">praveenjeff3@gmail.com</p> */}
                </div>
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/super_moto_official/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="h-[150px] w-[450px] rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-rose-600 hover:bg-rose-500 hover:border-none items-center justify-between">
                <img
                  src="/assets/image/instagram.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-24 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">
                    Instagram
                  </h1>
                  {/* <p className=" text-base pt-2">+91 8072875342</p> */}
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-between p-10 pl-20 pr-20">
            <Link
              href="https://www.facebook.com/pandu.rangan.562"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="h-[150px] w-[450px] rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-blue-700 hover:bg-blue-600 hover:border-none items-center justify-between">
                <img
                  src="/assets/image/facebook.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-28 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">Facebook</h1>
                  {/* <p className=" text-base pt-2">praveenjeff3@gmail.com</p> */}
                </div>
              </div>
            </Link>

            <Link
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="h-[150px] w-[450px] rounded-lg border-2 flex text-black hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-50 border-cyan-600 hover:bg-cyan-500 hover:border-none items-center justify-between">
                <img
                  src="/assets/image/twitter.jpeg"
                  className="h-full rounded-lg object-cover"
                  alt="Email Icon"
                />
                <div className="pr-28 text-center">
                  <h1 className=" text-2xl  font-semibold font-PS">Twitter</h1>
                  {/* <p className=" text-base pt-2">+91 8072875342</p> */}
                </div>
              </div>
            </Link>
          </div>

          {/* social media */}
        </div>
      </div>
      {/* laptop */}

      {/* mobile */}

      <div className="lg:hidden">
        <div className=" bg-slate-50 overflow-hidden">
          <div className=" max-w-5xl mx-auto pt-20">
            <div
              className=" flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="w-[300px] text-center">
                <h1 className="text-4xl font-bold  text-black pt-10 font-PS">
                  Contact Us
                </h1>
                <p className=" text-gray-600 text-base pt-4">
                  Please don&apos;t hesitate to reach out to us for any
                  inquiries or assistance. We&apos;re here to help and eager to
                  hear from you!
                </p>
              </div>
            </div>

            <div className="flex justify-between p-2 md:pl-[150px] md:pr-[150px] overflow-hidden pt-6">
              <div
                className="h-[300px] w-[180px] bg-sky-500 border-2  rounded-lg"
                onClick={openEmail}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div>
                  <img
                    src="/assets/image/email.jpeg"
                    className="h-[200px] rounded-lg object-cover"
                    alt="Email Icon"
                  />
                </div>
                <div className="h-[100px] flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-white font-PS text-xl font-semibold">
                      E-mail
                    </h1>
                    <p className="text-yellow-50 text-sm pt-2">
                      praveenjeff3@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="h-[300px] w-[180px] bg-green-500 border-2  rounded-lg"
                onClick={openWhatsApp}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div>
                  <img
                    src="/assets/image/whatsapp.jpeg"
                    className="h-[200px] rounded-lg object-cover"
                    alt="Email Icon"
                  />
                </div>
                <div className="h-[100px] flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-white font-PS text-xl font-semibold">
                      Whats App
                    </h1>
                    <p className="text-yellow-50 text-sm pt-2">
                      +91 8072875342
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div
                className="h-[300px] w-[180px] bg-blue-500 border-2  rounded-lg"
                onClick={handleCallClick}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div>
                  <img
                    src="/assets/image/call.jpeg"
                    className="h-[200px] rounded-lg object-cover"
                    alt="Email Icon"
                  />
                </div>
                <div className="h-[100px] flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-white font-PS text-xl font-semibold">
                      Call
                    </h1>
                    <p className="text-yellow-50 text-sm pt-2">
                      +91 8072875342
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* social media */}
            <div className=" flex justify-center items-center">
              <div
                className="w-[600px] text-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <h1 className="text-4xl font-bold  text-black pt-20 font-PS">
                  Social Media
                </h1>
                <p className=" text-gray-600 text-base p-4 pt-4">
                  Jump in the passenger seat of our social media journey! Follow
                  us for exciting car travel updates, stunning scenery, and
                  helpful tips. Let&apos;s explore the open road together - hit
                  that follow button and let the adventure begin!{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-between p-2 md:pl-[150px] md:pr-[150px] pt-10">
              <Link
                href="https://www.linkedin.com/in/pandurangan-m/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="h-[300px] w-[180px] bg-sky-500 border-2  rounded-lg">
                  <div>
                    <img
                      src="/assets/image/linkedin.jpeg"
                      className="h-[200px] rounded-lg object-cover"
                      alt="Email Icon"
                    />
                  </div>
                  <div className="h-[100px] flex justify-center items-center">
                    <div className="text-center">
                      <h1 className="text-white font-PS text-xl font-semibold">
                        Linked In
                      </h1>
                      {/* <p className="text-yellow-50 text-sm pt-2">
                      +91 8072875342
                    </p> */}
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/super_moto_official/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="h-[300px] w-[180px] bg-rose-500 border-2  rounded-lg">
                  <div>
                    <img
                      src="/assets/image/instagram.jpeg"
                      className="h-[200px] rounded-lg object-cover"
                      alt="Email Icon"
                    />
                  </div>
                  <div className="h-[100px] flex justify-center items-center">
                    <div className="text-center">
                      <h1 className="text-white font-PS text-xl font-semibold">
                        Instagram
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex justify-between p-2 md:pl-[150px] md:pr-[150px] ">
              <Link
                href="https://www.facebook.com/pandu.rangan.562"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="h-[300px] w-[180px] bg-blue-500 border-2  rounded-lg">
                  <div>
                    <img
                      src="/assets/image/facebook.jpeg"
                      className="h-[200px] rounded-lg object-cover"
                      alt="Email Icon"
                    />
                  </div>
                  <div className="h-[100px] flex justify-center items-center">
                    <div className="text-center">
                      <h1 className="text-white font-PS text-xl font-semibold">
                        Facebook
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="h-[300px] w-[180px] bg-cyan-500 border-2  rounded-lg">
                  <div>
                    <img
                      src="/assets/image/twitter.jpeg"
                      className="h-[200px] rounded-lg object-cover"
                      alt="Email Icon"
                    />
                  </div>
                  <div className="h-[100px] flex justify-center items-center">
                    <div className="text-center">
                      <h1 className="text-white font-PS text-xl font-semibold">
                        Twitter
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* social media */}
          </div>
        </div>
      </div>
      {/* mobile */}

      <Footer />
    </>
  );
}

export default ContactUs;
