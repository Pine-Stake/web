import Link from "next/link";

interface NavLinksProps {
  menuLinks: { name: string; href: string }[];
}

export function NavLinks({ menuLinks }: NavLinksProps) {
  return (
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
  );
}
