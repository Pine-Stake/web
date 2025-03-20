import Link from "next/link";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  menuLinks: { name: string; href: string }[];
}

export function MobileMenu({
  menuOpen,
  setMenuOpen,
  menuLinks,
}: MobileMenuProps) {
  if (!menuOpen) return null;

  return (
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
  );
}
