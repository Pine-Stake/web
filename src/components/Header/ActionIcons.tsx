import Link from "next/link";
import Image from "next/image";

interface ActionIconsProps {
  iconLinks: { src: string; alt: string; href: string }[];
  actionLinks: {
    name: string;
    href: string;
    bgColor: string;
    textColor: string;
  }[];
}

export function ActionIcons({ iconLinks, actionLinks }: ActionIconsProps) {
  return (
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
