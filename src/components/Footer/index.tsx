import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/constants";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center dark:bg-dark-background-200 bg-background-200 py-14 px-6 gap-8 font-onest">
      <div className="max-w-[1920px] w-full flex flex-col xl:flex-row justify-between gap-10 items-start lg:px-16 px-6 py-0">
        <Image
          src="/logo-pine.svg"
          width={40}
          height={70}
          alt="logo"
          className="w-[30px] xl:w-[40px]"
        />

        <div className="xl:w-1/3 flex flex-col xl:flex-row xl:justify-between items-center xl:text-left gap-10">
          <div className="flex flex-col xl:flex-row gap-16 w-full justify-between">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h2 className="text-primary-300 text-[23px] font-semibold">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="dark:text-grayscale-100 text-grayscale-600 text-base hover:underline cursor-pointer"
                    >
                      <Link
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:w-1/3 w-full flex flex-col items-end justify-end xl:items-end">
          <Link
            className="dark:bg-dark-background-100 bg-background-100 flex items-center justify-between px-6 py-4 rounded-full text-white hover:bg-dark-400 transition-all w-full xl:max-w-[550px] relative"
            href="http://discord.gg/pinestake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm md:text-base dark:text-secondary-300 text-secondary-500">
              Join our community!
            </span>
            <div className="bg-primary-300 size-14 flex items-center justify-center rounded-full absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src="/arrow-right-2.svg"
                width={16}
                height={16}
                alt="arrow"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-2/3 border-t border-secondary-500 pt-4 text-sm text-grayscale-400 text-start">
        <span className="text-[11px] dark:text-grayscale-100 text-grayscale-600">
          © 2025 Pine Stake
        </span>
      </div>
    </footer>
  );
}
