"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const menuLinks = [
    { name: "Solutions", href: "/" },
    { name: "Documentation", href: "/" },
    { name: "About", href: "/" },
    { name: "FAQ", href: "/" },
  ];

  const iconLinks = [
    { src: "/download.svg", alt: "Download", href: "/" },
    { src: "/web.svg", alt: "Web", href: "/" },
  ];

  const actionLinksDesktop = [
    {
      name: "Institutional",
      href: "/",
      bgColor: "bg-light-green",
      textColor: "text-dark-green",
    },
    {
      name: "Stake now",
      href: "/",
      bgColor: "bg-lime-green",
      textColor: "text-dark-green",
    },
  ];

  const actionLinksMobile = [
    {
      name: "Stake now",
      href: "/",
      bgColor: "bg-lime-green",
      textColor: "text-dark-green",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between py-10 ">
      <div>
        <Image
          src="/logo-pine.svg"
          width={50}
          height={70}
          alt="logo"
          className="w-[30px] xl:w-[50px]"
        />
      </div>

      <div className="hidden lg:flex flex-row items-center justify-between xl:text-xl md:text-base text-sm  text-white">
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:bg-lime-green px-6 py-3 rounded-[3.13rem]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex flex-row items-center xl:text-xl md:text-base text-sm gap-4">
        {iconLinks.map((icon, index) => (
          <Link key={index} href={icon.href}>
            <Image
              src={icon.src}
              width={30}
              height={30}
              alt={icon.alt}
              className="w-[25px] xl:w-[30px]"
            />
          </Link>
        ))}

        {actionLinksDesktop.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`${action.bgColor} px-6 py-3 rounded-[3.13rem] ${action.textColor}`}
          >
            {action.name}
          </Link>
        ))}
      </div>

      <div className="flex lg:hidden items-center gap-4 xl:text-xl md:text-base text-sm">
        {actionLinksMobile.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`${action.bgColor} px-6 py-3 rounded-[3.13rem] ${action.textColor}`}
          >
            {action.name}
          </Link>
        ))}

        <button onClick={() => setMenuOpen(true)} className="text-lime-green">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-6 text-xl font-semibold text-white">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:bg-lime-green px-6 py-3 rounded-lg w-full text-center"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
