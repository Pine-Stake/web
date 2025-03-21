"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export function ThemeToggle({
  onToggle,
}: {
  onToggle: (darkMode: boolean) => void;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(newDarkMode);
    onToggle(newDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="focus:outline-none">
      <Image
        src={darkMode ? "/sun.svg" : "/moon.svg"}
        alt="Toggle Theme"
        width={24}
        height={24}
        className="w-[24px] h-[24px]"
      />
    </button>
  );
}
