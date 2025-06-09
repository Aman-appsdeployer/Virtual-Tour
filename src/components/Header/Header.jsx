import { UserCircle } from "lucide-react"; // or use any icon library you prefer
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  { name: "home", href: "#home" },
  { name: "feature", href: "#feature" },
  { name: "about", href: "#about" },
  { name: "gallery", href: "#gallery" },
  { name: "reviews", href: "#reviews" },
  { name: "contact", href: "#contact" },
];

const Header = ({ sectionInView }) => {
  const navigate = useNavigate();

  // Example: Check if user is registered (replace with real auth logic)
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUserIconClick = () => {
    if (isRegistered) {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md fixed z-50 px-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Virtual  <span className="text-accent ml-2">Tour</span>
        </a>
      </div>

      <div className="flex-none gap-4 items-center">
        {/* Desktop Menu */}
        <ul className="px-2 lg:text-lg xl:text-xl  hidden lg:menu lg:menu-horizontal">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`hover:text-accent transition-colors uppercase ${
                sectionInView === section.name ? "text-accent" : ""
              }`}
            >
              <a href={section.href}>{section.name}</a>
            </li>
          ))}
        </ul>

        {/* Login/User Icon */}
        <button
          onClick={handleUserIconClick}
          className="btn btn-ghost btn-circle hover:text-accent transition-all"
          title="Login / Register"
        >
          <UserCircle className="w-8 h-8" />
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0}>
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-[#0098a1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-56 sm:w-64 md:w-80"
          >
            {sections.map((section, i) => (
              <li key={i} className="hover:text-accent">
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;



// import React from "react";

// const sections = [
//   { name: "home", href: "#home" },
//   { name: "feature", href: "#feature" },
//   { name: "about", href: "#about" },
//   { name: "gallery", href: "#gallery" },
//   { name: "reviews", href: "#reviews" },
//   { name: "contact", href: "#contact" },
// ];

// const Header = ({ sectionInView }) => {
//   return (
//     <div className="navbar bg-base-100 shadow-md fixed z-50">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">
//           Travel <span className="text-accent ml-2">.</span>
//         </a>
//       </div>
//       <div className="flex-none ">
//         {/* menu-horizontal */}
//         <ul className=" px-2 lg:text-lg xl:text-xl hidden lg:menu lg:menu-horizontal">
//           {sections.map((section, index) => (
//             <li
//               key={index}
//               className={`hover:text-accent transition-colors uppercase ${
//                 sectionInView === section.name ? "text-accent " : null
//               } `}
//             >
//               <a href={section.href}>{section.name}</a>
//             </li>
//           ))}
//         </ul>
//         {/* Hamburger maenu  */}
//         <div className="dropdown dropdown-end lg:hidden ">
//           <label tabIndex={0}>
//             <button className="btn btn-square btn-ghost">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 // fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-8 h-8 text-[#0098a1]  font-bold"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </button>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu items-center dropdown-content p-2 shadow bg-base-100 rounded-box w-56 sm:w-64 md:w-80  "
//           >
//             <li className="hover:text-accent">
//               <a href="#home">Home</a>
//             </li>
//             <li className="hover:text-accent">
//               <a href="#feature">Feature</a>
//             </li>
//             <li className="hover:text-accent">
//               <a href="#about">About</a>
//             </li>
//             <li className="hover:text-accent">
//               <a href="#gallery">Gallery</a>
//             </li>
//             <li className="hover:text-accent">
//               <a href="#reviews">Reviews</a>
//             </li>
//             <li className="hover:text-accent">
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
