import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

interface ActionIconsProps {
  iconLinks: { src: string; alt: string; href: string }[];
  actionLinks: {
    name: string;
    href: string;
    bgColor: string;
    textColor: string;
  }[];
  onToggle: (darkMode: boolean) => void;
}

export function ActionIcons({
  iconLinks,
  actionLinks,
  onToggle,
}: ActionIconsProps) {
  return (
    <div className="hidden xl:flex flex-row items-center xl:text-xl md:text-base text-sm gap-4">
      <ThemeToggle onToggle={onToggle} />
      {actionLinks.map((action, index) => (
        <Link
          key={index}
          href={action.href}
          className={`${action.bgColor} px-4 py-2 text-base rounded-[3.13rem] ${action.textColor}`}
        >
          {action.name}
        </Link>
      ))}
    </div>
  );
}
