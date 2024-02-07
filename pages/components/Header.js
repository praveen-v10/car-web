import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "8072875342"; // Replace with the desired phone number
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
    window.location.href = `tel:${'+91 8072875342'}`;
  };


  return (
    <header
      className={`fixed w-full top-0 z-10 transition-all h-[70px] flex items-center ${
        isScrolled ? " bg-slate-50 shadow-lg" : "bg-slate-50"
      }`}
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <div className="container mx-auto  max-w-7xl py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="#">
              <img
                src=" /assets/logo/head_logo.png"
                className={`h-[100px]${
                  isScrolled ? "  lg:h-[130px] duration-300 " : " duration-300 lg:h-[180px] "
                }`}
                alt=""
              />
            </a>
          </div>
          {/* nav initially hidden only show large screen */}
          <div className={`hidden lg:flex  ${
                  isScrolled ? " duration-300  " : " duration-300 text-2xl"
                }`} onClick={() => setIsScrolled(false)}>
            <Nav />
          </div>

          <div className="hidden lg:flex gap-x-8">
            <a href="https://www.facebook.com/pandu.rangan.562" target="_blank">
              <FaInstagram color="black" />
            </a>

            <button onClick={openWhatsApp}>
              <FaInstagram color="black" />
            </button>

            <button onClick={openEmail}>
              <FaInstagram color="black" />
            </button>

          
            <button onClick={handleCallClick}>
              <FaInstagram color="black" />
            </button>
            <FaInstagram color="black" />
          </div>

          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-16 bg-teal-200 w-[180px] right-0 rounded-lg transition-all overflow-hidden  duration-500 ease-in text-right pr-4`}
          >
            <NavMobile />
          </div>

          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            {navMobile ? <IoMdClose /> : <CiMenuBurger />}
          </div>
        </div>
      </div>
    </header>
  );
}

// import React, { useState } from 'react'

// const Nav = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"BLOG'S",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//       text-gray-800'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//         <h1>a</h1>
//         </span>
//         Designer
//       </div>

//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       <h1  name={open ? 'close':'menu'}>a</h1>
//       </div>

//       <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-black lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in text-right pr-8 ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }

//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Nav
