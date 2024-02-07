import React from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const navigationData = [
    {
        name: 'Home',
        href: '/Home',
    },

    {
        name: 'About us',
        href: '#',
    },
    {
        name: 'App',
        href: '#',
    },
    {
        name: 'Contact us',
        href: '/ContactUs',
    },
];

  return (
    <ul className="flex gap-x-8">
      {navigationData.map((item, index) => (
        <li key={index}>
          <a
            className={`text-black hover:text-cyan-600 ${
              router.pathname === item.href ? "text-cyan-600" : ""
            }`}
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

// import Head from "next/head";
// import Link from "next/link";
// import NavMenuItems from "../components/NavMenuItems";
// import { useRouter } from "next/router";
// import { useState, useRef, useEffect } from "react";

// function Nav() {
//   const [themeMenuOpened, setThemeMenuOpened] = useState(false);
//   const themeMenu = useRef(null);
//   useEffect(() => {
//     if (!themeMenuOpened) {
//       document.activeElement.blur();
//     } else if (
//       themeMenuOpened &&
//       !themeMenu.current.contains(document.activeElement)
//     ) {
//       setThemeMenuOpened(false);
//     }
//   }, [themeMenuOpened]);

//   return (
//     <>
//       <div className=" ">
//         <div className="px-5 lg:px-0 lg:max-w-7xl mx-auto">
//           <div className="flex justify-between items-center h-[56px] text-black">
//             {/*  Inside Nav Content*/}

//             {/* Logo Section */}
//             <Link href="/">
//               <div className="flex cursor-pointer  flex-shrink-0">
//                 {/*  */}
//                 {/* <h1 className='font-Satisfy text-[32px]'>SandHut <sub className='font-Poppins text-[14px]'>Studios</sub></h1> */}
//                 <Image
//                   src=" /assets/logo/head_logo.png"
//                   className=" h-[100px] lg:h-[130px]"
//                   alt=""
//                 />

//                 {/*  */}
//               </div>
//             </Link>
//             {/* Logo Section */}

//             {/* Nav Section */}
//             <div className=" ">
//               {/*  */}
//               {/* Desktop */}
//               <div className="hidden lg:block ">
//                 <div className="flex gap-5">
//                   {/*NvMenuItems Imported form items Components */}
//                   <NavMenuItems title="Home" nlink="/" />
//                   <NavMenuItems title="About Us" nlink="/" />
//                   <NavMenuItems title="App" nlink="/" />
//                   <NavMenuItems title="Contact Us" nlink="/" />

//                   {/*NvMenuItems Imported form items Components */}
//                 </div>
//               </div>
//               {/* Desktop */}
//               {/*  */}
//             </div>
//             {/* Nav Section */}

//             {/* Button Section */}
//             <div className="">
//               {/* Desktop */}
//               <div className="hidden lg:block">

//                {/* Logo */}

//               </div>
//               {/* Desktop */}

//               {/* Mobile */}
//               <div className="lg:hidden">
//                 {/*Mobile nav Dropdown */}

//                 <div
//                   ref={themeMenu}
//                   tabIndex="0"
//                   className="dropdown  dropdown-end "
//                   onClick={(e) => {
//                     if (themeMenuOpened) {
//                       setThemeMenuOpened(false);
//                     } else {
//                       setThemeMenuOpened(true);
//                     }
//                   }}
//                 >
//                   <ul tabindex="0" className="font-Poppins ">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       class="inline-block w-6 h-6 stroke-current"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       ></path>
//                     </svg>
//                   </ul>

//                   <ul
//                     tabindex="0"
//                     className="font-Poppins dropdown-content menu p-2 shadow  bg-yellow-300 rounded-box w-40"
//                     onFocus={(e) => {
//                       setThemeMenuOpened(true);
//                     }}
//                   >
//                     <NavMenuItems title="Home" nlink="/" />
//                     <NavMenuItems title="About Us" nlink="/" />
//                     <NavMenuItems title="App" nlink="/" />
//                     <NavMenuItems title="Contact Us" nlink="/" />

//                     {/* <a
//                       href="https://www.linkedin.com/company/sandhut-studios/jobs/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <li>
//                         <a target="_blank">Career</a>
//                       </li>
//                     </a> */}
//                   </ul>
//                 </div>
//                 {/*Mobile nav Dropdown */}
//               </div>
//               {/* Mobile */}
//             </div>
//             {/* Button Section */}
//             {/*  Inside Nav Content*/}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Nav;
