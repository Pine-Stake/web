import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const footerLinks = [
    {
      title: "Home",
      links: ["Solutions", "Documentation", "About", "FAQ"],
    },
    {
      title: "Security",
      links: ["Audit reports", "Term of Use"],
    },
    {
      title: "Community",
      links: ["Twitter", "Discord", "Telegram", "LinkedIn"],
    },
  ];

  return (
    <footer className="w-full flex flex-col items-center bg-dark-200 py-14 px-6">
      <div className="max-w-[1920px] w-full flex flex-col gap-10 items-start lg:px-16 px-6 py-0">
        <Image
          src="/logo-pine.svg"
          width={40}
          height={70}
          alt="logo"
          className="w-[30px] xl:w-[40px]"
        />

        <div className="w-full flex flex-col xl:flex-row xl:justify-between items-centerxl:text-left gap-10">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-32 w-full justify-center">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h2 className="text-lime-green text-[23px] font-semibold">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-grayscale-100 text-base hover:underline cursor-pointer"
                    >
                      <Link href="/" target="_blank" rel="noopener noreferrer">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-start xl:items-end">
          <button className="bg-dark-green flex items-center justify-between px-6 py-3 rounded-full text-white hover:bg-dark-400 transition-all w-full max-w-[350px] relative">
            <span className="text-sm md:text-base text-secondary-300">
              Join our community!
            </span>
            <div className="bg-lime-green w-12 h-12 flex items-center justify-center rounded-full absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src="/arrow-right-2.svg"
                width={16}
                height={16}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div className="w-full border-t border-secondary-500 pt-4 text-sm text-grayscale-400 text-center">
          <span className="text-[11px] text-grayscale-100">
            © 2025 Pine Stake
          </span>
        </div>
      </div>
    </footer>
  );
}
