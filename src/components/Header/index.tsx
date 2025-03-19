"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const menuLinks = [
    { name: "Solutions", href: "/" },
    { name: "Documentation", href: "/" },
    { name: "About", href: "/" },
    { name: "FAQ", href: "/" },
  ];

  const iconLinks = darkMode
    ? [
        { src: "/light-x.svg", alt: "X", href: "/" },
        { src: "/light-discord.svg", alt: "Discord", href: "/" },
      ]
    : [
        { src: "/dark-x.svg", alt: "X", href: "/" },
        { src: "/dark-discord.svg", alt: "Discord", href: "/" },
      ];
  const actionLinksDesktop = [
    {
      name: "Institutional",
      href: "/",
      bgColor: "bg-primary-300",
      textColor: "text-dark-background-100",
    },
    {
      name: "Stake now",
      href: "/",
      bgColor: "bg-secondary-300",
      textColor: "text-dark-background-100",
    },
  ];

  const actionLinksMobile = [
    {
      name: "Stake now",
      href: "/",
      bgColor: "bg-primary-300",
      textColor: "text-dark-background-100",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between py-7 max-w-[1920px]  font-onest">
      <div className="flex items-center gap-20">
        <div>
          <ThemeToggle onToggle={setDarkMode} />
        </div>
        <div className="hidden xl:flex gap-10 dark:text-grayscale-100 text-grayscale-600">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:bg-primary-300 px-4 py-2 rounded-[56px] text-base hover:text-grayscale-600 dark:hover:text-grayscale-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden xl:flex flex-row items-center xl:text-xl md:text-base text-sm gap-4">
        {iconLinks.map((icon, index) => (
          <Link key={index} href={icon.href}>
            <Image
              src={icon.src}
              width={30}
              height={30}
              alt={icon.alt}
              className="w-[25px] xl:w-[25px]"
            />
          </Link>
        ))}

        {actionLinksDesktop.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`${action.bgColor} px-4 py-2 text-base rounded-[3.13rem] ${action.textColor}`}
          >
            {action.name}
          </Link>
        ))}
      </div>

      <div className="md:flex hidden xl:hidden flex-row items-center xl:text-xl md:text-base text-sm gap-4">
        {iconLinks.map((icon, index) => (
          <Link key={index} href={icon.href}>
            <Image
              src={icon.src}
              width={30}
              height={30}
              alt={icon.alt}
              className="w-[25px] xl:w-[25px]"
            />
          </Link>
        ))}

        {actionLinksDesktop.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`${action.bgColor} px-4 py-2 text-base rounded-[3.13rem] ${action.textColor}`}
          >
            {action.name}
          </Link>
        ))}

        <button onClick={() => setMenuOpen(true)} className="text-primary-300">
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

      <div className="flex md:hidden items-center gap-4 xl:text-xl md:text-base text-sm">
        {actionLinksMobile.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`${action.bgColor} px-6 py-3 rounded-[3.13rem] ${action.textColor}`}
          >
            {action.name}
          </Link>
        ))}

        <button onClick={() => setMenuOpen(true)} className="text-primary-300">
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
                className="hover:bg-primary-300 px-6 py-3 rounded-lg w-full text-center"
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
