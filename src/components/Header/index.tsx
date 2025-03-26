"use client";
import { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import { ActionIcons } from "./ActionIcons";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";
import {
  menuLinks,
  iconLinksLight,
  iconLinksDark,
} from "../../constants/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const iconLinks = darkMode ? iconLinksLight : iconLinksDark;

  return (
    <div className="scroll-mt-36 w-full flex items-center justify-between py-7 font-onest relative sticky top-0 bg-background-100 dark:bg-dark-background-100 z-50 px-8">
      <div className="flex items-center gap-20">
        <Link
          href="/"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
        >
          <Image
            src="/logo-pine.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-[40px] h-auto"
            priority
          />
        </Link>
        <NavLinks menuLinks={menuLinks} />
      </div>

      <ActionIcons iconLinks={iconLinks} onToggle={setDarkMode} />

      <div className="xl:hidden flex items-center gap-4 xl:text-xl md:text-base text-sm">
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

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuLinks={menuLinks}
      />
    </div>
  );
}
