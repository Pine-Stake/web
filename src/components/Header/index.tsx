"use client";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "./NavLinks";
import { ActionIcons } from "./ActionIcons";
import { MobileMenu } from "./MobileMenu";
import {
  menuLinks,
  iconLinksLight,
  iconLinksDark,
  actionLinks,
} from "../../constants/constants";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const iconLinks = darkMode ? iconLinksLight : iconLinksDark;

  return (
    <div className="w-full flex items-center justify-between py-7 max-w-[1920px] font-onest">
      <div className="flex items-center gap-20">
        <div>
          <ThemeToggle onToggle={setDarkMode} />
        </div>
        <NavLinks menuLinks={menuLinks} />
      </div>

      <ActionIcons iconLinks={iconLinks} actionLinks={actionLinks} />

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
