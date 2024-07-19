import Link from 'next/link';
import React from 'react';
import { ListMapper } from '../common/Mapper';

export default function AppHeader() {
  const navigations = [
    { name: "Home", href: "/" },
    {
      name: "Tools", 
      href: "/tools", 
      children: [
        { name: "Text Generator", href: "/tools/text_generator" },
        { name: "Image Generator", href: "/tools/image_generator" },
        { name: "Video Generator", href: "/tools/video_generator" },
        { name: "Code Generator", href: "/tools/code_generator", tag : "new" },
        { name: "Web Builder", href: "/tools/web_builder", tag : "soon" }
      ]
    },
    { name: "Pages", href: "/pages", 

    },
    { name: "Roadmap", href: "/" },
    { name: "Guide", href: "/usage-guide" },
  ];

  return (
 <nav className='relative'>
     <div className='h-20 w-full fixed text-sm  top-0 left-0 z-50 px-5 flex bg-blackest items-center justify-between'>
      {/* HeaderLeft */}
      <div className="header-left">
        <div className="logo text-2xl font-semibold">
          Cube <span className='text-primary font-extrabold font-mono'>AI</span>
        </div>
      </div>
      {/* HeaderCenter */}
      <ul className="header-center hidden lg:flex py-4 px-3 rounded-full items-center gap-3 border border-borderLight dark:border-borderDark w-full max-w-lg ">
      {
        navigations.map((e, i) =>(
          <NavbarListItem key={i} {...e} />
        ))
      }
      </ul>

      {/* HeaderRight */}
      <div className="header-right">
        <button className='px-4 py-2 rounded-t-2xl border-l-primary rounded-r-2xl border-2 border-primary hover:bg-gradient-to-r hover:from-primary hover:to-gradientEnd transition-colors duration-500 ease-in hover:border-primary'>
          Get Started
        </button>
      </div>
    </div>
 </nav>
  );
}

interface NavBarListItemType {
  href: string;
  name: string;
  tag? : string
  children?: NavBarListItemType[];
}

export function NavbarListItem({ name, href, children }: NavBarListItemType) {
  return (
    <li className='group'>
      <span className='relative w-full transition-transform transform duration-500 ease-in-out hover:scale-105'>
        <Link href={href || ""} className="text-body hover:text-white bg-blackest font-semibold tracking-wider py-3 px-4 group-hover:shadow-2xl bg-transparent group-hover:drop-shadow-2xl group-hover:shadow-primary">
          {name}
        </Link>
      
        {children && (
          <ul className="absolute p-2 left-0 mt-2 w-48 bg-blackest shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {children.map((child) => (
              <li key={child.name} className="py-2 px-4 font-semibold relative hover:bg-darker text-body hover:text-white">
                <Link href={child.href || ""} className="block  ">{child.name}</Link>
                {
                  child.tag && <span className="bg-gradient-to-r from-primary text-white rounded-full absolute right-0 top-2 px-2 text-xs to-gradientEnd ">
                        {child.tag}
                  </span>
                }
              </li>
            ))}
          </ul>
        )}
        <div className="absolute w-full rounded-full hidden group-hover:block h-1 mt-2 bg-gradient-to-r from-primary to-gradientEnd"></div>
      </span>
      {
  href === "/pages" && <div className="bg-blackest hidden group-hover:flex rounded-lg border   border-borderDark  right-2  max-w-5xl w-full absolute top-16 h-96">

  </div>
 }
    </li>
  );
}
